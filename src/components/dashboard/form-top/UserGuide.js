import React, { useRef, useEffect } from "react";
import {  Col, Row, Tab, Tabs, Button } from "react-bootstrap";

const UserGuide = () => {
  const guideRef = useRef('none');
  const buttonRef = useRef('Show user guide');

  function showGuide() {
    if (guideRef.current.style.display === "block") {
      guideRef.current.style.display = "none";
      buttonRef.current.textContent = "Show user guide";
    } else {
      guideRef.current.style.display = "block";
      buttonRef.current.textContent = "Hide user guide";
    }
  }

  return (
    <Row className="mt-3 user-guide-container">
      <Col className="text-center">
        <Button variant="warning" ref={buttonRef} onClick={showGuide}>Show user guide</Button>
      </Col>

      <Col className="coltab-container mt-3 hide-guide" ref={guideRef}>
        <Tabs defaultActiveKey="guide" className="tabs-container justify-content-center" id="uncontrolled-tab">
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
              4. Scroll to bottom and hit send. A summary of your sent request is displaying for you in the <code>Past</code> tab on the left. Click on it to see the details. If you "skipped sign up," we've taken the liberty of pre-populating some dummy Past and Future requests over in the sidebar for you to play with and view details of.
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
      </Col>
    </Row>
  )
}

export default UserGuide;