export default [{
  id: '1', //
  email: 'abc@gmail.com',
  name: "POST to google", //
  httpVerb: "POST", //db name is called httpverb ***
  hostpath: 'https://www.google.com/', //
  time: '21:15', //
  timeZone: 'PST', //
  date: new Date('August 19, 1975'), //db returns string
  parameters: [{ //
    id: "123",
    key: 'search',
    value: 'toys'
  }],
  headers: [ //
    {
      id: "1",
      key: "Authorization",
      value: "1234asdf",
    },
    {
      id: "2",
      key: "Content-type",
      value: "text/html",
    }
  ],
  body: { //
    contentType: 'text/html', //
    payload: '!DOCTYPE ....' //
  },
  request: { // db returns a single string with requestline + headers
    headers: {
      Authorization: '1234asdf',
      ContentType: 'text/html',
    },
    body: '!DOCTYPE ....'
  },
  response: { //
    headers: { // db returns no headers
      AccessControlAllowCredentials: 'true',
      AccessControlAllowOrigin: '*',
      Connection: 'keep-alive',
      ContentLength: '298',
      ContentType: 'application/json',
      Date: 'Thu, 15 Oct 2020 02:22:44 GMT',
      Server: 'gunicorn/19.9.0',
    },
    status: "200", //
    responseLine: 'HTTP/1.1 200 OK', // db returns no responseLine
    body: '{}' // this is called 'data'
  }
},
{
  id: '2',
  email: 'frank@gmail.com',
  name: "req to apple",
  httpVerb: "GET",
  hostpath: 'https://www.apple.com/',
  time: '15:15',
  timeZone: 'PST',
  date: new Date('January 25, 1982'),
  parameters: [{
    id: "1",
    key: 'search',
    value: 'food'
  }],
  headers: [
    {
      id: "1",
      key: "Authorization",
      value: "1234asdf",
    },
    {
      id: "2",
      key: "Content-type",
      value: "text/html",
    }
  ],
  body: {
    contentype: 'text/html',
    payload: '!DOCTYPE ....'
  },
  request: {
    headers: {
      Authorization: '1234asdf',
      ContentType: 'text/html',
    },
    body: '!DOCTYPE ....'
  },
  response: {
    headers: {
      AccessControlAllowCredentials: 'true',
      AccessControlAllowOrigin: '*',
      Connection: 'keep-alive',
      ContentLength: '298',
      ContentType: 'application/json',
      Date: 'Thu, 15 Oct 2020 02:22:44 GMT',
      Server: 'gunicorn/19.9.0',
    },
    status: "200",
    responseLine: 'HTTP/1.1 200 OK',
    body: '{}'
  }
},
{
  id: '3',
  email: 'jimmy@gmail.com',
  name: "req to twitter",
  httpVerb: "GET",
  hostpath: 'https://www.twitter.com/',
  time: '12:15',
  timeZone: 'CST',
  date: new Date('January 30, 1999'),
  parameters: [{
    id: "1",
    key: 'search',
    value: 'food'
  }],
  headers: [
    {
      id: "1",
      key: "Authorization",
      value: "1234asdf",
    },
    {
      id: "2",
      key: "Content-type",
      value: "text/html",
    }
  ],
  body: {
    contentype: 'text/html',
    payload: '!DOCTYPE ....'
  },
  // Get back to this later, need more details on response object
  response: {
    headers: {
      AccessControlAllowCredentials: '',
      AccessControlAllowOrigin: '',
      Connection: '',
      ContentLength: '',
      ContentType: '',
      Date: '',
      Server: '',
    },
    status: '',
    responseLine: '',
    body: '',
  }
}]