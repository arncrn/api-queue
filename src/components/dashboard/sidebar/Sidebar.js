import React, { Component } from "react";
import Past from "./Past";
import Future from "./Future";
import { Nav } from "react-bootstrap";
import testData from "../../../test-data.js"

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: testData
    }
  }

  render() {
    return (
      <>
        <Nav variant="tabs" defaultActiveKey="/home" className="mt-3">
          <Nav.Item>
            <Nav.Link href="/home">Past</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Future</Nav.Link>
          </Nav.Item>
        </Nav>

        <Past testdata={this.state.data} showModalClick={this.props.showModalClick} />
      </>
    );
  }
}

export default Sidebar;
