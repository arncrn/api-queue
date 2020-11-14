import React, { Component } from "react";
import Sidebar from "./dashboard/sidebar/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import SharedForm from "./dashboard/SharedForm.js";
import HOC from "./HOC.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Send',
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col lg={3} as={"main"} className="border">
            <Sidebar />
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
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HOC(App);
