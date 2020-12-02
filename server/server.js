const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const axios = require("axios");
const dbquery = require("./lib/db-query.js");
const generateRequestOptions = require("./lib/generateRequestOptions.js");

const pgPersistance = require("./lib/pg-persistance.js");
const DatabaseInterval = require("./lib/database-interval.js");

new DatabaseInterval();

const app = express();
const port = 3001;

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.locals.user = new pgPersistance();
  next();
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
        let responseData = await axios(options);
        await res.locals.user.insertRawRequestResponse(responseData, newlyCreatedRequestId);
      };

    res.status(200).send("OK");
  } catch (err) {
    console.log(err);
  }
}

// Render React App
app.get("/", async (req, res) => {
  res.redirect(200, "/allrequests");
});

// Make endpoint private
// Returns a list of ALL request
app.get("/allrequests", async (req, res, next) => {
  try {
    let allRequests = await res.locals.user.getAllData()

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
        `INSERT INTO users (email, password, timezone) VALUES ($1, $2, $3)`, [submittedEmail, submittedPassword, submittedTimeZone]
      );

      if (insertResult.rowCount < 1) {
        throw new Error('Failed to create user');
      }

      res.status(200).send('Good');
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
        message = 'Good'
        statusCode = 200;
      }
    }
  
    res.status(statusCode).send(message);
  } catch (error) {
    next(error);
  }
});

// Make endpoint private
// Send the request received from user (either now or later)
app.post("/makerequest", async (req, res, next) => {
  try { 
    let userRequest = req.body;
    let timeScheduled = createTimeScheduled(userRequest);
    let newlyCreatedRequestId = await res.locals.user.insertRequest(userRequest, timeScheduled);

    await sendRequest(userRequest, newlyCreatedRequestId, res);
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(404).send(err.message);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
