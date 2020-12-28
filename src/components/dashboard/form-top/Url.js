import React, { Component } from "react";
import { Form, Col, Row, Badge, InputGroup, Card, Tab, Tabs } from "react-bootstrap";

class Url extends Component {
  handleBlur = (event) => {
    let form = event.target.closest("form");
    let hiddenSpan = event.target.nextElementSibling;

    if (!form.checkValidity()) hiddenSpan.hidden = false;
  };

  handleFocus = (event) => {
    let hiddenSpan = event.target.nextElementSibling;
    hiddenSpan.hidden = true;
  };

  render() {
    return (
      <Form.Group as={"fieldset"}>
        <Row className="mt-3">
          <Col>
            <Tabs defaultActiveKey="guide" id="uncontrolled-tab-example">
              <Tab eventKey="guide" title="Basic Steps">
                <br></br>
                <p>
                  There is a form below. You use it to tell us what type of HTTP request to send for you. Trying it is harmless and easy.
                </p>
                <p>
                  1. Select a type of request from the dropdown. Try a <code>GET</code>.
                </p>
                <p>
                  2. Type in a URL. Try <code>https://www.google.com</code>.
                </p>
                <p>
                  3. Give your request a name. Try <code>"My GET request to Google!"</code>
                </p>
                <p>
                  4. Scroll to bottom and hit send. A summary of your sent request is displaying for you in the <code>Past</code> tab on the left. Click on it to see the details.
                </p>
              </Tab>
              <Tab eventKey="scheduling" title="Scheduling">
                <br></br>
                <p>
                  Perhaps you want to send a request later, rather than right now.
                </p>
                <p>
                  1. Take the first three steps in the Basic Steps.
                </p>
                <p>
                  2. Scroll down and Enable the Scheduler.
                </p>
                <p>
                  3. Select a time, a time zone, and a date. Try something just a couple minutes from now in your current time zone, so you don't have to wait too long to check if it sent.
                </p>
                <p>
                  4. Hit Send. As an example, if you specified 10:57 AM, wait until 10:58 AM, refresh the page, and check the Future tab on the left. A summary of your sent request is displaying for you.
                </p>
              </Tab>
              <Tab eventKey="example" title="Example">
                <br></br>
                <p>
                  Reqres.in is a dummy API that you can use to play with. Let's try sending a POST request to them and see what comes back. Here is their <a href="https://reqres.in/" target="_blank">documentation</a> for your reference.
                </p>
                <p>
                  1. Select POST.
                </p>
                <p>
                  2. Enter <code>https://reqres.in/api/users</code> as the URL.
                </p>
                <p>
                  3. Enter <code>My POST request to Reqres!</code> as the name.
                </p>
                <p>
                  4. A Body section is now showing because you selected POST. Select <code>JSON</code> as the Content-Type.
                </p>
                <p>
                  5. Copy <code>{"{ name: morpheus, job: leader }"}</code> and paste it into the Body.
                </p>
                <p>
                  6. Hit Send. Be sure to click on the summary of this request in the sidebar on the left and see what they sent back as a response.
                </p>
              </Tab>
              <Tab eventKey="parametersHeaders" title="Parameters and Headers">
                <br></br>
                <p>
                  When we send your request, your parameters will get appended to the URL you specified, like this: <code>https://reqres.in/api/users<strong>?page=2</strong></code>.
                </p>
                <p>
                  Your headers take precedent over any default we may have otherwise used to send your request. In other words, you can override stuff we normally do.
                </p>
              </Tab>
              <Tab eventKey="questions" title="Questions">
                <br></br>
                <p>
                  Be sure to read the <code>Docs</code>. If you can't find your answer there, or want to give us feedback (we appreciate it), please reach out to <code>team@api-q.com</code>.
                </p>
              </Tab>
            </Tabs>
            <hr></hr>
            {/* <Badge variant="light">
              Select the type of request to send and the URL where it's going.
            </Badge> */}
          </Col>
        </Row>

        <Row className="mt-3">
          <Col lg={2} xs={3}>
            <Form.Control
              as="select"
              name="httpVerb"
              custom
              defaultValue={this.props.httpVerb}
              onChange={this.props.handleChange}
            >
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>PATCH</option>
              <option>DELETE</option>
            </Form.Control>
          </Col>

          <Col lg={10} xs={9}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>url</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                name="hostpath"
                placeholder="https://www.example.com"
                pattern="http[s]?://.+"
                onBlur={this.handleBlur}
                onFocus={this.handleFocus}
                onChange={this.props.handleChange}
                defaultValue={this.props.hostpath}
              />
              <span id="hostpath-error" className="error-message" hidden>
                The URL must match this format: "http[s]://"
              </span>
            </InputGroup>
          </Col>
        </Row>

        {/* <Row className="mt-3">
          <Col>
            <Badge variant="light">
              Pick any name you want, maybe something to help you remember what
              this request is for.
            </Badge>
          </Col>
        </Row> */}

        <Row className="mt-4">
          <Col>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>name</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter a name for this request. Call it anything you want."
                defaultValue={this.props.name}
                onChange={this.props.handleChange}
              />
            </InputGroup>
          </Col>
        </Row>
      </Form.Group>
    );
  }
}

export default Url;
