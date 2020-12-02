const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const axios = require("axios");
const dbquery = require("./lib/db-query.js");
// const buildRequestResponse = require("./lib/buildRequestResponse.js");
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



async function checkDatabaseForFutureRequests() {
  let result = await dbquery("SELECT * FROM requests WHERE raw_response IS NULL ORDER BY time_scheduled");
  let timeNow = new Date();
  // console.log('line 22', timeNow, new Date(result.rows[0].time_scheduled));
  let requestsToSend = result.rows.filter(request => {
    return timeNow >= new Date(request.time_scheduled);
  });

  return requestsToSend;
}

function createTimeScheduled(userRequest) {
  // '2020-11-25 12:24:00 CST'
  console.log(userRequest.date, 'line 32');
  let date = userRequest.date;
  let time = userRequest.time + ":00";
  let timeZone = userRequest.timeZone;

  console.log(`${date} ${time} ${timeZone}`, 'line 40');
  console.log(userRequest.date, 'line 41');

  return `${date} ${time} ${timeZone}`;
}

setInterval(async () => {
  let futureRequests = await checkDatabaseForFutureRequests();
  for (let i = 0; i < futureRequests.length; i++) {
    let request = futureRequests[i];

    let options = generateRequestOptions(request.user_request);
    let responseData = await axios(options);
    await insertRawRequestResponse(responseData, request.id);
  }
}, 1000 * 60)

function buildParamsOrHeaders(data) {
  let result = {};

  data.forEach(({ key, value }) => {
    if(key) {
      result[key] = value;
    }
  })

  return result;
}

function generateRequestOptions(userRequest) {
  let bodyHeader = {};
  let customHeaders = buildParamsOrHeaders(userRequest.headers);

  if (userRequest.body.contentType) {
    bodyHeader["Content-Type"] = userRequest.body.contentType;
  }

  return {
    method: userRequest.httpVerb,
    url: userRequest.hostpath,
    params: buildParamsOrHeaders(userRequest.parameters),
    headers: Object.assign(bodyHeader, customHeaders),
    data: userRequest.body.payload,
  };
}

async function sendRequest(userRequest, newlyCreatedRequestId, res) {
  try {
      let timeNow = new Date();
      let scheduledTime = new Date(`${userRequest.date} ${userRequest.time} ${userRequest.timeZone}`);

      if (timeNow >= scheduledTime) {
        let options = generateRequestOptions(userRequest);
        let responseData = await axios(options);
        await insertRawRequestResponse(responseData, newlyCreatedRequestId);
      };

    res.status(200).send("OK");
  } catch (err) {
    console.log(err);
  }
}

async function insertRawRequestResponse(rawResponse, newlyCreatedRequestId) {
  let {rawRequest, parsedResponse} = buildRequestResponse(rawResponse);

  rawResponse = String(rawResponse);
  await dbquery(
    `UPDATE requests SET raw_request=$2, raw_response=$3, parsed_response=$4 WHERE id=$1`,
    [newlyCreatedRequestId, rawRequest, rawResponse, parsedResponse]
  );
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
