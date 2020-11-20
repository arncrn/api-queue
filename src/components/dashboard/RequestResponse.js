import React, { Component } from "react";
import { html } from "js-beautify";

import {
  Card,
  Button,
  Accordion,
  ToggleButtonGroup,
  ToggleButton,
  Row,
  Col,
} from "react-bootstrap";

class RequestResponse extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentTab: 'response'
    }
  }

  getCurrentData = () => {
    let data = this.props.requestObject;

    return data[this.state.currentTab];
  }

  render() {
    let currentData = this.getCurrentData()
    console.log(this.props);
    return (
      <>
        <Row>
          <Col>
            Here you can view this past request, and the response to it.
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <ToggleButtonGroup
              type="radio"
              name="options"
              defaultValue="response"
            >
              <ToggleButton value="request" onClick={() => {this.setState({currentTab: 'request'})}} >Request</ToggleButton>
              <ToggleButton value="response" onClick={() => {this.setState({currentTab: 'response'})}}  >Response</ToggleButton>
            </ToggleButtonGroup>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p>{currentData.responseLine}</p>
            <Accordion className="mt-3">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="dark" eventKey="0">
                    Headers
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <dl>
                      {Object.entries(currentData.headers).map(([k, v], idx) => {
                        return (
                            <div key={idx}>
                              <dt>{k}:</dt>
                              <dd>{v}</dd>
                            </div>
                        )
                      })}
                    </dl>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="dark" eventKey="0">
                    Body
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <pre>
                      {JSON.stringify(currentData.body, null, 2)}
                      {/* {html(ht)} */}
                    </pre>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </>
    );
  }
}

export default RequestResponse;
