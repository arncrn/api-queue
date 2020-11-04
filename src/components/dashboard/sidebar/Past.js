import React, { Component } from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import PopUp from "./PopUp.js";

const calcDate = function (date) {
  return `${String(date.getMonth()+1).padStart(
    2,
    "0"
  )}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
};

class Past extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleModal: false,
      clickedReq: null,
    };
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

  handleClick = (e) => {
    let target = e.currentTarget;
    this.showModalClick();

    this.setState({
      clickedReq: target.dataset.id,
    });
  };

  getRequestObject = () => {
    return this.props.testdata.find((req) => {
      return req.id === this.state.clickedReq;
    }) || {};
  }

  render() {
    return (
      <>
        <ListGroup>
          {this.props.testdata.map((req) => {
            return (
              <ListGroup.Item
                action
                data-id={req.id}
                key={req.id}
                href={`#link1${req.id}`}
                onClick={this.handleClick}
              >
                <Row>
                  <Col className="h6">{req.name}</Col>
                </Row>
                <Row>
                  <Col lg={6}>{calcDate(req.date)}</Col>
                  <Col lg={3}>{req.method}</Col>
                  <Col lg={3}>{req.response.status}</Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
        <PopUp
          visibleModal={this.state.visibleModal}
          hideModalClick={this.hideModalClick}
          requestObject={this.getRequestObject()}
          requestId={this.state.clickedReq}
        />
      </>
    );
  }
}

export default Past;
