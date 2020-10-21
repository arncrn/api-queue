import React, { Component } from "react";
import Past from './Past';
import Future from './Future';
import {Nav } from "react-bootstrap";

class Sidebar extends Component {

  // clickHandler = () => {
  //   alert('hello world');
  // }

  // componentDidMount = () => {
  //   let tabs = document.querySelectorAll('.tablinks');
  //   tabs[0].addEventListener('click', () => {
  //     alert('hello wolr');
  //   })
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     page: "past"
  //   };
  // }

  // futureClick = () => {
  //   this.setState({
  //     page: "future"
  //   });
  // }

  // pastClick = () => {
  //   this.setState({
  //     page: "past"
  //   });
  // }

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
      <Past />
      </>
    );
  }
}

export default Sidebar;
