import React, { Component } from "react";
import { ListGroup, Row, Col, Badge } from "react-bootstrap";
import PopUp from "./PopUp.js";
import HOC from "../../HOC.js";

const calcDate = function (date) {
  let [year, month, day] = date.split('-');

  return `${month.padStart(2, "0")}-${day.padStart(2, "0")}-${year}`
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

  setVariant = (req) => {
    if (String(req.response.status)[0] === '2') {
      return 'success';
    } else if (String(req.response.status)[0] === '4') {
      return 'danger';
    }
  }

  render() {
    let PopUpHOC = HOC(PopUp, this.getRequestObject());
    return (
      <>
        <ListGroup className="scroll-box">
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
                  <Col><strong>{req.name}</strong></Col>
                </Row>
                <Row>
                  <Col> <Badge variant='primary'> {req.httpVerb}</Badge></Col>
                </Row>
                <Row>
                  <Col><Badge pill variant={this.setVariant(req)}>{req.response.status}</Badge> <Badge variant='secondary'>{req.response.statusText}</Badge></Col>
                </Row>
                <Row>
                  <Col><Badge variant='light'>{calcDate(req.date)}</Badge></Col>
                </Row>
                <Row>
                  <Col><Badge variant='light'>{req.time} {req.timeZone}</Badge></Col>
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
