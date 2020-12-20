import React, { Component, Fragment } from "react";
import { Form, Col, Row, Button, Badge, InputGroup } from "react-bootstrap";

class Parameters extends Component {
  render() {
    return (
      <Form.Group as={"fieldset"} className="mt-4 mb-4">
        <Form.Label as="legend">Query Parameters</Form.Label>

        <Row>
          <Col>
            <Badge variant="light">
              When we send your request, your parameters will get appended to
              the URL above.
            </Badge>
          </Col>
        </Row>

        <Row>
          {this.props.parameters.map((param) => {
            return (
              <Fragment key={param.id}>
                <Col xs={5} className="mt-3">
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>key</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      data-type="parameters"
                      name="key"
                      data-row-id={param.id}
                      onChange={this.props.editProperty}
                      type="text"
                      defaultValue={param.key}
                    />
                  </InputGroup>
                </Col>

                <Col xs={5} className="mt-3">
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>value</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      data-type="parameters"
                      name="value"
                      data-row-id={param.id}
                      onChange={this.props.editProperty}
                      type="text"
                      defaultValue={param.value}
                    />
                  </InputGroup>
                </Col>
                <Col xs={2} className="mt-3">
                  <Button
                    variant="outline-info"
                    data-row-id={param.id}
                    data-name={"parameters"}
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
              data-name={"parameters"}
            >
              Add field
            </Button>
          </Col>
        </Row>
      </Form.Group>
    );
  }
}

export default Parameters;
