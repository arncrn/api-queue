import React, { Component } from "react";
import Sidebar from "./dashboard/sidebar/Sidebar";
import Parameters from "./dashboard/form-top/Parameters.js";
import Url from "./dashboard/form-top/Url.js";
import Headers from "./dashboard/Headers.js";
import Scheduler from "./dashboard/Scheduler.js";
import SubmitButton from "./dashboard/SubmitButton.js";
import Body from "./dashboard/Body.js";
import { Container, Row, Col, Form } from "react-bootstrap";

const nextId = (function() {
  let id = 0;
  return function() {
    return id += 1;
  }
})();

const calcTime = function (date) {
  return `${String(date.getHours()).padStart(2, "0")}:${date.getMinutes()}`;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      httpVerb: 'GET',
      hostpath: '',
      time: calcTime(new Date()),
      timeZone: '', // this will be set to user's default timezone.
      date: new Date(),
      name: '',
      headers: [{
                  id: '',
                  key: '',
                  value: ''
                }],
      parameters: [{
                    id: '',
                    key: '',
                    value: ''
                  }],
      body: {
        contentType: '',
        payload: ''
      }
    };
  }

  handleChange = (event) => {
    const target = event.target;
    let value = target.value;
    let name = target.name;

    if (target.name === 'contentType' || target.name === 'payload') {
      let newBody = Object.assign({...this.state.body}, {[name]:value});

      this.setState({
        body: newBody
      });  
    } else {
      this.setState({
        [name]: value,
      });  
    }
  }

  onCalendarChange = (date) => {
    this.setState({
      date: date
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

  editProperty = (event) => {
    let target = event.target
    let value = target.value;
    let name = target.name;
    let targetId = target.dataset.rowId;
    let type = target.dataset.type;
    let propertyCopy = [...this.state[type]];
    let targetProperty = propertyCopy.find(property => +property.id === +targetId);

    targetProperty[name] = value;

    this.setState({
      [name]: propertyCopy,
    });
  }

  removeKeyValueField = (event) => {
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
                editProperty={this.editProperty}
                removeKeyValueField={this.removeKeyValueField}
              />
              <hr />
              <Headers
                headers={this.state.headers}
                addKeyValueFields={this.addKeyValueFields}
                editProperty={this.editProperty}
                removeKeyValueField={this.removeKeyValueField}
              />
              {
                ["PATCH", "PUT", "POST"].includes(this.state.httpVerb) && <Body body={this.state.body} handleChange={this.handleChange} />
              }
              <Scheduler handleChange={this.handleChange} onCalendarChange={this.onCalendarChange} time={this.state.time} timezone={this.state.timezone} date={this.state.date}/>
              <SubmitButton />
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
