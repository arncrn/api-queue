import React, { Component, Fragment } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

const nextId = (function() {
  let id = 0;
  return function() {
    return id += 1;
  }
})();

class Headers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headers: [
        {
          key: "Authorization",
          value: "1234asdf",
        },
        {
          key: "Content-type",
          value: "text/html",
        },
      ],
    };
  }

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

          {this.state.headers.map((header, idx) => {
            return (
              <Fragment key={idx}>
                <Col xs={5} className="mt-3">
                  <Form.Control
                    type="text"
                    placeholder="name"
                    defaultValue={header.key}
                  />
                </Col>

                <Col xs={5} className="mt-3">
                  <Form.Control
                    type="text"
                    placeholder="value"
                    defaultValue={header.value}
                  />
                </Col>
                <Col xs={2} className="mt-3">
                  <Button variant="light">x</Button>
                </Col>
              </Fragment>
            );
          })}

          <Col lg={2} className="mt-3">
            <Button variant="light">+</Button>
          </Col>
        </Row>
      </Form.Group>
    );
  }
}

export default Headers;
