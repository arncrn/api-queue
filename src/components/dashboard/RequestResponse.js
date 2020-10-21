import React, { Component } from "react";
import { Form, ToggleButtonGroup, ToggleButton, Row, Col } from "react-bootstrap";

class RequestResponse extends Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            Here you can view this past request, and the response to it.
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col>
            <ToggleButtonGroup type="radio" name="options" defaultValue="request">
              <ToggleButton value="request">Request</ToggleButton>
              <ToggleButton value="response">Response</ToggleButton>
            </ToggleButtonGroup>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col>
            <Form.Control as="textarea" rows={5} />
          </Col>
        </Row>
      </>
    );
  }
}

export default RequestResponse;
