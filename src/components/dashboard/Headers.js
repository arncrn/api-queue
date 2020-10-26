import React, { Component } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

class Headers extends Component {
  render() {
    return (
      <Form.Group as={"fieldset"}>
        <Form.Label as="legend">Headers</Form.Label>

        <Row>
          <Col>
            You can set any headers you want. If one of your headers conflicts
            with a header we would have created automatically for your request,
            yours will take precedent.
          </Col>
        </Row>

        <Row className="mt-3">
          <Col lg={5}>Key</Col>
          <Col lg={5}>Value</Col>

          <Col lg={5}>
            <Form.Control type="text" placeholder="Authorization" defaultValue="Authorization" />
          </Col>

          <Col lg={5}>
            <Form.Control type="text" placeholder="1234asdf" defaultValue="1234asdf"/>
          </Col>

          <Col lg={2}>
            <Button variant="light">+</Button>
          </Col>
        </Row>
      </Form.Group>
    );
  }
}

export default Headers;
