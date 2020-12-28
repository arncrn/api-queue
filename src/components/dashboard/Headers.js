import React, { Component, Fragment } from "react";
import { Form, Col, Row, Button, Badge, InputGroup } from "react-bootstrap";

class Headers extends Component {
  render() {
    return (
      <Form.Group as={"fieldset"} className="mt-4 mb-4">
        <Form.Label as="legend">Headers</Form.Label>

        {/* <Row>
          <Col>
            <Badge variant="light">
              Your headers take precedent over any default we may have used.
            </Badge>
          </Col>
        </Row> */}

        <Row>
          {this.props.headers.map((header) => {
            return (
              <Fragment key={header.id}>
                <Col xs={5} className="mt-1">
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>key</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      data-type="headers"
                      name="key"
                      data-row-id={header.id}
                      onChange={this.props.editProperty}
                      type="text"
                      // placeholder="key"
                      defaultValue={header.key}
                    />
                  </InputGroup>
                </Col>

                <Col xs={5} className="mt-1">
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>value</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      data-type="headers"
                      name="value"
                      data-row-id={header.id}
                      onChange={this.props.editProperty}
                      type="text"
                      // placeholder="value"
                      defaultValue={header.value}
                    />
                  </InputGroup>
                </Col>
                <Col xs={2} className="mt-1">
                  <Button
                    variant="outline-info"
                    data-row-id={header.id}
                    data-name={"headers"}
                    onClick={this.props.removeKeyValueField}
                  >
                    x
                  </Button>
                </Col>
              </Fragment>
            );
          })}

          <Col lg={3} className="mt-3">
            <Button
              variant="outline-info"
              onClick={this.props.addKeyValueFields}
              data-name={"headers"}
            >
              Add field
            </Button>
          </Col>
        </Row>
      </Form.Group>
    );
  }
}

export default Headers;
