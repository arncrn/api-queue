import React, { Component } from "react";
import { Button, Row, Col} from 'react-bootstrap';

class SubmitButton extends Component {
  render() {
    return (
      <Row>
        <Col lg={{span:2, offset: 10}}>
          <Button 
          	type="submit" 
          	variant="primary">Send</Button>
        </Col>
      </Row>
    );
  }
}

export default SubmitButton;