const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const axios = require("axios");
const { Client } = require("pg");
const { request } = require("express");

const app = express();
const port = 3001;

app.use(morgan("dev"));
app.use(cors());
app.options("*", cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function buildParameters(paramData) {
  if (!paramData[0].id) return {};

  let parameters = {};

  paramData.forEach((parameter) => {
    parameters[parameter["key"]] = parameter["value"];
  });

  return parameters;
}

function buildHeaders(headerData) {
  if (!headerData[0].id) return {};

  let headers = {};

  headerData.forEach((header) => {
    headers[header["key"]] = header["value"];
  });

  return headers;
}

function buildRequestHeaders(headerString) {
  let headers = {};

  headerString.split("\r\n").forEach((header) => {
    let parts = header.split(": ");
    let prop = parts[0] + ":";
    let value = parts[1];
    headers[prop] = value;
  });

  return headers;
}

function getRequestLine(headerString) {
  return headerString.split("\r\n")[0];
}

function parseResponse(responseData) {
  let requestHeaders = buildRequestHeaders(responseData.request._header);
  let responseHeaders = responseData.headers;
  let responsePayload = responseData.data;
  let responseStatus = responseData.status;
  let responseStatusText = responseData.statusText;
  let requestLine = `${getRequestLine(responseData.request._header)}`;
  let responseLine = `${
    requestLine.split(" ").slice(-1)[0]
  } ${responseStatus} ${responseStatusText}`;

  let dataForFrontEnd = {
    request: {
      headers: requestHeaders,
      requestLine: requestLine,
    },
    response: {
      headers: responseHeaders,
      status: responseStatus,
      responseLine: responseLine,
      payload: responsePayload,
    },
  };

  return dataForFrontEnd;
}

function makeRequest(userRequest) {
  let bodyHeader = {};
  let customHeaders = buildHeaders(userRequest.headers);

  if (userRequest.body.contentType) {
    bodyHeader["Content-Type"] = userRequest.body.contentType;
  }

  let options = {
    method: userRequest.httpverb,
    url: userRequest.hostpath,
    params: buildParameters(userRequest.parameters),
    headers: Object.assign(bodyHeader, customHeaders),
    data: userRequest.body.payload,
  };

  axios(options)
    .then(function (responseData) {
      let dataForFrontEnd = parseResponse(responseData);
      console.log(dataForFrontEnd);

      // Continue on Tuesday:
      // Store the raw response (responseData) to our DB
      // Store the raw request (responseData.request._header) to our DB
      // Send dataForFrontEnd back to frontend to update sidebar state

      // res.send("Hello world");
      // res.status(200).send(Object.assign({}, data, dataForFrontEnd));
    })
    .catch((err) => {
      console.log(err);
    });
}

function formatQueryData(data) {
  return data.map((request) => {
    return {
      id: request.id,
      ...request.user_request,
      request: request.raw_request || {},
      response: request.raw_response || {},
    }
  });
}

// Make this endpoint private later
app.post("/makerequest", async (req, res) => {
  let userRequest = req.body;

  const client = new Client({
    database: "apiqdb",
  });

  // Insert user request to DB
  await client.connect();
  const queryResult = await client.query(
    `INSERT INTO requests (user_id, user_request) VALUES ($1, $2)`,
    [1, userRequest]
  );
  await client.end();

  // Response back to frontend with request DB insertion status
  res.send(queryResult.rowCount > 0);

  // Make the actual user request
  if (queryResult.rowCount > 0) {
    // Run some conditionals to check if request is to be sent now or later
    makeRequest(userRequest);
  }
});

// Render React App here
app.get("/", async (req, res) => {
  try {
    await client.connect();
    let allData = await client.query("SELECT * FROM requests");
    await client.end();
    res.send(allData.rows);
  } catch (err) {
    console.log(err);
  }

  // let data = makeRequest(res);

  // const user_data = await client.query("SELECT user_request FROM requests");
  // const raw_request = await client.query("SELECT raw_request FROM requests");
  // const raw_response = await client.query("SELECT raw_response FROM requests");
  // const time_sent = await client.query("")

  // console.log(parseResponse(raw_response[0]));
  // console.log(query.rows[0], query.rowCount);
});

app.get("/allrequests", async (req, res, next) => {
  try {
    const client = new Client({
      database: "apiqdb",
    });

    await client.connect();
    let allData = await client.query("SELECT * FROM requests");
    await client.end();

    res.status(200).send(JSON.stringify(formatQueryData(allData.rows)));
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
