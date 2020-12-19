import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Alert } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [timezone, setTimeZone] = useState("AKST");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [goTimezone, setGoTimeZone] = useState("AKST");
  const [skipSignup, setSkipSignup] = useState(false);

  function toRedirect() {
    if (signupSuccess) {
      return <Redirect to="/app" />;
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleTimeZoneChange(event) {
    setTimeZone(event.target.value);
  }

  function handleGoTimeZoneChange(event) {
    setGoTimeZone(event.target.value);
  }

  function showAlert(message) {
    setAlertMessage(message);

    setTimeout(() => {
      setAlertMessage("");
    }, 5000);
  }

  function handleBlur(event) {
    let form = event.target.closest("form");
    let hiddenSpan = event.target.nextElementSibling;

    if (!form.checkValidity()) hiddenSpan.hidden = false;
  }

  function handleFocus(event) {
    let hiddenSpan = event.target.nextElementSibling;
    hiddenSpan.hidden = true;
  }

  function handleSkipSignup() {
    setSkipSignup(!skipSignup);
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, timezone }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return response.text();
      })
      .then((response) => {
        if (response.status === 200) {
          props.login(response.timezone);
          setSignupSuccess(true);
        } else {
          showAlert("Sorry, that email already exists.");
        }
      });
  }

  function handleGoSubmit(event) {
    event.preventDefault();

    fetch("/tempsignup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ goTimezone }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        props.login(response.goTimezone);
        setSignupSuccess(true);
      });
  }

  function displayForm() {
    if (skipSignup) {
      return (
        <Row className="pb-5">
          <Col lg={{ span: 4, offset: 4 }} className="shadow p-5 mt-5 mb-5 rounded">
            <p>Ok, just select a default time zone and you are good to go.</p>

            <Form onSubmit={handleGoSubmit}>
              <Form.Group controlId="formGoBasicTimeZone">
                <Form.Label>Time Zone</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue={goTimezone}
                  name="timezone"
                  onChange={handleGoTimeZoneChange}
                  custom
                >
                  <option value="AKST">Alaska Time</option>
                  <option value="PST">Pacific Time</option>
                  <option value="MST">Mountain Time</option>
                  <option value="CST">Central Time</option>
                  <option value="EST">Eastern Time</option>
                </Form.Control>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-3">
                Go
              </Button>
            </Form>
          </Col>
        </Row>
      );
    } else {
      return (
        <Row className="pb-5">
          <Col lg={{ span: 4, offset: 4 }} className="shadow p-5 mb-5 rounded">
            <h2 className="text-center mb-4">Sign up</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleEmailChange}
                  pattern=".+@.+"
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                  required
                />
                <span className="error-message" hidden>
                  Must be a valid email address.
                </span>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  onChange={handlePasswordChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicTimeZone">
                <Form.Label>Time Zone</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue={timezone}
                  name="timezone"
                  onChange={handleTimeZoneChange}
                  custom
                >
                  <option value="AKST">Alaska Time</option>
                  <option value="PST">Pacific Time</option>
                  <option value="MST">Mountain Time</option>
                  <option value="CST">Central Time</option>
                  <option value="EST">Eastern Time</option>
                </Form.Control>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-3">
                Sign Up
              </Button>
            </Form>
            <br></br>
            <p>
              Note: Pick a password you can't forget because we haven't included
              a way to recover it if you forget.
            </p>
          </Col>
        </Row>
      );
    }
  }

  return (
    <Container className="pt-5 container-style">
      {toRedirect()}

      {alertMessage && (
        <Row className="flash-message-container">
          <Col>
            <Alert className="flash-message" variant="danger">
              {alertMessage}
            </Alert>
          </Col>
        </Row>
      )}

      <Row className="mb-5">
        <Col className="text-center">
          <Button variant="warning" onClick={handleSkipSignup}>
            {skipSignup ? "Back to sign up" : "Skip sign up" }
          </Button>
        </Col>
      </Row>

      {displayForm()}
    </Container>
  );
};

export default Signup;
