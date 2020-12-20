import React, { Component } from "react";
import Headers from "./Headers.js";
import Scheduler from "./Scheduler.js";
import SubmitButton from "./SubmitButton.js";
import Body from "./Body.js";
import Url from "./form-top/Url.js";
import Parameters from "./form-top/Parameters.js";
import { Form } from "react-bootstrap";

class SharedForm extends Component {
  handleSubmit = (event) => {
    this.props.handleSubmit(event, this.props.formUrl, this.props.reqId);
  }

  handleDelete = (event) => {
    this.props.handleDelete(event, this.props.reqId)
  }

  render() {
    let isPastRequest = true;

    if (this.props.requestObject) {
      isPastRequest = this.props.requestObject.response && this.props.requestObject.response.status;
    }

    return (
    <Form onSubmit={this.handleSubmit}>
      <Url
        hostpath={this.props.hostpath}
        handleChange={this.props.handleChange}
        httpVerb={this.props.httpVerb}
        parameters={this.props.parameters}
        name={this.props.name}
      />
      <Parameters
        parameters={this.props.parameters}
        addKeyValueFields={this.props.addKeyValueFields}
        editProperty={this.props.editProperty}
        removeKeyValueField={this.props.removeKeyValueField}
      />
      <Headers
        headers={this.props.headers}
        addKeyValueFields={this.props.addKeyValueFields}
        editProperty={this.props.editProperty}
        removeKeyValueField={this.props.removeKeyValueField}
      />
      {["PATCH", "PUT", "POST"].includes(this.props.httpVerb) && (
        <Body body={this.props.body} handleChange={this.props.handleChange} />
      )}
      <Scheduler
        handleChange={this.props.handleChange}
        onCalendarChange={this.props.onCalendarChange}
        time={this.props.time}
        timezone={this.props.timezone}
        date={this.props.date}
        toggleScheduler={this.props.toggleScheduler}
        scheduler={this.props.scheduler}
      />
      <SubmitButton 
        buttonText={isPastRequest ? this.props.buttonText : "Save"} 
        visibleModal={this.props.visibleModal}
        handleDelete={this.handleDelete}
      />
    </Form>
    )
  }
}

export default SharedForm;