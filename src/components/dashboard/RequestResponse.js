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
  render() {
    let ott = {
      name: 123,
      age: {
        t: 555,
      },
    };

    let obj = JSON.stringify(ott, null, 2);

    let ht = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      
    </body>
    </html>`;

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
              defaultValue="request"
            >
              <ToggleButton value="request">Request</ToggleButton>
              <ToggleButton value="response">Response</ToggleButton>
            </ToggleButtonGroup>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p>HTTP/1.1 200 OK</p>
            <Accordion className="mt-3">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <Button variant="dark">Headers</Button>
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <dl>
                      <div>
                        <dt>Accept:</dt>
                        <dd>*/*</dd>
                      </div>

                      <div>
                        <dt>Accept-Encoding:</dt>
                        <dd>gzip, deflate</dd>
                      </div>

                      <div>
                        <dt>Connection:</dt>
                        <dd>keep-adtve</dd>
                      </div>

                      <div>
                        <dt>Host:</dt>
                        <dd>httpbin.org</dd>
                      </div>

                      <div>
                        <dt>User-Agent:</dt>
                        <dd>HTTPie/2.1.0</dd>
                      </div>
                    </dl>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <Button variant="dark">Body</Button>
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <pre>
                      {obj}
                      {html(ht)}
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
