import React, { Component } from "react";
import {ListGroup, Row, Col} from "react-bootstrap";
import PopUp from "./PopUp.js";

class Past extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleModal: false,
    }
  }

  // When request item is clicked, displays modal
  showModalClick = (event) => {
    this.showModal(event);
  };

  showModal = () => {
    this.setState({
      visibleModal: true,
    });
  };

  // When request item is clicked, hide modal
  hideModalClick = () => {
    this.hideModal();
  };

  hideModal = () => {
    this.setState({
      visibleModal: false,
    });
  };

  render() {
    return (
      <>
      <ListGroup>
        {this.props.requestList.map((r, idx) => {
          return (
          <ListGroup.Item action key={idx} href={`#link1${idx}`} onClick={this.showModalClick}>
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
      <PopUp
        visibleModal={this.state.visibleModal}
        hideModalClick={this.hideModalClick}
      />
    </>
    );
  }
}

export default Past;
