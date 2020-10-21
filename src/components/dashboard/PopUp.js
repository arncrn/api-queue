import React, { Component } from "react";
import { Modal, Button, Container, Row, Col, Form } from "react-bootstrap";
import Headers from "./Headers.js";
import Scheduler from "./Scheduler.js";
import Post from "./Post.js";
import Body from "./Body.js";
import Url from "./form-top/Url.js";
import Parameters from "./form-top/Parameters.js";
import RequestResponse from "./RequestResponse.js";

class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <>
        <Button
          variant="primary"
          onClick={() =>
            this.setState({
              show: true,
            })
          }
        >
          Custom Width Modal
        </Button>

        <Modal
          show={this.state.show}
          onHide={() =>
            this.setState({
              show: false,
            })
          }
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
                <Col xs={12} as={"main"} className="border">
                  <RequestResponse />
                  <Form>
                    <Url />
                    <Parameters />
                    <hr />
                    <Headers />
                    <Body />
                    <Scheduler />
                    <Post />
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
