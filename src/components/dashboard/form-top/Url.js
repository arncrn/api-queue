import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

class Url extends Component {
  render() {
    return (
      <Form.Group as={"fieldset"}>
        <Row className='mt-3'>
          <Col>
            Select the type of request to send and the URL where it's going.
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col xs={2}>
            <Form.Control as="select" custom>
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>PATCH</option>
              <option>DELETE</option>
            </Form.Control>
          </Col>

          <Col>
            <Form.Control type="text" placeholder="https://www.google.com" />
          </Col>
        </Row>

        <Row className='mt-3'>
          <Col>
          Pick any name you want, maybe something to help you remember what this request is for.
          </Col>
        </Row>
        
        <Row className='mt-3'>
          <Col>
            <Form.Control type="text" placeholder="Enter your request name" />
          </Col>
        </Row>
      </Form.Group>
    );
  }
}

export default Url;
