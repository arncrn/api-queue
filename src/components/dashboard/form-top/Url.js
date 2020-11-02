import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";

class Url extends Component {
  // parseUrlParams = () => {
  //   let queryString = '';
  //   if (this.props.parameters[0].id !== '') {
  //     queryString = this.props.parameters.map(param => {
  //       return param.key + '=' + param.value
  //     }).join('&');
  //   }

  //   let startQuery = queryString.length === 0 ? '' : '?'
  //   return (
  //     this.props.hostpath + startQuery + queryString
  //   )
  // }

  render() {
    console.log(this.props.name)
    return (
      <Form.Group as={"fieldset"}>
        <Row className="mt-3">
          <Col>
            Select the type of request to send and the URL where it's going.
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xs={2}>
            <Form.Control as="select"
              name="httpVerb"
              custom defaultValue={this.props.httpVerb}
              onChange={this.props.handleChange}
            >
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>PATCH</option>
              <option>DELETE</option>
            </Form.Control>
          </Col>

          <Col>
            <Form.Control
              type="text"
              name="hostpath"
              placeholder="https://www.example.com"
              onChange={this.props.handleChange}
              // defaultValue={this.parseUrlParams()}
              defaultValue={this.props.hostpath}
            />
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            Pick any name you want, maybe something to help you remember what
            this request is for.
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your request name"
              defaultValue={this.props.name}
              onChange={this.props.handleChange}
            />
          </Col>
        </Row>
      </Form.Group>
    );
  }
}

export default Url;
