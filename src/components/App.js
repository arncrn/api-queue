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

let emptyData = {
  id: "",
  email: "",
  name: "",
  method: "",
  hostpath: "",
  timestamp: new Date(),
  params: [],
  headers: [],
  body: {
    contentype: "",
    payload: "",
  },
  response: {
    headers: {
      AccessControlAllowCredentials: "",
      AccessControlAllowOrigin: "",
      Connection: "",
      ContentLength: "",
      ContentType: "",
      Date: "",
      Server: "",
    },
    status: "",
    responseLine: "",
    body: "",
  }
}

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
              <Url requestObject={emptyData}/>
              <Parameters />
              <hr />
              <Headers />
              {/* <Body /> */}
              <Scheduler requestObject={emptyData} />
              <SubmitButton />
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
