import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Url extends Component {
  render() {
    return (
      <Form.Group as={"fieldset"}>
        <Form.Label as="legend">Parameters</Form.Label>

        <Row>
          <Col>Your parameters get appended to the URL above.</Col>
        </Row>
        
        <Row className='mt-3'>
          <Col xs={5}>Key</Col>
          <Col xs={5}>Value</Col>

          <Col xs={5}>
            <Form.Control type="text" placeholder="Authorization" />
          </Col>

          <Col xs={5}>
            <Form.Control type="text" placeholder="1234asdf" />
          </Col>
          
          <Col xs={2}>
            <Button variant="light">+</Button>
          </Col>
        </Row>
      </Form.Group>
    );
  }
}

export default Url;
