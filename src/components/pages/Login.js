import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Alert } from "react-bootstrap";
import { Redirect } from "react-router-dom";


const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  function toRedirect() {
    if (loginSuccess) {
      return <Redirect to="/app" />
    }
  }
  
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function showAlert(message) {
    setAlertMessage(message);

    setTimeout(() => {
      setAlertMessage('');
    }, 5000);
  }
  
  function handleSubmit(event) {
    event.preventDefault();

    fetch("/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password})
    }).then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      return response.text();
    }).then((response) => {
        if (response.status === 200) {
          props.login(response.timezone);
          setLoginSuccess(true);
        } else {
          showAlert('Sorry, invalid email/password combination.')
          return;
        }
    });
  }

  return (
    <Container className="pt-5 container-style">
      {toRedirect()}
      {alertMessage && <Row className="flash-message-container">
          <Col>
            <Alert className="flash-message" variant='danger'>
              {alertMessage}
            </Alert>
          </Col>
        </Row>}
      <Row className="pb-5">
        <Col lg={{span:4, offset: 4}}>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
