import React, { Component } from "react";

class RequestResponse extends Component {

  render() {
    return (
      <div className="request-response">
          <div className="tabs">
            <button className="tablinks" onclick="">Request</button>
            <button className="tablinks" onclick="">Response</button>
          </div>

          <div class="tabcontent request">
            Request
          </div>
          <div class="tabcontent response">
            Response
          </div>
      </div>
    );
  }
}

export default RequestResponse;
