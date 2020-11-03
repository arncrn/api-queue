import React, { Component } from "react";
import Past from "./Past";
import Future from "./Future";
import { Nav } from "react-bootstrap";
import testData from "../../../test-data.js"

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: testData,
      currentTab: 'past'
    }
  }

  getPastRequests = () => {
    return this.state.data.filter(request => {
      return request.response.status;
    })
  }

  getFutureRequests = () => {
    return this.state.data.filter(request => {
      return !request.response.status;
    })
  }

  changeTab = (event) => {
    let target = event.target;
    let value = target.textContent.toLowerCase();

    this.setState({
      currentTab: value
    })
  }

  render() {
    let currentTab = this.state.currentTab === 'past' ?
     <Past testdata={this.getPastRequests()} showModalClick={this.props.showModalClick} /> : 
     <Future testdata={this.getFutureRequests()} showModalClick={this.props.showModalClick} />

    return (
      <>
        <Nav variant="tabs" defaultActiveKey="link-1" className="mt-3">
          <Nav.Item>
            <Nav.Link onClick={this.changeTab} eventKey="link-1">Past</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={this.changeTab} eventKey="link-2">Future</Nav.Link>
          </Nav.Item>
        </Nav>

        { currentTab }
      </>
    );
  }
}

export default Sidebar;
