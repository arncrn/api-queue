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

  checkResponseContentType = (parsedResponse) => {
    let contentType = parsedResponse.headers["content-type"];
    if (contentType) {
      if (contentType.includes("text/html")) {
        return html(parsedResponse.body);
      } else if (contentType.includes("application/json")) {
        return JSON.stringify(parsedResponse.body, null, 2);
      } else if (contentType.includes("text/plain")) {
        return parsedResponse.body;
      } else {
        return `The response in this request is not supported: ${contentType}. We support the following content types: text/html, application/json, text/plain.`;
      }
    }
  }

  // coming back here tomorrow
  displayRawRequestBody = (rawRequest) => {
    let contentType = rawRequest.headers["Content-Type"];
    if (contentType) {
      if (contentType.includes("application/json")) {
        let parsed = JSON.parse(rawRequest.body);
        return JSON.stringify(parsed, null, 2);
      } else if (contentType.includes("text/html")) {
        return html(rawRequest.body);
      } else if (contentType.includes("text/plain")) {
        return rawRequest.body;
      } else if (contentType.includes("application/x-www-form-urlencoded")) {
        return rawRequest.body; // Maybe need to revisit this after testing sending a post request using this.
      } else if (contentType.includes("multipart/form-data")) {
        return rawRequest.body; // Maybe need to revisit this after testing sending a post request using this.
      } else {
        return `The body sent with this request is not supported: ${contentType}. We support the following content types: JSON, HTML, TEXT, form-url-encoded, form-data.`;
      }
    }
  }

  render() {
    let currentData = this.getCurrentData()
    let bodyData;

    if (this.state.currentTab === "response") {
      bodyData = this.checkResponseContentType(currentData);
    } else {
      bodyData = this.displayRawRequestBody(currentData);
    }

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
            <p>{currentData.responseLine || currentData.requestLine}</p>
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
                      {/* {this.checkResponseContentType(currentData)} */}
                      {bodyData}
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
