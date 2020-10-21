import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";

class Body extends Component {
  render() {
    return (
      <Form.Group as={"fieldset"}>
        <Form.Label as="legend">Body</Form.Label>

        <Row>
          <Col lg={3}>
            <Form.Control as="select" custom>
              <option>CONTENT-TYPE</option>
              <option>JSON</option>
              <option>HTML</option>
              <option>TEXT</option>
              <option>form-url-encoded</option>
              <option>form-data</option>
            </Form.Control>
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col>
            <Form.Control as="textarea" rows={5} />
          </Col>
        </Row>
      </Form.Group>
    );
  }
}

export default Body;
