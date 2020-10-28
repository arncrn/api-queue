import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";

class Url extends Component {
  parseUrlParams = () => {
    let requestObject = this.props.requestObject;
    
    let queryString = requestObject.params.map(param => {
      return param.key + '=' + param.value
    }).join('&');

    let startQuery = queryString.length === 0 ? '' : '?'

    return (
      requestObject.hostpath + startQuery + queryString
    )
  }

  render() {
    return (
      <Form.Group as={"fieldset"}>
        <Row className="mt-3">
          <Col>
            Select the type of request to send and the URL where it's going.
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xs={2}>
            {/* Add an onclick here to manage state of the method to determine whether body component shows*/}
            <Form.Control as="select" custom defaultValue={this.props.requestObject.method}>
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>PATCH</option>
              <option>DELETE</option>
            </Form.Control>
          </Col>

          <Col>
            <Form.Control type="text" placeholder="https://www.google.com" defaultValue={this.parseUrlParams()}/>
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
            <Form.Control type="text" placeholder="Enter your request name" defaultValue={this.props.requestObject.name}/>
          </Col>
        </Row>
      </Form.Group>
    );
  }
}

export default Url;
