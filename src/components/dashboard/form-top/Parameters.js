import React, { Component } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

class Parameters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parameters: [
        {
          key: "product",
          value: "2",
        },
        {
          key: "search",
          value: "toys",
        },
      ],
    };
  }

  render() {
    return (
      <Form.Group as={"fieldset"}>
        <Form.Label as="legend">Parameters</Form.Label>

        <Row>
          <Col>Your parameters get appended to the URL above.</Col>
        </Row>

        <Row className="mt-3">
          <Col xs={5}>Key</Col>
          <Col xs={5}>Value</Col>
          {/* Change buttons here, alignment issues */}
          {this.state.parameters.map((param) => {
            return (
              <>
                <Col xs={5} className="mt-3">
                  <Form.Control
                    type="text"
                    placeholder="name"
                    value={param.key}
                  />
                </Col>

                <Col xs={5} className="mt-3">
                  <Form.Control
                    type="text"
                    placeholder="value"
                    value={param.value}
                  />
                </Col>
                <Col xs={2} className="mt-3">
                  <Button variant="light">x</Button>
                </Col>
              </>
            );
          })}

          <Col xs={2} className="mt-3">
            <Button variant="light">+</Button>
          </Col>
        </Row>
      </Form.Group>
    );
  }
}

export default Parameters;
