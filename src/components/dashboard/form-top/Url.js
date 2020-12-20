import React, { Component } from "react";
import { Form, Col, Row, Badge, InputGroup } from "react-bootstrap";

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
        <Row className="mt-3">
          <Col>
            <Badge variant="light">
              Select the type of request to send and the URL where it's going.
            </Badge>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col lg={2} xs={3}>
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

          <Col lg={10} xs={9}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>URL</InputGroup.Text>
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

        <Row className="mt-3">
          <Col>
            <Badge variant="light">
              Pick any name you want, maybe something to help you remember what
              this request is for.
            </Badge>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>name</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your request name"
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
