import React, { Component } from "react";
import Sidebar from "./dashboard/sidebar/Sidebar";
import { Container, Row, Col, Alert } from "react-bootstrap";
import SharedForm from "./dashboard/SharedForm.js";
import HOC from "./HOC.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Send',
      formUrl: '/makerequest',
      scheduler: false,
    }
  }

  toggleScheduler = () => {
    this.setState((prevState) => ({
      scheduler: !prevState.scheduler,
      buttonText: !prevState.scheduler === false ? 'Send' : 'Schedule',
    }))
  }

  render() {
    return (
      <Container className="container-style">
        {this.props.alertMessage && <Row className="flash-message-container">
          <Col>
            <Alert className="flash-message mt-3" variant='primary'>
              {this.props.alertMessage}
            </Alert>
          </Col>
        </Row>}
        <Row>
          <Col lg={3} as={"main"} className="border">
            <Sidebar 
              appData={this.props.appData} 
              updateData={this.props.updateData}
              refreshPage={this.props.refreshPage}
              showAlert={this.props.showAlert}
            />
          </Col>
          <Col lg={9} as={"main"} className="border">
            <SharedForm
              handleSubmit={this.props.handleSubmit}
              hostpath={this.props.hostpath}
              handleChange={this.props.handleChange}
              httpVerb={this.props.httpVerb}
              parameters={this.props.parameters}
              name={this.props.name}
              addKeyValueFields={this.props.addKeyValueFields}
              editProperty={this.props.editProperty}
              removeKeyValueField={this.props.removeKeyValueField}
              headers={this.props.headers}
              body={this.props.body}
              onCalendarChange={this.props.onCalendarChange}
              time={this.props.time}
              timezone={this.props.timezone}
              date={this.props.date}
              buttonText={this.state.buttonText}
              formUrl={this.state.formUrl}
              toggleScheduler={this.toggleScheduler}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HOC(App);
