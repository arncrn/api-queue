import React, { Component } from "react";
import { ListGroup, Row, Col, Badge } from "react-bootstrap";
import PopUp from "./PopUp.js";
import HOC from "../../HOC.js";

class Past extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleModal: false,
      clickedReq: null,
      numberOfRequests: this.props.appData.length,
    };
  }

  getTimeZoneString = (timeZone) => {
    switch (timeZone) {
      case 'AKST': return 'America/Anchorage';
      case 'PST': return  'America/Los_Angeles';
      case 'MST': return 'America/Boise';
      case 'CST': return 'America/Chicago';
      case 'EST': return 'America/New_York'
    }
  }
  
  getSentTimeValues = (databaseTime, timeZone) => {
    let timeZoneString = this.getTimeZoneString(timeZone);
    let utc_time = new Date(databaseTime);
    let sent_time = utc_time.toLocaleTimeString('en-US', {timeZone: timeZoneString});
    let sent_date = utc_time.toLocaleDateString('en-US', {timeZone: timeZoneString});
  
    return [sent_time, sent_date];
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
    if (String(req.response.status)[0] === '4' || String(req.response.status)[0] === '5') {
      return 'danger';
    } else if (String(req.response.status)[0] === '3') {
      return 'warning'
    } else {
      return 'success';
    }
  }

  render() {
    let PopUpHOC = HOC(PopUp, this.getRequestObject());
    return (
      <>
        <ListGroup>
          {this.props.appData.map((req) => {
            let [sent_time, sent_date] = this.getSentTimeValues(req.timeSent, req.timeZone);
            let timeNow = new Date().getTime();
            let secondsSinceRequest = (timeNow - new Date(req.timeSent)) / 1000;

            return (
              <ListGroup.Item
                action
                data-id={req.id}
                key={req.id}
                className={secondsSinceRequest < 5 && "glowing"}
                onClick={this.handleClick}
              >
                <Row>
                  <Col><strong className="text-break">{req.name}</strong></Col>
                </Row>
                <Row>
                  <Col> <Badge variant='primary'> {req.httpVerb}</Badge></Col>
                </Row>
                <Row>
                  <Col><Badge pill variant={this.setVariant(req)}>{req.response.status}</Badge> <Badge variant='secondary'>{req.response.statusText}</Badge></Col>
                </Row>
                <Row>
                  <Col><Badge variant='light'>{sent_date}</Badge></Col>
                </Row>
                <Row>
                  <Col><Badge variant='light'>{sent_time} {req.timeZone}</Badge></Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>

        {this.state.visibleModal &&  <PopUpHOC
          reqId={this.state.clickedReq}
          updateData={this.props.updateData}
          formUrl={this.props.formUrl}
          visibleModal={this.state.visibleModal}
          hideModalClick={this.hideModalClick}
          requestObject={this.getRequestObject()}
          showAlert={this.props.showAlert}
        />}
      </>
    );
  }
}

export default Past;
