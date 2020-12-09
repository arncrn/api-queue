import React, { Component } from "react";
import { Button, Row, Col} from 'react-bootstrap';

class SubmitButton extends Component {
  setButtons = () => {
    if (this.props.visibleModal) {
      return (
        <Col className="mb-3 text-right">
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
      <Col className="mb-3 text-right">
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