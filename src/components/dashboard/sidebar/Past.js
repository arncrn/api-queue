import React, { Component } from "react";
import {ListGroup, Row, Col} from "react-bootstrap";

class Past extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.requestList.map((r, idx) => {
          return (
          <ListGroup.Item action href={`#link1${idx}`} onClick={this.props.showModalClick}>
            <Row>
              <Col className="h6">
                {r.name}
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                {r.date}
              </Col>
              <Col lg={4}>
                {r.method}
              </Col>
              <Col lg={4}>
                {r.status}
              </Col>
            </Row>
          </ListGroup.Item>
          )
        })}
      </ListGroup>
    );
  }
}

export default Past;
