import React, { Component, Fragment } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

class Parameters extends Component {
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
          {this.props.parameters.map(param => {
            return (
              <Fragment key={param.id}>
                <Col xs={5} className="mt-3">
                  <Form.Control
                    data-type='parameters'
                    name="key"
                    data-row-id={param.id}
                    onChange={this.props.editProperty}
                    type="text"
                    placeholder="name"
                    defaultValue={param.key}
                  />
                </Col>

                <Col xs={5} className="mt-3">
                  <Form.Control
                    data-type='parameters'
                    name="value"
                    data-row-id={param.id}
                    onChange={this.props.editProperty}
                    type="text"
                    placeholder="value"
                    defaultValue={param.value}
                  />
                </Col>
                <Col xs={2} className="mt-3">
                  <Button variant="light"
                    data-row-id={param.id}
                    data-name={'parameters'}
                    onClick={this.props.removeKeyValueField}
                  >x</Button>
                </Col>
              </Fragment>
            );
          })}

          <Col xs={2} className="mt-3">
            <Button variant="light"
              onClick={this.props.addKeyValueFields}
              data-name={'parameters'}
            >+</Button>
          </Col>
        </Row>
      </Form.Group>
    );
  }
}

export default Parameters;
