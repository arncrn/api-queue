import React, { Component } from "react";
import Past from "./Past";
import Future from "./Future";
import { Nav } from "react-bootstrap";

class Sidebar extends Component {
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

        <Past showModalClick={this.props.showModalClick} requestList={this.props.requestList}/>
      </>
    );
  }
}

export default Sidebar;
