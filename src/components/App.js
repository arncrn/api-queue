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

const nextId = (function() {
  let id = 0;
  return function() {
    return id += 1;
  }
})();

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

  handleChange = (event) => {
    const target = event.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  // Does not refresh form
  handleSubmit = (event) => {
    event.preventDefault();
  }
 // =================================== working


  addKeyValueFields = (event) => {
    let name = event.target.dataset.name;
    this.setState(prevState => ({
      [name]: [...prevState[name], {id: nextId(), key: "", value: ""}]
    }));
  }

  editParameter = (event) => {
    let target = event.target
    let value = target.value;
    let name = target.name;
    // change dataset name to be more universal
    let targetId = target.dataset.rowId;
    let propertyCopy = [...this.state[name]];
    let targetProperty = propertyCopy.find(property => +property.id === +targetId);

    targetProperty[name] = value;

    this.setState({
      [name]: propertyCopy,
    });

    // console.log(this.state.parameters);
  }

  removeKeyValueField = (event) => {
    // fix this!1!
    let target = event.target;
    let targetId = target.dataset.rowId;
    let name = target.dataset.name;
    let newState;

    if (this.state[name].length <= 1) {
      newState = [{id: nextId(), key: "", value: ""}];
    } else {
      newState = this.state[name].filter(property => {
        return +property.id !== +targetId;
      });
    }

    this.setState({
      [name]: newState,
    })
  }


  // ===============================

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
                addKeyValueFields={this.addKeyValueFields}
                editParameter={this.editParameter}
                removeKeyValueField={this.removeKeyValueField}
              />
              <hr />
              <Headers
                headers={this.state.headers}
                addKeyValueFields={this.addKeyValueFields}
                removeKeyValueField={this.removeKeyValueField}
              />
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
