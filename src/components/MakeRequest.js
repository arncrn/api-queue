import React, { Component } from "react";

class MakeRequest extends Component {

  render() {
    return (
      <form action="/">
        <select id="http-methods" name="http-methods">
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="PATCH">PATCH</option>
          <option value="DELETE">DELETE</option>
        </select>

        <label for="url">URL</label>
        <input type='text' id="url" name="url"></input>

        <div className="tabs">
          <label for="parameters">Parameters</label>
          <label for="api-key">API Key</label>
          <label for="timer">Timer</label>
        </div>

        <input type='text' id="parameters" name="parameters"></input>
        <input type='text' id="api-key" name="api-key"></input>
        <input type='text' id="timer" name="url"></input>

        <input type="submit"/>
      </form>
    );
  }
}

export default MakeRequest;
