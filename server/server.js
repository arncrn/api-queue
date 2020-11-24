const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const axios = require("axios");
const dbquery = require("./db-query.js");

const app = express();
const port = 3001;

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.options("*", cors());

function getRequestLine(headerString) {
  return headerString.split("\r\n")[0];
}

function createResponseLine(rawResponse, requestLine) {
  return `${requestLine.split(" ").slice(-1)[0]} ${rawResponse.status} ${
    rawResponse.statusText
  }`;
}

function buildParamsOrHeaders(data) {
  let result = {};

  data.forEach(({ key, value }) => {
    if(key) {
      result[key] = value;
    }
  })

  return result;
}

function buildRawResponseHeaders(rawResponse, responseLine) {
  let { status = "", data: body = "", ...headers } = rawResponse;

  return {
    headers,
    status,
    body,
    responseLine,
  };
}

function buildRawRequestHeaders(rawRequest) {
  let headers = {};

  let headersArray = rawRequest
    .split("\r\n")
    .slice(1)
    .filter((header) => header);

  headersArray.forEach((header) => {
    let [key, val] = header.split(": ");
    headers[`${key}:`] = val;
  });

  return { headers };
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
    let options = generateRequestOptions(userRequest);
    console.log("3. Server sends API call on behalf of users", Date.now())
    let responseData = await axios(options); // Fixed the DB async issue
    console.log(responseData);

    insertRawRequestResponse(responseData, newlyCreatedRequestId);

    res.status(200).send("OK");
  } catch (err) {
    console.log(err);
  }

  // axios(options)
  // .then(function (responseData) {
  //   console.log("4. Server receives response from that API call", Date.now())
  //   insertRawRequestResponse(responseData, newlyCreatedRequestId);
  //   res.status(200).send("OK");
  //   })
    // .then(function () {
    //   console.log("8. Sends back response to the Frontend", Date.now())
    //   res.status(200).send("OK");
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
}

async function insertRawRequestResponse(responseData, newlyCreatedRequestId) {
  // fix popup rawrequest not displaying `body`, need to add the body to db
  let rawRequest = buildRawRequestHeaders(responseData.request._header);
  if (responseData.config.data) {
    // somehow add it. still discussing.
    rawRequest.body = responseData.config.data;
  }

  // STEPS
    // Create rawRequest
    // Create parsedResponse

  
  console.log(responseData);

  let rawResponse = String(responseData);

  let parsedResponse = Object.assign(
    {},
    {
      ...responseData.headers,
      data: responseData.data,
      status: responseData.status,
      statusText: responseData.statusText,
    }
  );

  console.log("5. Inserts the response data into the database", Date.now());

  await dbquery(
    `UPDATE requests SET raw_request=$2, raw_response=$3, parsed_response=$4 WHERE id=$1`,
    [newlyCreatedRequestId, rawRequest, rawResponse, parsedResponse]
  );
  console.log("6. Database updated", Date.now());
}

function formatQueryData(data) {
  return data.map((request) => {
    let rawRequest = request.raw_request || "";
    let parsedResponse = request.parsed_response || {};

    let requestLine = getRequestLine(rawRequest);
    let responseLine = createResponseLine(parsedResponse, requestLine);

    return {
      id: request.id,
      httpVerb: request.user_request.httpVerb,
      hostpath: request.user_request.hostpath,
      time: request.user_request.time,
      timeZone: request.user_request.timeZone,
      date: request.user_request.date,
      name: request.user_request.name,
      headers: request.user_request.headers,
      parameters: request.user_request.parameters,
      body: request.user_request.body,
      request: buildRawRequestHeaders(rawRequest), // needs to be updated because we changed name of rawResponse to parsedResponse
      response: buildRawResponseHeaders(parsedResponse, responseLine), // needs to be updated because we changed name of rawResponse to parsedResponse
    };
  });
}

// Render React App
app.get("/", async (req, res) => {
  res.redirect(200, "/allrequests");
});

// Make endpoint private
// Returns a list of ALL request
app.get("/allrequests", async (req, res, next) => {
  try {
    let allData = await dbquery("SELECT * FROM requests");
    let allRequests = formatQueryData(allData.rows);

    res.status(200).send(JSON.stringify(allRequests));
  } catch (err) {
    next(err);
  }
});

// Make endpoint private
// Send the request received from user (either now or later)
app.post("/makerequest", async (req, res) => {
  try { 
    let userRequest = req.body;
    console.log(userRequest);

    console.log("2. Server inserts user request into database", Date.now());
    let queryResult = await dbquery(
      `INSERT INTO requests (user_id, user_request) VALUES ($1, $2) RETURNING id`,
      [1, userRequest]
    );

    let newlyCreatedRequestId = queryResult.rows[0].id;

    if (queryResult.rowCount > 0) {
      // Run conditionals to check if request should be sent now or later
      // switch(req.httpVerb) {
      //   case "GET":
      //     sendRequest(userRequest, newlyCreatedRequestId, res);
      //     break; 
      //   case "DELETE":
      //     break; 
      //   case "POST":
      //     break; 
      //   case "PUT":
      //     break; 
      //   case "PATCH":
      //     break; 
      //   default: 
      // }

      sendRequest(userRequest, newlyCreatedRequestId, res);
    }
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
