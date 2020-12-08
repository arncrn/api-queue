import React, { Component } from "react";
import { Button, Row, Col} from 'react-bootstrap';

class SubmitButton extends Component {
  setButtons = () => {
    if (this.props.visibleModal) {
      return (
        <Col lg={{offset: 9}} className="mb-3">
          <Button 
            className="mr-4"
            type="submit" variant="danger"
            onClick={this.props.handleDelete}
          >
            Delete
          </Button>
          <Button 
          	type="submit" 
          	variant="primary">{this.props.buttonText}
          </Button>
        </Col>
      )
    }
    return (
      <Col lg={{span: 2, offset: 10}} className="mb-3">
        <Button 
          type="submit" 
          variant="primary">{this.props.buttonText}
        </Button>
      </Col>
    )
  }
  render() {
    return this.setButtons();
  }
}

export default SubmitButton;