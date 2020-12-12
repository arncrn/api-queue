const buildRequestResponse = require("./buildRequestResponse.js");
const generateRequestOptions = require("./generateRequestOptions.js");
const dbquery = require("./db-query.js");
const axios = require("axios");

module.exports = class DatabaseInterval {
  constructor() {
    setInterval(async () => {
      try {
        let futureRequests = await this._checkDatabaseForFutureRequests();
        for (let i = 0; i < futureRequests.length; i++) {
          let request = futureRequests[i];
          let options = generateRequestOptions(request.user_request);
          try {
            let responseData = await axios(options);
            await this._insertRawRequestResponse(responseData, request.id)
          } catch(err) {
            if (err.response) {
              await this._insertRawRequestResponse(err.response, request.id)
            } else {
              try {
                await this._insertRawRequestResponse(err, request.id);
              } catch (error) {
                console.log(error);
              }
              
            }
            console.log(`Request# ${request.id} failed`, 'line 22');
          } finally {
            continue;
          }
        }
      } catch(err) {
        console.log(err, 'line 30');
      }
      
    }, 1000 * 29)
  }

  async _checkDatabaseForFutureRequests() {
    try {
      let result = await dbquery("SELECT * FROM requests WHERE raw_response IS NULL ORDER BY time_scheduled");
      let timeNow = new Date();
      let requestsToSend = result.rows.filter(request => {
        return timeNow >= new Date(request.time_scheduled);
      });
      return requestsToSend;
    } catch (err) {
      console.log(err);
    }
  }

  async _insertRawRequestResponse(rawResponse, newlyCreatedRequestId) {
    let {rawRequest, parsedResponse} = buildRequestResponse(rawResponse);
  
    rawResponse = String(rawResponse);
    await dbquery(
      `UPDATE requests SET raw_request=$2, raw_response=$3, parsed_response=$4, time_sent = NOW() WHERE id=$1`,
      [newlyCreatedRequestId, rawRequest, rawResponse, parsedResponse]
    );
  }
}