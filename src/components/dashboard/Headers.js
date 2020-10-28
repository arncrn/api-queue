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
          id: nextId(),
          key: "Authorization",
          value: "1234asdf",
        },
        {
          id: nextId(),
          key: "Content-type",
          value: "text/html",
        },
      ],
    };
  }

  addKeyValueFields = () => {
    this.setState(prevState => ({
      headers: [...prevState.headers, {id: nextId(), key: "", value: ""}]
    }));
  }

  removeKeyValueField = (event) => {
    let targetHeaderId = event.target.dataset.headerid;
    let newState;

    if (this.state.headers.length <= 1) {
      newState = [{id: nextId(), key: "", value: ""}];
    } else {
      newState = this.state.headers.filter(header => {
        return +header.id !== +targetHeaderId;
      });
    }
    console.log(newState);
    this.setState({
      headers: newState,
    })
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

          {this.state.headers.map(header => {
            return (
              <Fragment key={header.id}>
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
                  <Button variant="light" data-headerid={header.id} onClick={this.removeKeyValueField}>x</Button>
                </Col>
              </Fragment>
            );
          })}

          <Col lg={2} className="mt-3">
            <Button variant="light" onClick={this.addKeyValueFields}>+</Button>
          </Col>
        </Row>
      </Form.Group>
    );
  }
}

export default Headers;
