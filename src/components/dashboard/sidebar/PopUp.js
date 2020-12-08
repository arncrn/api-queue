import React, { Component } from "react";
import { Modal, Container, Row, Col} from "react-bootstrap";
import RequestResponse from "../RequestResponse.js";
import SharedForm from "../SharedForm.js";

class PopUp extends Component {
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
                    buttonText={this.props.buttonText}
                    formUrl={this.props.formUrl}
                    toggleScheduler={this.toggleScheduler}
                    visibleModal={this.props.visibleModal}
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
