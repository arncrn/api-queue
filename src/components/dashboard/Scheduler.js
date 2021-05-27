import React, { Component } from "react";
import Calendar from 'react-calendar';
import { Form, Col, Row, Button, Accordion, Card, Badge } from "react-bootstrap";

class Scheduler extends Component {
  render() {
    let date = this.props.date;
    
    if (typeof this.props.date === "string") {
      let [year, month, day] = this.props.date.split('-');

      date = new Date(year, month - 1, day);
    }

    return (
      <Form.Group as={"fieldset"} className="mt-4 mb-4">
        <Form.Label as="legend">Scheduler</Form.Label>

        <Accordion className='mt-1'>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="outline-info" eventKey="0" onClick={this.props.toggleScheduler}>
                { this.props.scheduler ? "Disable" : "Enable" }
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Row className="justify-content-center">
                  <Col xs={12} md={3}>
                    <Form.Control as="input" type="time" name='time' defaultValue={this.props.time} onChange={this.props.handleChange}></Form.Control>
                  </Col>
                  <Col xs={12} md={3}>
                    <Form.Control as="select" defaultValue={this.props.timezone} name='timeZone' onChange={this.props.handleChange} custom>
                      {/* <option value="AKST">Alaska Time</option>
                      <option value="PST">Pacific Time</option>
                      <option value="MST">Mountain Time</option>
                      <option value="CST">Central Time</option>
                      <option value="EST">Eastern Time</option> */}
                      <option value="AKDT">Alaska Time</option>
                      <option value="PDT">Pacific Time</option>
                      <option value="MDT">Mountain Time</option>
                      <option value="CDT">Central Time</option>
                      <option value="EDT">Eastern Time</option>
                    </Form.Control>
                  </Col>
                </Row>
                <Calendar
                  onChange={this.props.onCalendarChange}
                  defaultValue={date}
                  className="mt-3 mx-auto"
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Form.Group>
    );
  }
}

export default Scheduler;
