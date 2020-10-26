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
      status: "HTTP/1.1 200 OK",
      headers: {
        "Accept": "*/*",
        "Accept-Encoding":"gzip, deflate",
        "Connection":"keep-adtve",
        "Host":"httpbin.org",
        "User-Agent":"HTTPie/2.1.0",
      },
      body: {
        "name": 123,
        "age": {
          "t": 555
        }
      }
    }
  }

  render() {
    // let ht = `<!DOCTYPE html>
    // <html lang="en">
    // <head>
    //   <meta charset="UTF-8">
    //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //   <title>Document</title>
    // </head>
    // <body>
      
    // </body>
    // </html>`;

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
            <p>{this.state.status}</p>
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
                      {Object.entries(this.state.headers).map(([k, v]) => {
                        return (
                            <div>
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
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <Button variant="dark">Body</Button>
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <pre>
                      {JSON.stringify(this.state.body, null, 2)}
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
