import React, { Component } from "react";
import Sidebar from "./dashboard/sidebar/Sidebar";
import Parameters from "./dashboard/form-top/Parameters.js";
import Url from "./dashboard/form-top/Url.js";
import Headers from "./dashboard/Headers.js";
import Scheduler from "./dashboard/Scheduler.js";
import SubmitButton from "./dashboard/SubmitButton.js";
import Body from "./dashboard/Body.js";
import PopUp from "./dashboard/sidebar/PopUp.js";

// Bootstrap Components
import { Container, Row, Col, Form } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      req: [
        {
          name: "Request name",
          date: "10-10",
          method: "DELETE",
          status: "200",
        },
        {
          name: "Request name 2",
          date: "10-10",
          method: "DELETE",
          status: "200",
        },
      ],
      visibleModal: false,
    };
  }

  // Does not refresh form
  handleSubmit = (event) => {
    event.preventDefault();
  };

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
      <Container>
        <Row>
          <Col lg={3} as={"main"} className="border">
            <Sidebar
              showModalClick={this.showModalClick}
              requestList={this.state.req}
            />
          </Col>
          <Col lg={9} as={"main"} className="border">
            <Form onSubmit={this.handleSubmit}>
              <Url />
              <Parameters />
              <hr />
              <Headers />
              <Body />
              <Scheduler />
              <SubmitButton />
              <PopUp
                visibleModal={this.state.visibleModal}
                hideModalClick={this.hideModalClick}
              />
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
