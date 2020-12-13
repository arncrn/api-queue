module.exports = [
  [
    {
      httpVerb: 'POST',
      hostpath: 'https://reqres.in/api/users/2',
      time: '02:01',
      timeZone: 'CST',
      date: '2020-12-12',
      name: 'Post request',
      headers: [ [Object] ],
      parameters: [ [Object] ],
      body: {
        contentType: 'application/json',
        payload: '{\n    "name": "morpheus",\n    "job": "leader"\n}'
      }
    },
    {
      requestLine: 'POST /api/users/2 HTTP/1.1',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'User-Agent': 'axios/0.21.0',
        'Content-Length': '47',
        Host: 'reqres.in',
        Connection: 'close'
      },
      body: '{\n    "name": "morpheus",\n    "job": "leader"\n}'
    },
    '[object Object]',
    {
      responseLine: 'HTTP/1.1 201 Created',
      headers: {
        date: 'Sat, 12 Dec 2020 10:02:37 GMT',
        'content-type': 'application/json; charset=utf-8',
        'content-length': '83',
        connection: 'close',
        'set-cookie': [Array],
        'x-powered-by': 'Express',
        'access-control-allow-origin': '*',
        etag: 'W/"53-TVL+eWV1S+jTQ4KFnxYCzWke+sw"',
        via: '1.1 vegur',
        'cf-cache-status': 'DYNAMIC',
        'cf-request-id': '06f8000cfa00003ae049882000000001',
        'expect-ct': 'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'report-to': '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report?s=d40hBVafnJNaIO58VqvRX4a8txTd5lgtOV5wKnvEStcC%2BAJ33wY%2FIihZ4vSmsnl3RcwVfYMT2M4BDcjFi0Vw5hNmmX3YMdnB7pw%3D"}],"group":"cf-nel","max_age":604800}',
        nel: '{"report_to":"cf-nel","max_age":604800}',
        server: 'cloudflare',
        'cf-ray': '60069c5b29ed3ae0-SJC'
      },
      body: {
        name: 'morpheus',
        job: 'leader',
        id: '58',
        createdAt: '2020-12-12T10:02:36.940Z'
      },
      status: 201,
      statusText: 'Created'
    }, 
    '2020-12-12 02:01:00 CST',
    '2020-12-12 02:02:37.045044'
  ], 
  [
    {
      httpVerb: 'GET',
      hostpath: 'https://www.example.com',
      time: '02:11',
      timeZone: 'AKST',
      date: '2023-12-7',
      name: 'Future request',
      headers: [ [Object] ],
      parameters: [ [Object] ],
      body: { contentType: '', payload: '' }
    },
    null,
    null,
    null,
    '2023-12-7 02:11:00 AKST',
    null
  ], 
  [
    {
      httpVerb: 'GET',
      hostpath: 'https://reqres.in/api/users/23',
      time: '19:12',
      timeZone: 'EST',
      date: '2020-12-11',
      name: 'Request with 404',
      headers: [ [Object] ],
      parameters: [ [Object] ],
      body: { contentType: '', payload: '' }
    },
    {
      requestLine: 'GET /api/users/23 HTTP/1.1',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'User-Agent': 'axios/0.21.0',
        Host: 'reqres.in',
        Connection: 'close'
      },
      body: ''
    },
    '[object Object]',
    {
      responseLine: 'HTTP/1.1 404 Not Found',
      headers: {
        date: 'Sat, 12 Dec 2020 10:16:14 GMT',
        'content-type': 'application/json; charset=utf-8',
        'content-length': '2',
        connection: 'close',
        'set-cookie': [Array],
        'x-powered-by': 'Express',
        'access-control-allow-origin': '*',
        etag: 'W/"2-vyGp6PvFo4RvsFtPoIWeCReyIC8"',
        via: '1.1 vegur',
        'cache-control': 'max-age=14400',
        'cf-cache-status': 'HIT',
        age: '175',
        'cf-request-id': '06f80c8774000009159d913000000001',
        'expect-ct': 'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'report-to': '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report?s=adfxQuJq8mOn4Cp9BjxrVuATeyplcMvON0JUbaT8dLpeNINQKvURvSuwEbew6eLtQFT2imyqKjlUa2JGfYUpLOUeQXi1V8Dnudo%3D"}],"group":"cf-nel","max_age":604800}',
        nel: '{"report_to":"cf-nel","max_age":604800}',
        server: 'cloudflare',
        'cf-ray': '6006b05259cd0915-SEA'
      },
      body: {},
      status: 404,
      statusText: 'Not Found'
    },
    '2020-12-11 19:12:00 EST',
    '2020-12-12 02:02:37.045044'
  ], 
  [
    {
      httpVerb: 'GET',
      hostpath: 'https://postman-echo.com/basic-auth',
      time: '02:16',
      timeZone: 'MST',
      date: '2020-12-11',
      name: 'Request with Authorization',
      headers: [ [Object] ],
      parameters: [ [Object] ],
      body: { contentType: '', payload: '' }
    },
    {
      requestLine: 'GET /basic-auth HTTP/1.1',
      headers: {
        Accept: 'application/json, text/plain, */*',
        Authorization: 'Basic cG9zdG1hbjpwYXNzd29yZA==',
        'User-Agent': 'axios/0.21.0',
        Host: 'postman-echo.com',
        Connection: 'close'
      },
      body: ''
    },
    '[object Object]',
    {
      responseLine: 'HTTP/1.1 200 OK',
      headers: {
        date: 'Sat, 12 Dec 2020 10:20:45 GMT',
        'content-type': 'application/json; charset=utf-8',
        'content-length': '22',
        connection: 'close',
        etag: 'W/"16-sJz8uwjdDv0wvm7//BYdNw8vMbU"',
        vary: 'Accept-Encoding',
        'set-cookie': [Array]
      },
      body: { authenticated: true },
      status: 200,
      statusText: 'OK'
    },
    '2020-12-11 02:16:00 MST',
    '2020-12-12 02:20:45.477491'
  ]
];

// user_request, raw_request, raw_response, parsed_response, time_scheduled, time_sent


