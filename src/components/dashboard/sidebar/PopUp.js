import React, { Component } from "react";
import { Modal, Container, Row, Col, Form } from "react-bootstrap";
import Headers from "../Headers.js";
import Scheduler from "../Scheduler.js";
import SubmitButton from "../SubmitButton.js";
import Body from "../Body.js";
import Url from "../form-top/Url.js";
import Parameters from "../form-top/Parameters.js";
import RequestResponse from "../RequestResponse.js";

const nextId = (function() {
  let id = 2;
  return function() {
    return id += 1;
  }
})();

const calcTime = function (date) {
  return `${String(date.getHours()).padStart(2, "0")}:${date.getMinutes()}`;
};

class PopUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requestId: '',
      httpVerb: '',
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
        contentType: "",
        payload: "",
      }
    };
  }

  // We gotta fix this, its not populating the PopUp inputs
  static getDerivedStateFromProps(props, state) {

    if (props.requestId !== state.requestId) {
      let requestObject = props.requestObject;
      return {
        requestId: props.requestId,
        httpVerb: requestObject.method,
        hostpath: requestObject.hostpath,
        time: requestObject.time,
        timeZone: requestObject.timeZone,
        date: requestObject.date,
        name: requestObject.name,
        headers: requestObject.headers,
        parameters: requestObject.parameters,
      };
    }

    return null;
  }

  onHideClick = () => {
    this.props.hideModalClick();
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

  render() {
    console.log(this.state);
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
                  <RequestResponse />
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
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default PopUp;
