import React, { Component } from "react";
import {ListGroup, Row, Col} from "react-bootstrap";

class Future extends Component {

  render() {
    return (
      <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item action href="#link1">
          <Row>
            <Col lg="auto">
              Twitter call
            </Col>
          </Row>
          <Row>
            <Col lg="auto">
              10-20
            </Col>
            <Col lg="auto">
              GET
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          <Row>
            <Col lg="auto">
              Github
            </Col>
          </Row>
          <Row>
          <Col lg="auto">
              08-20
            </Col>
            <Col lg="auto">
              POST
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    );
  }
}

export default Future;
