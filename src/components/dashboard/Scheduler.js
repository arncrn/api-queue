import React, { Component } from "react";
import Calendar from 'react-calendar';
import { Form, Col, Row, Button, Accordion, Card } from "react-bootstrap";



class Scheduler extends Component {
  render() {
    return (
      <Form.Group as={"fieldset"}>
        <Form.Label as="legend">Scheduler</Form.Label>

        <Row>
          <Col>
            Enable the scheduler to send it later rather than right now.
          </Col>
        </Row>

        <Accordion className='mt-3'>
          <Card border="dark">
            <Card.Header>
              {/* Add logic to manage scheduler data based on open and closed scheduler */}
              <Accordion.Toggle as={Button} variant="dark" eventKey="0" onClick={this.props.toggleScheduler}>
                +
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Row className="justify-content-center">
                  <Col lg={3}>
                    <Form.Control as="input" type="time" name='time' defaultValue={this.props.time} onChange={this.props.handleChange}></Form.Control>
                  </Col>
                  <Col lg={3}>
                    <Form.Control as="select" defaultValue={this.props.timeZone} name='timeZone' onChange={this.props.handleChange} custom>
                      <option value="ALASKA">Alaska Time</option>
                      <option value="PT">Pacific Time</option>
                      <option value="MT">Mountain Time</option>
                      <option value="CST">Central Time</option>
                      <option value="EST">Eastern Time</option>
                    </Form.Control>
                  </Col>
                </Row>
                <Calendar
                  onChange={this.props.onCalendarChange}
                  defaultValue={new Date(this.props.date)}
                  // defaultValue={this.props.date}
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
