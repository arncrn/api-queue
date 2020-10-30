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
      httpVerb: 'GET',
      hostpath: '',
      timestamp: '',
      name: '',
      headers: [{
                  id: '',
                  key: '',
                  value: ''
                }],
      parameters: [{
                    id: '1',
                    key: 'bob',
                    value: 'marley'
                  }],
    };
  }

  // getHttpMethod = (event) => {
  //   this.setState({
  //     httpVerb: event.target.value
  //   });
  // }

  handleChange = (event) => {
    const target = event.target.value;
    // console.log(target);
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
              <Url
                hostpath={this.state.hostpath}
                handleChange={this.handleChange}
                httpVerb={this.state.httpVerb}
                parameters={this.state.parameters}
                name={this.state.name}
              />
              <Parameters
                parameters={this.state.parameters}
                handleChange={this.handleChange}
              />
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
