export default [{
  id: '1',
  email: 'abc@gmail.com',
  name: "POST to google",
  method: "POST",
  hostpath: 'https://www.google.com/',
  timestamp: new Date('August 19, 1975 21:15:30'), // look into timezone (PST)
  params: [{
    id: "123",
    key: 'search',
    value: 'toys'
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
    contentType: 'text/html',
    payload: '!DOCTYPE ....'
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
  id: '2',
  email: 'frank@gmail.com',
  name: "req to apple",
  method: "GET",
  hostpath: 'https://www.apple.com/',
  timestamp: new Date('January 25, 1975 21:15:30'),
  params: [{
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
}]