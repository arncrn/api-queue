const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const app = express()
const port = 3000

app.use(morgan("dev"));

let data = {
  id: '2',
  email: 'frank@gmail.com',
  name: "req to apple",
  httpverb: "GET",
  hostpath: 'https://www.google.com/search',
  time: '15:15',
  timeZone: 'PST',
  date: new Date('January 25, 1982'),
  parameters: [{
    id: "1",
    key: 'oq',
    value: 'sports'
  }, {
    id: "2",
    key: 'q',
    value: "tennis"
  }],
  headers: [
    {
      id: "1",
      key: "Authorization",
      value: "1234asdf",
    },
    {
      id: "2",
      key: "content-type",
      value: "application/json",
    },
  ],
  body: {
    contentype: 'text/html',
    payload: '!DOCTYPE ....'
  }};

function buildParameters (paramData) {
  let parameters = {};

  paramData.forEach(parameter => {
    parameters[parameter["key"]] = parameter["value"];
  })

  return parameters;
}

function buildHeaders (headerData) {
  let headers = {};

  headerData.forEach(header => {
    headers[header["key"]] = header["value"];
  })

  return headers;
}

function buildRequestHeaders (headerString) {
  let headers = {};

  headerString.split('\r\n').forEach(header => {
    let parts = header.split(': ');
    let prop = parts[0] + ':';
    let value = parts[1];
    headers[prop] = value;
  });

  return headers;
}

function getRequestLine(headerString) {
  return headerString.split('\r\n')[0];
}

app.get('/', (req, res) => {
  let options = {
    method: data.httpverb,
    url: data.hostpath,
    params: buildParameters(data.parameters),
    headers: buildHeaders(data.headers),
    responseType: 'json'
  };
  axios(options)
  .then(function (response) {
    // 1. send response to database
    // if successful: 

    // for GET request:
    // let requestHeaders = response.request._header;
    let requestHeaders = buildRequestHeaders(response.request._header);
    let responseHeaders = response.headers;
    let responsePayload = response.data;
    let responseStatus = response.status;
    let responseStatusText = response.statusText;
    let requestLine = `${getRequestLine(response.request._header)}`;
    let responseLine = `${requestLine.split(' ').slice(-1)[0]} ${responseStatus} ${responseStatusText}`
    // console.log(responseHeaders)
    // console.log(responsePayload)
    // console.log(responseStatus)
    // console.log(responseStatusText)

    

    let toTheFrontEnd = {
      request: {
         headers: requestHeaders,
         requestLine: requestLine,
      },
      response: {
        headers: responseHeaders,
        status: responseStatus,
        responseLine: `${responseStatus} ${responseStatusText}`,
        payload: responsePayload,
      }

    }

    // res.status(200).send(Object.assign({}, data, toTheFrontEnd));
    res.status(200).send(`<p>${requestLine}</p><p>${responseLine}</p>`);
  }).catch((err) => {
    console.log(err);
  });
})

app.use((err, req, res, next) => {
  console.log(err);
  res.status(404).send(err.message);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})