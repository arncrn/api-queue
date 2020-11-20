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
app.use((err, req, res, next) => {
  console.log(err);
  res.status(404).send(err.message);
});

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
  // This needs to be fixed later, always returns {} because first input id is always ''
  // headers: [ { id: '', key: 'h', value: '1' }, { id: 5, key: 'h1', value: '2' } ],
  // parameters: [ { id: '', key: 't', value: '1' }, { id: 4, key: 't2', value: '2' } ],
  if (!data[0].id) return {};

  let result = {};

  data.forEach(({ key, value }) => (result[key] = value));

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
    method: userRequest.httpverb,
    url: userRequest.hostpath,
    params: buildParamsOrHeaders(userRequest.parameters),
    headers: Object.assign(bodyHeader, customHeaders),
    data: userRequest.body.payload,
  };
}

function sendRequest(userRequest, newlyCreatedRequestId, res) {
  let options = generateRequestOptions(userRequest);

  console.log("3. Server sends API call on behalf of users", Date.now())
  axios(options)
    .then(function (responseData) {
      console.log("4. Server receives response from that API call", Date.now())
      // insertRawRequestResponse(responseData, newlyCreatedRequestId);
      let successfulResponse = insertRawRequestResponse(responseData, newlyCreatedRequestId);
      // if(!successfulResponse) throw Error;
    })
    .then(function () {
      console.log("8. Sends back response to the Frontend", Date.now())
      res.status(200).send("OK");
    })
    .catch((err) => {
      console.log(err);
    });
}

async function insertRawRequestResponse(responseData, newlyCreatedRequestId) {
  let rawRequest = responseData.request._header;
  let rawResponse = Object.assign(
    {},
    {
      ...responseData.headers,
      data: responseData.data,
      status: responseData.status,
      statusText: responseData.statusText,
    }
  );

  console.log("5. Inserts the response data into the database", Date.now());
  // await dbquery(
  //   `UPDATE requests SET raw_request=$2, raw_response=$3 WHERE id=$1`,
  //   [newlyCreatedRequestId, rawRequest, rawResponse]
  // );
  
  let queryResponse = await dbquery(
    `UPDATE requests SET raw_request=$2, raw_response=$3 WHERE id=$1`,
    [newlyCreatedRequestId, rawRequest, rawResponse]
  );
  console.log("6. Database updated", Date.now());
  return queryResponse.rowCount > 0;
}

function formatQueryData(data) {
  return data.map((request) => {
    let rawRequest = request.raw_request || "";
    let rawResponse = request.raw_response || {};

    let requestLine = getRequestLine(rawRequest);
    let responseLine = createResponseLine(rawResponse, requestLine);

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
      request: buildRawRequestHeaders(rawRequest),
      response: buildRawResponseHeaders(rawResponse, responseLine),
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
    // let userRequest = req.body;
    
    // if (true) {
    //   // if now
    //   sendRequest(userRequest, newlyCreatedRequestId, res);
    // } else {
    //   // if future
    // }
    
    let userRequest = req.body;

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
