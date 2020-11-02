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
  let id = 1;
  return function() {
    return id += 1;
  }
})();

class PopUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      httpVerb: '',
      hostpath: '',
      timestamp: '',
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
    };
  }


  static getDerivedStateFromProps(props, state) {
    let requestObject = props.requestObject;
    return {
      httpVerb: requestObject.method,
      hostpath: requestObject.hostpath,
      timestamp: requestObject.timestamp,
      name: requestObject.name,
      headers: requestObject.headers,
      parameters: requestObject.parameters,
    }
  }

  onHideClick = () => {
    this.props.hideModalClick();
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

    console.log(this.props);
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
                      ["PATCH", "PUT", "POST"].includes(this.state.httpVerb) && <Body requestObject={this.props.requestObject} />
                    }
                    <Scheduler requestObject={this.props.requestObject} />
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
