import React, { Component, Fragment } from "react";
import { Form, Col, Row, Button, Badge } from "react-bootstrap";

class Parameters extends Component {
  render() {
    return (
      <Form.Group as={"fieldset"}>
        <Form.Label as="legend">Query Parameters</Form.Label>

        <Row>
          <Col>
            <Badge variant='light'>
              When we send your request, your parameters will get appended to the URL above.
            </Badge>
          </Col>
        </Row>

        <Row>
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
                    placeholder="key"
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
                  <Button variant="outline-info"
                    data-row-id={param.id}
                    data-name={'parameters'}
                    onClick={this.props.removeKeyValueField}
                  >x</Button>
                </Col>
              </Fragment>
            );
          })}

          <Col lg={3} className="mt-3">
            <Button variant="outline-info"
              onClick={this.props.addKeyValueFields}
              data-name={'parameters'}
            >Add more field</Button>
          </Col>
        </Row>
      </Form.Group>
    );
  }
}

export default Parameters;
