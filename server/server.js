// handle all axios request/responses
//  - success
//  - 404 (err.response)
//  - no status ?

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const axios = require("axios");
const dbquery = require("./lib/db-query.js");
const generateRequestOptions = require("./lib/generateRequestOptions.js");
const session = require('express-session');
const LokiStore = require('connect-loki')(session);

const pgPersistance = require("./lib/pg-persistance.js");
const DatabaseInterval = require("./lib/database-interval.js");

new DatabaseInterval();

const app = express();
const port = 3001;

let options = {};
 
app.use(session({
    store: new LokiStore(options),
    secret: 'secret', // change later
    cookie: {
      maxAge: 31 * 24 * 60 * 60 * 1000,
      path: '/', 
      httpOnly: true, 
      secure: false // look at it later SSL
    },
    name: "api-q-session-id",
    resave: false,
    saveUninitialized: false
}));

app.use(morgan("dev"));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.locals.store = new pgPersistance(req.session);
  next();
})

app.use((req, res, next) => {
  res.locals.userId = req.session.userId;
  res.locals.signedIn = req.session.signedIn;
  res.locals.userTimezone = req.session.userTimezone;
  next()
})

app.options("*", cors());


function createTimeScheduled(userRequest) {
  // '2020-11-25 12:24:00 CST'
  let date = userRequest.date;
  let time = userRequest.time + ":00";
  let timeZone = userRequest.timeZone;

  return `${date} ${time} ${timeZone}`;
}


async function sendRequest(userRequest, newlyCreatedRequestId, res) {
  try {
      let timeNow = new Date();
      let scheduledTime = new Date(`${userRequest.date} ${userRequest.time} ${userRequest.timeZone}`);

      if (timeNow >= scheduledTime) {
        let options = generateRequestOptions(userRequest);
        try {
          let responseData = await axios(options);
          await res.locals.store.insertRawRequestResponse(responseData, newlyCreatedRequestId);
        } catch (err) {
          console.log(`Request #${newlyCreatedRequestId} failed`);
          // console.log(err);
          // await res.locals.store.insertRawRequestResponse(JSON.stringify({status: 'invalid'}), newlyCreatedRequestId);
        } finally {
          res.status(200).send("OK");
        }
      };

    // res.status(200).send("OK");
  } catch (err) {
    console.log(err);
  }
}

// Render React App
app.get("/", async (req, res) => {
  res.status(200);
});

app.post("/logout", (req, res) => {
  delete req.session.signedIn;
  delete req.session.userId;
  delete req.session.userTimezone;

  res.status(200).send("OK");
})

app.get("/loginstatus", (req, res) => {
  let signedIn = req.session.signedIn;
  let timezone = req.session.userTimezone;
  res.send({signedIn, timezone});
  // return res.send(JSON.stringify({signedIn, timezone}));
})

// Make endpoint private
// Returns a list of ALL request
app.get("/allrequests", async (req, res, next) => {
  try {
    let allRequests = await res.locals.store.getAllData()

    res.status(200).send(JSON.stringify(allRequests));
  } catch (err) {
    next(err);
  }
});


app.post("/signup", async (req, res, next) => {
  try {
    let submittedEmail = req.body.email.toLowerCase();
    let submittedPassword = req.body.password;
    let submittedTimeZone = req.body.timezone;

    let queryResult = await dbquery(
      `SELECT email FROM users WHERE email = $1`, [submittedEmail]
    );
  
    if (queryResult.rowCount === 0) {
      let insertResult = await dbquery(
        `INSERT INTO users (email, password, timezone) VALUES ($1, $2, $3) RETURNING id`, [submittedEmail, submittedPassword, submittedTimeZone]
      );

      if (insertResult.rowCount < 1) {
        throw new Error('Failed to create user');
      }

      let session = req.session;
      session.userId = insertResult.rows[0].id;
      session.userTimezone = submittedTimeZone;
      session.signedIn = true;

      res.status(200).send(JSON.stringify({timezone: submittedTimeZone, status: 200}));
    } else {
      res.status(409).send('User already exists');
    }
  } catch (error) {
    next(error);
  }
});


// Next steps
  // Use Bcrypt to compare everything. Coming back after making sign up page.
app.post("/login", async (req, res, next) => {
  try {
    let submittedEmail = req.body.email.toLowerCase();
    let submittedPassword = req.body.password;
    let statusCode = 403;
    let message = 'Invalid email/password';

    let queryResult = await dbquery(
      `SELECT password FROM users WHERE email = $1`, [submittedEmail]
    );
  
    if (queryResult.rowCount > 0) {
      if (submittedPassword === queryResult.rows[0].password) {
        let idResult = await dbquery(
          `SELECT id, timezone FROM users WHERE email = $1`, [submittedEmail]
        );
          //working
        let session = req.session;
        session.userId = idResult.rows[0].id;
        session.userTimezone = idResult.rows[0].timezone;
        session.signedIn = true;
        
        statusCode = 200;
        message = JSON.stringify({timezone: session.userTimezone, status: statusCode});
      }
    }

    res.status(statusCode).send(message);
  } catch (error) {
    next(error);
  }
});

app.post("/logout", (req, res, next) => {
  delete res.locals.userId;
  delete res.locals.signedIn;
  res.status(200).send('OK');
});

// Make endpoint private
// Send the request received from user (either now or later)
app.post("/makerequest", async (req, res, next) => {
  try { 
    let userRequest = req.body;
    let timeScheduled = createTimeScheduled(userRequest);
    let newlyCreatedRequestId = await res.locals.store.insertRequest(userRequest, timeScheduled);

    await sendRequest(userRequest, newlyCreatedRequestId, res);
  } catch (err) {
    next(err);
  }
});

app.post("/updaterequest", async (req, res, next) => {
  try {
    //working
    let userRequest = req.body.requestData;
    let requestId = req.body.requestId;
    let timeScheduled = createTimeScheduled(userRequest);

    await dbquery("UPDATE requests SET user_request = $1, time_scheduled = $2 WHERE id = $3", 
                  [userRequest, timeScheduled, requestId]);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
})

app.use((err, req, res, next) => {
  console.log(err);
  res.status(404).send(err.message);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
