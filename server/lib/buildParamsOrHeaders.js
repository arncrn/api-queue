module.exports = function buildParamsOrHeaders(data) {
  let result = {};

  data.forEach(({ key, value }) => {
    if(key) {
      result[key] = value;
    }
  })

  return result;
}