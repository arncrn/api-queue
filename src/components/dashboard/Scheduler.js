import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";

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
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <Button variant="dark">+</Button>
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Form.Group>
    );
  }
}

export default Scheduler;
