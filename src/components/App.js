import React, { Component } from "react";
import Sidebar from "./dashboard/sidebar/Sidebar";
import Parameters from "./dashboard/form-top/Parameters.js";
import Url from "./dashboard/form-top/Url.js";
import Headers from "./dashboard/Headers.js";
import Scheduler from "./dashboard/Scheduler.js";
import SubmitButton from "./dashboard/SubmitButton.js";
import Body from "./dashboard/Body.js";

// Bootstrap Components
import { Container, Row, Col, Form } from "react-bootstrap";

class App extends Component {
  // Does not refresh form
  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <Container>
        <Row>
          <Col lg={3} as={"main"} className="border">
            <Sidebar/>
          </Col>
          <Col lg={9} as={"main"} className="border">
            <Form onSubmit={this.handleSubmit}>
              <Url parameters={[]}/>
              <Parameters />
              <hr />
              <Headers />
              <Body />
              <Scheduler />
              <SubmitButton />
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
