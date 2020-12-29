import React, { Component, Fragment } from "react";
import { Form, Col, Row, Button, Badge, InputGroup } from "react-bootstrap";

class Parameters extends Component {
  render() {
    return (
      <Form.Group as={"fieldset"} className="mt-1 mb-1">
        <Form.Label as="legend">Query Parameters</Form.Label>
        
        <Row>
          {this.props.parameters.map((param) => {
            return (
              <Fragment key={param.id}>
                <Col xs={10} lg={5} className="mt-1">
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

                <Col xs={10} lg={5} className="mt-1">
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
                <Col xs={1} className="mt-1 mb-2 pl-1">
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

          <Col className="mt-2">
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
