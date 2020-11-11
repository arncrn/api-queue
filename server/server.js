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
      key: "Content-Type",
      value: "text/html",
    }
  ],
  body: {
    contentype: 'text/html',
    payload: '!DOCTYPE ....'
  }};

function buildParameters (data) {
  let parameters = {};

  data.parameters.forEach(parameter => {
    parameters[parameter["key"]] = parameter["value"];
  })

  return parameters;
}

function buildHeaders (data) {
  let headers = {};

  data.headers.forEach(header => {
    headers[header["key"]] = header["value"];
  })

  return headers;
}

app.get('/', (req, res) => {
  let options = {
    method: data.httpverb,
    url: data.hostpath,
    params: buildParameters(data.parameters),
    headers: buildHeaders(data.headers)
  };

  axios(options)
    .then(function (response) {
      // for GET request:
      // let requestHeaders = response.request._header;
      // let responseHeaders = response.headers;
      // let responsePayload = response.data;
      // let responseStatus = response.status;
      // let responseStatusText = response.statusText;
      // console.log(requestHeaders)
      // console.log(responseHeaders)
      // console.log(responsePayload)
      // console.log(responseStatus)
      // console.log(responseStatusText)

      // res.send();
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})