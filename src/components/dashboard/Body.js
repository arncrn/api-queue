import React, { Component } from "react";
import { Col, Form, Row } from "react-bootstrap";

class Body extends Component {
  render() {
    return (
      <Form.Group as={"fieldset"}>
        <Form.Label as="legend">Body</Form.Label>

        <Row>
          <Col lg={3}>
            <Form.Control as="select" custom>
              <option>CONTENT-TYPE</option>
              <option value="json">JSON</option>
              <option value="html">HTML</option>
              <option value="text">TEXT</option>
              <option>form-url-encoded</option>
              <option>form-data</option>
            </Form.Control>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <Form.Control as="textarea" rows={5} />
          </Col>
        </Row>
      </Form.Group>
    );
  }
}

export default Body;
