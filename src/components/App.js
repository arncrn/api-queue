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
  parameters: [{
    id: '',
    key: '',
    value: ''
  }],
  headers: [{
    id: '',
    key: '',
    value: ''
  }],
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
  constructor(props) {
    super(props);
    this.state = {
      httpVerb: 'GET'
    }
  }

  getHttpMethod = (event) => {
    this.setState({
      httpVerb: event.target.value
    });
  }

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
              <Url getHttpMethod={this.getHttpMethod} httpVerb={this.state.httpVerb} requestObject={emptyData}/>
              <Parameters requestObject={emptyData} />
              <hr />
              <Headers requestObject={emptyData} />
              {
                ["PATCH", "PUT", "POST"].includes(this.state.httpVerb) && <Body requestObject={emptyData} />
              }
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
