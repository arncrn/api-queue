import React, { Component, Fragment } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

const nextId = (function() {
  let id = 0;
  return function() {
    return id += 1;
  }
})();

class Parameters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parameters: [
        {
          id: nextId(),
          key: "product",
          value: "2",
        },
        {
          id: nextId(),
          key: "search",
          value: "toys",
        },
      ],
    };
  }

  addKeyValueFields = () => {
    this.setState(prevState => ({
      parameters: [...prevState.parameters, {id: nextId(), key: "", value: ""}]
    }));
  }

  removeKeyValueField = (event) => {
    let targetParamId = event.target.dataset.paramid;
    let newState;

    if (this.state.parameters.length <= 1) {
      newState = [{id: nextId(), key: "", value: ""}];
    } else {
      newState = this.state.parameters.filter(param => {
        return +param.id !== +targetParamId;
      });
    }

    this.setState({
      parameters: newState,
    })
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
          {this.state.parameters.map(param => {
            return (
              <Fragment key={param.id}>
                <Col xs={5} className="mt-3">
                  <Form.Control
                    type="text"
                    placeholder="name"
                    defaultValue={param.key}
                  />
                </Col>

                <Col xs={5} className="mt-3">
                  <Form.Control
                    type="text"
                    placeholder="value"
                    defaultValue={param.value}
                  />
                </Col>
                <Col xs={2} className="mt-3">
                  <Button variant="light" data-paramid={param.id} onClick={this.removeKeyValueField}>x</Button>
                </Col>
              </Fragment>
            );
          })}

          <Col xs={2} className="mt-3">
            <Button variant="light" onClick={this.addKeyValueFields}>+</Button>
          </Col>
        </Row>
      </Form.Group>
    );
  }
}

export default Parameters;
