import React, { Component } from "react";
import { Modal, Container, Row, Col, Form } from "react-bootstrap";
import Headers from "../Headers.js";
import Scheduler from "../Scheduler.js";
import SubmitButton from "../SubmitButton.js";
import Body from "../Body.js";
import Url from "../form-top/Url.js";
import Parameters from "../form-top/Parameters.js";
import RequestResponse from "../RequestResponse.js";

class PopUp extends Component {
  constructor(props){
    super(props);

    this.state = {
      parameters: [
        {
          key: "product",
          value: "2",
        },
        {
          key: "search",
          value: "toys",
        },
      ],
    };
  }
  
  onHideClick = () => {
    this.props.hideModalClick();
  }

  render() {
    return (
      <>
        <Modal
          // show={true}
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
                  <RequestResponse />
                  <Form>
                    <Url parameters={this.state.parameters}/>
                    <Parameters parameters={this.state.parameters} />
                    <hr />
                    <Headers />
                    <Body /> {/* hide this in get request */}
                    <Scheduler />
                    <SubmitButton />
                  </Form>
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
