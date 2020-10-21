import React, { Component } from "react";
import {ListGroup, Row, Col} from "react-bootstrap";

class Past extends Component {

  render() {
    return (
      <ListGroup>
        <ListGroup.Item action href="#link1">
          <Row>
            <Col className="h6">
              Twitter call Twitter call
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              10-20
            </Col>
            <Col lg={4}>
              DELETE
            </Col>
            <Col lg={4}>
              200
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          <Row>
            <Col className="h6">
              Github Github Github
            </Col>
          </Row>
          <Row>
          <Col lg={4}>
              08-20
            </Col>
            <Col lg={4}>
              POST
            </Col>
            <Col lg={4}>
              404
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    );
  }
}

export default Past;
