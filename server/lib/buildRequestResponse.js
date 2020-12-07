function buildRequestResponse(rawResponse) {
  let requestHeaderString = rawResponse.request._header || '';
  let requestLine = getRequestLine(requestHeaderString);
  let responseLine = createResponseLine(rawResponse, requestLine);

  function getRequestLine(requestHeaderString) {
    return requestHeaderString.split("\r\n")[0];
  }

  function createResponseLine(rawResponse, requestLine) {
    return `${requestLine.split(" ").slice(-1)[0]} ${rawResponse.status || 'error'} ${
      rawResponse.statusText || 'error'
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
      headers: rawResponse.headers || {},
      body: rawResponse.data || {},
      status: rawResponse.status || 'error',
      statusText: rawResponse.statusText || 'error',
    }
  );

  let rawRequest = {
    requestLine: requestLine,
    headers: buildRawRequestHeaders(requestHeaderString),
    body: rawResponse.config.data || ''
  }

  let completeData = {};
  completeData.rawRequest = rawRequest;
  completeData.parsedResponse = parsedResponse;
  return completeData;
}

module.exports = buildRequestResponse;