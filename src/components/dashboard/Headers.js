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
            Your headers take precedent over any default we may have used.
          </Badge>
          </Col>
        </Row>

        <Row>
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
                    placeholder="key"
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
                  <Button variant="outline-info"
                    data-row-id={header.id}
                    data-name={'headers'}
                    onClick={this.props.removeKeyValueField}
                  >x</Button>
                </Col>
              </Fragment>
            );
          })}

          <Col lg={3} className="mt-3">
            <Button variant="outline-info"
              onClick={this.props.addKeyValueFields}
              data-name={'headers'}
            >Add more field</Button>
          </Col>
        </Row>
      </Form.Group>
    );
  }
}

export default Headers;
