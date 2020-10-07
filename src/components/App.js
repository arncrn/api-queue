import React, { Component } from 'react';
import Sidebar from './Sidebar'
import MakeRequest from './MakeRequest'
import RequestResponse from './RequestResponse'

class App extends Component {
  render() {
    return (
      <div className="app">
        <main className="container">
          <Sidebar/>
          <MakeRequest/>
          <RequestResponse/>
        </main>
      </div>
    );
  }
}

export default App;