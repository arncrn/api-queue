import React, { Component } from "react";
import { Button, Row, Col} from 'react-bootstrap';

class SubmitButton extends Component {
  render() {
    return (
      <Row className="mb-4">
        <Col lg={{span:2, offset: 10}}>
          <Button 
          	type="submit" 
          	variant="primary">{this.props.buttonText}</Button>
        </Col>
      </Row>
    );
  }
}

export default SubmitButton;