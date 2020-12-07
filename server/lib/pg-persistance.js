const dbquery = require("./db-query.js");
const buildRequestResponse = require("./buildRequestResponse.js");

module.exports = class LoggedInUser {
  constructor(session) {
    this.userId = session.userId;
  }

  async getAllData() {
    let allData = await dbquery("SELECT * FROM requests WHERE user_id = $1", [this.userId]);
    return this._formatQueryData(allData.rows);
  } 

  async insertRequest(userRequest, timeScheduled) {
    let queryResult = await dbquery(
      `INSERT INTO requests (user_id, user_request, time_scheduled) VALUES ($1, $2, $3) RETURNING id`,
      [this.userId, userRequest, timeScheduled]
    );

    if (queryResult.rowCount < 1) throw new Error("could not comnplete request");
    return queryResult.rows[0].id;
  }

  async insertRawRequestResponse(rawResponse, newlyCreatedRequestId) {
    let {rawRequest, parsedResponse} = buildRequestResponse(rawResponse);
  
    rawResponse = String(rawResponse);
    await dbquery(
      `UPDATE requests SET raw_request=$2, raw_response=$3, parsed_response=$4 WHERE id=$1`,
      [newlyCreatedRequestId, rawRequest, rawResponse, parsedResponse]
    );
  }


  _formatQueryData(data) {
    return data.map((request) => {
      let rawRequest = request.raw_request || "";
      let parsedResponse = request.parsed_response || {};
  
      return {
        id: request.id,
        httpVerb: request.user_request.httpVerb,
        hostpath: request.user_request.hostpath,
        time: request.user_request.time,
        timeZone: request.user_request.timeZone,
        date: request.user_request.date,
        name: request.user_request.name,
        headers: request.user_request.headers,
        parameters: request.user_request.parameters,
        body: request.user_request.body,
        request: rawRequest,
        response: parsedResponse,
      };
    });
  }
}