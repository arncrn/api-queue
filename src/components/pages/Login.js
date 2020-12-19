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

  function handleBlur(event) {
    let form = event.target.closest('form');
    let hiddenSpan = event.target.nextElementSibling;

    if (!form.checkValidity()) hiddenSpan.hidden = false;
  }

  function handleFocus(event) {
    let hiddenSpan = event.target.nextElementSibling;
    hiddenSpan.hidden = true;
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
        <Col lg={{span:4, offset: 4}} className="shadow p-5 mt-5 mb-5 rounded">
          <h2 className="text-center mb-4">Log in</h2>
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
                <span className='error-message' hidden>Must be a valid email address.</span>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" onChange={handlePasswordChange}/>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
