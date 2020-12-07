import React, { Component } from "react";
import {ListGroup, Row, Col} from "react-bootstrap";
import PopUp from "./PopUp.js";
import HOC from "../../HOC.js";

const calcDate = function (date, time) {
  // console.log(date);

  let [year, month, day] = date.split('-');

  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")} ${time}`
};


class Future extends Component {
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
    return this.props.appData.find((req) => {
      return Number(req.id) === Number(this.state.clickedReq);
    }) || {};
  }

  render() {
    let PopUpHOC = HOC(PopUp, this.getRequestObject());
    return (
      <>
        <ListGroup>
          {this.props.appData.map((req) => {
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
                  <Col>{calcDate(req.date, req.time)} {req.timeZone}</Col>
                  
                </Row>
                <Row>
                  <Col>{req.httpVerb}</Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
        <PopUpHOC
          reqId={this.state.clickedReq}
          updateData={this.props.updateData}
          formUrl={this.props.formUrl}
          visibleModal={this.state.visibleModal}
          hideModalClick={this.hideModalClick}
          requestObject={this.getRequestObject()}
          buttonText={this.props.buttonText}
        />
      </>
    );
  }
}

export default Future;
