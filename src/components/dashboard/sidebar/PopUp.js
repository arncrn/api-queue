import React, { Component } from "react";
import { Modal, Container, Row, Col} from "react-bootstrap";
import RequestResponse from "../RequestResponse.js";
import SharedForm from "../SharedForm.js";

class PopUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonText: 'Send',
      scheduler: false
    };
  }

  toggleScheduler = () => {
    this.setState({
      scheduler: !this.state.scheduler,
      buttonText: !this.state.scheduler === false ? 'Send' : 'Schedule',
    })
  }

  onHideClick = () => {
    this.props.hideModalClick();
  };

  render() {
    return (
      <>
        <Modal
          show={this.props.visibleModal}
          onHide={this.onHideClick}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          centered
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Edit Request
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Container>
              <Row>
                <Col lg={12} as={"main"} className="border">
                  {(this.props.requestObject.response && this.props.requestObject.response.status) &&<RequestResponse requestObject={this.props.requestObject} />}
                  <hr></hr>
                  <p>Below is another form. It's just like the main form, except now it is pre-populated with information from this specific request you're looking at (the one we sent for you). You can send a duplicate out again, or edit it and then send, or even schedule it for later.</p>
                  <SharedForm
                    reqId={this.props.reqId}
                    handleDelete={this.props.handleDelete}
                    handleSubmit={this.props.handleSubmit}
                    hostpath={this.props.hostpath}
                    handleChange={this.props.handleChange}
                    httpVerb={this.props.httpVerb}
                    parameters={this.props.parameters}
                    name={this.props.name}
                    addKeyValueFields={this.props.addKeyValueFields}
                    editProperty={this.props.editProperty}
                    removeKeyValueField={this.props.removeKeyValueField}
                    headers={this.props.headers}
                    body={this.props.body}
                    onCalendarChange={this.props.onCalendarChange}
                    time={this.props.time}
                    timezone={this.props.timezone}
                    date={this.props.date}
                    buttonText={this.state.buttonText} 
                    formUrl={this.props.formUrl}
                    toggleScheduler={this.toggleScheduler}
                    visibleModal={this.props.visibleModal}
                    requestObject={this.props.requestObject}
                    scheduler={this.state.scheduler}
                  />
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default PopUp;
