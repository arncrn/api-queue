const buildParamsOrHeaders = require("./buildParamsOrHeaders");

module.exports = function generateRequestOptions(userRequest) {
  let bodyHeader = {};
  let customHeaders = buildParamsOrHeaders(userRequest.headers);

  if (userRequest.body.contentType) {
    bodyHeader["Content-Type"] = userRequest.body.contentType;
  }

  return {
    method: userRequest.httpVerb,
    url: userRequest.hostpath,
    params: buildParamsOrHeaders(userRequest.parameters),
    headers: Object.assign(bodyHeader, customHeaders),
    data: userRequest.body.payload,  // check this
  };
}