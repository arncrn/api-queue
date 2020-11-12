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
  httpverb: "POST",
  hostpath: 'http://dummy.restapiexample.com/api/v1/create',
  time: '15:15',
  timeZone: 'PST',
  date: new Date('January 25, 1982'),
  parameters: [{
    id: "",
    key: '',
    value: ''
  }],
  headers: [
    {
      id: "1",
      key: "Authorization",
      value: "1234asdf",
    },
    {
      id: "2",
      key: "Content-Type",
      value: "application/json",
    },
  ],
  body: {
    contentType: 'application/json',
    payload: '{"name":"test","salary":"123","age":"23"}'
  }};

function buildParameters (paramData) {
  if (!paramData[0].id) return {};

  let parameters = {};

  paramData.forEach(parameter => {
    parameters[parameter["key"]] = parameter["value"];
  })

  return parameters;
}

function buildHeaders (headerData) {
  if (!headerData[0].id) return {};

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

function makeRequest(res) {
  let bodyHeader = {};
  let customHeaders = buildHeaders(data.headers);

  if (data.body.contentType) {
    bodyHeader['Content-Type'] = data.body.contentType
  }

  let options = {
    method: data.httpverb,
    url: data.hostpath,
    params: buildParameters(data.parameters),
    headers: Object.assign(bodyHeader, customHeaders),
    data: data.body.payload,
  };

  axios(options)
  .then(function (response) {
    let requestHeaders = buildRequestHeaders(response.request._header);
    let responseHeaders = response.headers;
    let responsePayload = response.data;
    let responseStatus = response.status;
    let responseStatusText = response.statusText;
    let requestLine = `${getRequestLine(response.request._header)}`;
    let responseLine = `${requestLine.split(' ').slice(-1)[0]} ${responseStatus} ${responseStatusText}`

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
      }
    }

    res.status(200).send(Object.assign({}, data, dataForFrontEnd));
  }).catch((err) => {
    console.log(err);
  });
}

app.get('/', (req, res) => {
    makeRequest(res);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(404).send(err.message);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})