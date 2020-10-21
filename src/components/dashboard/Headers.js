import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Headers extends Component {
  render() {
    return (
      <Form.Group as={"fieldset"}>
        <Form.Label as="legend">Headers</Form.Label>

        <Row> 
          <Col>You can set any headers you want. If one of your headers conflicts with a header we would have created automatically for your request, yours will take precedent.</Col>
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

export default Headers;
