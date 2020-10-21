import React, { Component } from "react";
import { Button, Row, Col } from 'react-bootstrap';

class Post extends Component {
  render() {
    return (
      <Row>
        <Col lg={{span:2, offset: 10}}>
          <Button variant="primary">Send</Button>
        </Col>
      </Row>
    );
  }
}

export default Post;
