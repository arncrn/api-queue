import React, { Component } from "react";
import { Form, Col, Row, InputGroup } from "react-bootstrap";

class Url extends Component {
  handleBlur = (event) => {
    let form = event.target.closest("form");
    let hiddenSpan = event.target.nextElementSibling;

    if (!form.checkValidity()) hiddenSpan.hidden = false;
  };

  handleFocus = (event) => {
    let hiddenSpan = event.target.nextElementSibling;
    hiddenSpan.hidden = true;
  };

  render() {
    return (
      <Form.Group as={"fieldset"}>
        <Row className="mt-3 url-container">
          <Col lg={2} sm={3}>
            <Form.Control
              as="select"
              name="httpVerb"
              custom
              defaultValue={this.props.httpVerb}
              onChange={this.props.handleChange}
            >
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>PATCH</option>
              <option>DELETE</option>
            </Form.Control>
          </Col>

          <Col lg={10} sm={9}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>url</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                name="hostpath"
                placeholder="https://www.example.com"
                pattern="http[s]?://.+"
                onBlur={this.handleBlur}
                onFocus={this.handleFocus}
                onChange={this.props.handleChange}
                defaultValue={this.props.hostpath}
              />
              <span id="hostpath-error" className="error-message" hidden>
                The URL must match this format: "http[s]://"
              </span>
            </InputGroup>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>name</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter a name for this request. Call it anything you want."
                defaultValue={this.props.name}
                onChange={this.props.handleChange}
              />
            </InputGroup>
          </Col>
        </Row>
      </Form.Group>
    );
  }
}

export default Url;
