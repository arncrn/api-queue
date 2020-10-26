import React, { Component } from "react";
import Calendar from 'react-calendar';
import { Form, Col, Row, Button, Accordion, Card } from "react-bootstrap";

class Scheduler extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   date: null,
    // };
  }

  // onChange = (date) => {
  //   console.log(Object.getPrototypeOf(date).constructor.name);
  //   console.log(date);
  //   this.setState({ date });
  // }

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
              <Accordion.Toggle as={Button} variant="dark" eventKey="0">
                +
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Row className="justify-content-center">
                  <Col lg={3}>
                    <Form.Control as="input" type="time" defaultValue="15:39"></Form.Control>
                  </Col>
                  <Col lg={3}>
                    <Form.Control as="select" defaultValue="CST" custom>
                      <option value="ALASKA">Alaska Time</option>
                      <option value="PT">Pacific Time</option>
                      <option value="MT">Mountain Time</option>
                      <option value="CST">Central Time</option>
                      <option value="EST">Eastern Time</option>
                    </Form.Control>
                  </Col>
                </Row>
                <Calendar 
                  onChange={this.onChange}
                  // value={this.state.date}
                  // new Date(year, month, day, hours, minutes, seconds, milliseconds);
                  value={new Date(2020, 9, 9, 17, 39, 0, 0)}
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
