import React, { Component } from "react";

class MakeRequest extends Component {

  render() {
    return (
      <div className="form-wrapper">
        <form action="/" class="submit-form">
          <select id="http-methods" name="http-methods">
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="PATCH">PATCH</option>
            <option value="DELETE">DELETE</option>
          </select>

          <label for="url">URL</label>
          <input type='text' id="url" name="url"></input>

          <label for="parameters">Parameters</label>
          <input type='text' id="parameters" name="parameters"></input>

          <label for="api-key">API Key</label>
          <input type='text' id="api-key" name="api-key"></input>

          <label for="timer">Timer</label>
          <input type='text' id="timer" name="timer"></input>

          <label for="http-body">HTTP Body</label>
          <input type='textarea' id="http-body" name="http-body"></input>

          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default MakeRequest;
