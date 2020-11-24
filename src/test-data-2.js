let userRequest = {
  id: '1',
  httpVerb: 'POST',
  hostpath: 'https://reqres.in/api/users',
  time: '13:28',
  timeZone: '',
  date: '2020-11-23T19:28:04.428Z',
  name: '',
  headers: [{
    id: "",
    key: "",
    value: "",
  }],
  parameters: [{
    id: "",
    key: "",
    value: "",
  }],
  body: {
    payload: '{\n    "name": "morpheus",\n    "job": "leader"\n}',
    contentType: 'application/json'
  }
}

let rawResponse = {
  status: 201,
  statusText: 'Created',
  headers: {
    date: 'Mon, 23 Nov 2020 22:38:16 GMT',
    'content-type': 'application/json; charset=utf-8',
    'content-length': '84',
    connection: 'close',
    'set-cookie': [
      '__cfduid=d683f622f799cd75063f12737739c113f1606171096; expires=Wed, 23-Dec-20 22:38:16 GMT; path=/; domain=.reqres.in; HttpOnly; SameSite=Lax; Secure'
    ],
    'x-powered-by': 'Express',
    'access-control-allow-origin': '*',
    etag: 'W/"54-Yeai0uT9smve9ESXbDH6I6fgupo"',
    via: '1.1 vegur',
    'cf-cache-status': 'DYNAMIC',
    'cf-request-id': '0698db0dc8000030e635bb5000000001',
    'expect-ct': 'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    'report-to': '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report?s=D%2BADYlmzkqo5wnGbhu4XRQUbUCgxPDh9HLkl6JCHR%2BXiukNt53cs85dusfEaQdWSLCceOMUx0MtA2BaNvYAmu507Ha1s%2B4pmWe8%3D"}],"group":"cf-nel","max_age":604800}',
    nel: '{"report_to":"cf-nel","max_age":604800}',
    server: 'cloudflare',
    'cf-ray': '5f6e6129383630e6-ORD'
  },
  config: {
    url: 'https://reqres.in/api/users',
    method: 'post',
    data: '{\n    "name": "morpheus",\n    "job": "leader"\n}',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'User-Agent': 'axios/0.21.0',
      'Content-Length': 47
    },
    params: {},
    // transformRequest: [ [Function: transformRequest] ],
    // transformResponse: [ [Function: transformResponse] ],
    timeout: 0,
    // adapter: [Function: httpAdapter],
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    // validateStatus: [Function: validateStatus]
  },
  // request: ClientRequest {
    // _events: [Object: null prototype] {
      // socket: [Function],
      // abort: [Function],
      // aborted: [Function],
      // connect: [Function],
      // error: [Function],
      // timeout: [Function],
      // prefinish: [Function: requestOnPrefinish]
    // },
    _eventsCount: 7,
    _maxListeners: undefined,
    outputData: [],
    outputSize: 0,
    writable: true,
    _last: true,
    chunkedEncoding: false,
    shouldKeepAlive: false,
    useChunkedEncodingByDefault: true,
    sendDate: false,
    _removedConnection: false,
    _removedContLen: false,
    _removedTE: false,
    _contentLength: null,
    _hasBody: true,
    _trailer: '',
    finished: true,
    _headerSent: true,
    // socket: TLSSocket {
    //   // _tlsOptions: [Object],
    //   _secureEstablished: true,
    //   _securePending: false,
    //   _newSessionPending: false,
    //   _controlReleased: true,
    //   _SNICallback: null,
    //   servername: 'reqres.in',
    //   alpnProtocol: false,
    //   authorized: true,
    //   authorizationError: null,
    //   encrypted: true,
    //   // _events: [Object: null prototype],
    //   _eventsCount: 9,
    //   connecting: false,
    //   _hadError: false,
    //   _parent: null,
    //   _host: 'reqres.in',
    //   _readableState: [ReadableState],
    //   readable: true,
    //   _maxListeners: undefined,
    //   _writableState: [WritableState],
    //   writable: false,
    //   allowHalfOpen: false,
    //   _sockname: null,
    //   _pendingData: null,
    //   _pendingEncoding: '',
    //   server: undefined,
    //   _server: null,
    //   ssl: [TLSWrap],
    //   _requestCert: true,
    //   _rejectUnauthorized: true,
    //   parser: null,
    //   _httpMessage: [Circular],
    //   [Symbol(res)]: [TLSWrap],
    //   [Symbol(asyncId)]: 48,
    //   [Symbol(kHandle)]: [TLSWrap],
    //   [Symbol(lastWriteQueueSize)]: 0,
    //   [Symbol(timeout)]: null,
    //   [Symbol(kBuffer)]: null,
    //   [Symbol(kBufferCb)]: null,
    //   [Symbol(kBufferGen)]: null,
    //   [Symbol(kBytesRead)]: 0,
    //   [Symbol(kBytesWritten)]: 0,
    //   // [Symbol(connect-options)]: [Object]
    // },
    // connection: TLSSocket {
    //   // _tlsOptions: [Object],
    //   _secureEstablished: true,
    //   _securePending: false,
    //   _newSessionPending: false,
    //   _controlReleased: true,
    //   _SNICallback: null,
    //   servername: 'reqres.in',
    //   alpnProtocol: false,
    //   authorized: true,
    //   authorizationError: null,
    //   encrypted: true,
    //   // _events: [Object: null prototype],
    //   _eventsCount: 9,
    //   connecting: false,
    //   _hadError: false,
    //   _parent: null,
    //   _host: 'reqres.in',
    //   _readableState: [ReadableState],
    //   readable: true,
    //   _maxListeners: undefined,
    //   _writableState: [WritableState],
    //   writable: false,
    //   allowHalfOpen: false,
    //   _sockname: null,
    //   _pendingData: null,
    //   _pendingEncoding: '',
    //   server: undefined,
    //   _server: null,
    //   ssl: [TLSWrap],
    //   _requestCert: true,
    //   _rejectUnauthorized: true,
    //   parser: null,
    //   _httpMessage: [Circular],
    //   [Symbol(res)]: [TLSWrap],
    //   [Symbol(asyncId)]: 48,
    //   [Symbol(kHandle)]: [TLSWrap],
    //   [Symbol(lastWriteQueueSize)]: 0,
    //   [Symbol(timeout)]: null,
    //   [Symbol(kBuffer)]: null,
    //   [Symbol(kBufferCb)]: null,
    //   [Symbol(kBufferGen)]: null,
    //   [Symbol(kBytesRead)]: 0,
    //   [Symbol(kBytesWritten)]: 0,
    //   // [Symbol(connect-options)]: [Object]
    // },
    _header: 'POST /api/users HTTP/1.1\r\n' +
      'Accept: application/json, text/plain, */*\r\n' +
      'Content-Type: application/json\r\n' +
      'User-Agent: axios/0.21.0\r\n' +
      'Content-Length: 47\r\n' +
      'Host: reqres.in\r\n' +
      'Connection: close\r\n' +
      '\r\n',
    // _onPendingData: [Function: noopPendingOutput],
    // agent: Agent {
    //   _events: [Object: null prototype],
    //   _eventsCount: 1,
    //   _maxListeners: undefined,
    //   defaultPort: 443,
    //   protocol: 'https:',
    //   options: [Object],
    //   requests: {},
    //   sockets: [Object],
    //   freeSockets: {},
    //   keepAliveMsecs: 1000,
    //   keepAlive: false,
    //   maxSockets: Infinity,
    //   maxFreeSockets: 256,
    //   maxCachedSessions: 100,
    //   _sessionCache: [Object]
    // },
    socketPath: undefined,
    method: 'POST',
    path: '/api/users',
    _ended: true,
    // res: IncomingMessage {
    //   _readableState: [ReadableState],
    //   readable: false,
    //   _events: [Object: null prototype],
    //   _eventsCount: 3,
    //   _maxListeners: undefined,
    //   socket: [TLSSocket],
    //   connection: [TLSSocket],
    //   httpVersionMajor: 1,
    //   httpVersionMinor: 1,
    //   httpVersion: '1.1',
    //   complete: true,
    //   headers: [Object],
    //   rawHeaders: [Array],
    //   trailers: {},
    //   rawTrailers: [],
    //   aborted: false,
    //   upgrade: false,
    //   url: '',
    //   method: null,
    //   statusCode: 201,
    //   statusMessage: 'Created',
    //   client: [TLSSocket],
    //   _consuming: false,
    //   _dumped: false,
    //   req: [Circular],
    //   responseUrl: 'https://reqres.in/api/users',
    //   redirects: []
    // },
    aborted: false,
    timeoutCb: null,
    upgradeOrConnect: false,
    parser: null,
    maxHeadersCount: null,
    // _redirectable: Writable {
    //   _writableState: [WritableState],
    //   writable: true,
    //   _events: [Object: null prototype],
    //   _eventsCount: 2,
    //   _maxListeners: undefined,
    //   _options: [Object],
    //   _ended: true,
    //   _ending: true,
    //   _redirectCount: 0,
    //   _redirects: [],
    //   _requestBodyLength: 47,
    //   _requestBodyBuffers: [],
    //   // _onNativeResponse: [Function],
    //   _currentRequest: [Circular],
    //   _currentUrl: 'https://reqres.in/api/users'
    // },
    // [Symbol(kNeedDrain)]: false,
    // [Symbol(isCorked)]: false,
    // [Symbol(kOutHeaders)]: [Object: null prototype] {
    //   accept: [Array],
    //   'content-type': [Array],
    //   'user-agent': [Array],
    //   'content-length': [Array],
    //   host: [Array]
    // }
  // },
  data: {
    name: 'morpheus',
    job: 'leader',
    id: '302',
    createdAt: '2020-11-23T22:38:16.682Z'
  }
}


function buildParsedResponseHeaders(rawResponse, responseLine) {
  let { status = "", data: body = "", ...headers } = rawResponse;

  return {
    headers,
    status,
    body,
    responseLine,
  };
}

let requestHeaderString = rawResponse._header;
let requestLine = getRequestLine(requestHeaderString);
let responseLine = createResponseLine(rawResponse, requestLine);

function getRequestLine(requestHeaderString) {
  return requestHeaderString.split("\r\n")[0];
}

function createResponseLine(rawResponse, requestLine) {
  return `${requestLine.split(" ").slice(-1)[0]} ${rawResponse.status} ${
    rawResponse.statusText
  }`;
}

function buildRawRequestHeaders(requestHeaderString) {
  let headers = {};

  let headersArray = requestHeaderString
    .split("\r\n")
    .slice(1)
    .filter((header) => header);

  headersArray.forEach((header) => {
    let [key, val] = header.split(": ");
    headers[`${key}`] = val;
  });

  return headers;
}

let parsedResponse = Object.assign(
  {},
  {
    responseLine: responseLine,
    headers: rawResponse.headers,
    body: rawResponse.data,
    status: rawResponse.status,
    statusText: rawResponse.statusText,
  }
);

let rawRequest = {
  headers: buildRawRequestHeaders(requestHeaderString),
  body: rawResponse.config.data || ''
}

let completeData = userRequest;

completeData.request = rawRequest;
completeData.response = parsedResponse;

export default completeData;