import React, { Component } from "react";
import { Col, Form, Row } from "react-bootstrap";

class Body extends Component {
  render() {
    return (
      <Form.Group as={"fieldset"}>
        <Form.Label as="legend">Body</Form.Label>

        <Row>
          <Col lg={3}>
            <Form.Control as="select" custom defaultValue={this.props.requestObject.body.contentType}>
              <option>CONTENT-TYPE</option>
              <option value="application/json">JSON</option>
              <option value="text/html">HTML</option>
              <option value="text/plain">TEXT</option>
              <option value="application/x-www-form-urlencoded">form-url-encoded</option>
              <option value="multipart/form-data">form-data</option>
            </Form.Control>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <Form.Control as="textarea" rows={5} defaultValue={this.props.requestObject.body.payload}/>
          </Col>
        </Row>
      </Form.Group>
    );
  }
}

export default Body;
