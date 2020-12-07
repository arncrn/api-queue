import React, { Component, Fragment } from "react";
import { Form, Col, Row, Button, Badge } from "react-bootstrap";

class Headers extends Component {
  render() {
    return (
      <Form.Group as={"fieldset"}>
        <Form.Label as="legend">Headers</Form.Label>

        <Row>
          <Col>
          <Badge variant='light'>
            Your headers conflicts take precedent over any default we may have used.
          </Badge>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col lg={5}>Key</Col>
          <Col lg={5}>Value</Col>

          {this.props.headers.map(header => {
            return (
              <Fragment key={header.id}>
                <Col xs={5} className="mt-3">
                  <Form.Control
                    data-type='headers'
                    name="key"
                    data-row-id={header.id}
                    onChange={this.props.editProperty}
                    type="text"
                    placeholder="name"
                    defaultValue={header.key}
                  />
                </Col>

                <Col xs={5} className="mt-3">
                  <Form.Control
                    data-type='headers'
                    name="value"
                    data-row-id={header.id}
                    onChange={this.props.editProperty}
                    type="text"
                    placeholder="value"
                    defaultValue={header.value}
                  />
                </Col>
                <Col xs={2} className="mt-3">
                  <Button variant="light"
                    data-row-id={header.id}
                    data-name={'headers'}
                    onClick={this.props.removeKeyValueField}
                  >x</Button>
                </Col>
              </Fragment>
            );
          })}

          <Col lg={2} className="mt-3">
            <Button variant="light"
              onClick={this.props.addKeyValueFields}
              data-name={'headers'}
            >+</Button>
          </Col>
        </Row>
      </Form.Group>
    );
  }
}

export default Headers;
