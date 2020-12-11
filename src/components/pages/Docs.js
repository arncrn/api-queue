import React from "react";
import { Container, Row, Col, Card, ListGroup, Badge, Button } from "react-bootstrap";

const Docs = () => {

  function handleClick(event) {
    document.querySelector('.list-group-item.active').classList.remove('active');
    event.target.classList.add('active');

    let name = event.target.dataset.name;
    console.log(name);
    let row = document.querySelector(`#${name}`);
    row.scrollIntoView();
  }


  return (
    <Container className="container-style">
    <Row className="pt-5">
      <Col md="4" >
        <Card style={{ width: '18rem' }}>
          <ListGroup variant="flush">
            <ListGroup.Item action active data-name='gettingStarted' onClick={handleClick}>Getting Started</ListGroup.Item>
            <ListGroup.Item action data-name='implementation' onClick={handleClick}>Implementation</ListGroup.Item>
            <ListGroup.Item action data-name='futureFeatures' onClick={handleClick}>Future Features</ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
      <Col md="7">
        <Row>
          <h2>Overview</h2>
        </Row>
        <Row>
          <p>API-Q is an application for sending and receiving HTTP requests and notably, scheduling the sending of a request at a later time (hence the name, API-"queue"). This saves the developer time and hassle from having to setup their own server to receive a response. API-Q is sort of like a slimmed down and better-looking Postman, but with a scheduler. The slimmed down part just refers to the fact that we have fewer features and our app is much less capable. The better-looking part reflects our opinion that some tools, like Postman, don't have the best design and aren't that user-intuitive.</p>
        </Row>

        <Row id='gettingStarted'>
          <h2>Getting Started</h2>
        </Row>

        <Row>
          <Badge className="step" variant="primary">Step 1 - Sign Up</Badge>
        </Row>
        <Row>
          <p>This is really just a demo account for you to play around and explore what we've built. You won't get any emails. You won't even get an initial confirmation email. Or use the dummy credentials by clicking the yellow button.</p>

          <p>If you do sign up, be sure to choose a password that you can easily remember. Since this a demonstration site we've chosen not to implement a basic settings page at this time and we have not implemented a way to reset your password should you forget it.</p>
        </Row>

        <Row>
          <Badge className="step" variant="primary">Step 2 - Send a Request!</Badge>
        </Row>
        <Row>
          <p>Now you should be at the <code>/app</code> route. Feel free to make a request! The simplest thing to try would be a GET request to some domain (i.e. website) that you're familiar with, like <a target="_blank" href="https://www.google.com">https://www.google.com</a>. Select GET, enter the URL where it is indicated, and give your request a name - this is just something to help you remember it by. Then just scroll to the bottom of the page and hit send. There is no need to include any parameters or headers unless your specific use case requires them.</p>
        </Row>

        <Row>
          <Badge className="step" variant="info">Sending Requests Now</Badge>
        </Row>
        <Row>
          <p>If you sent a request and you did not use the scheduler, that means we sent the request right now on your behalf. You should see a summary of the request and the response we received on your behalf in the <strong>Past</strong> tab, located to left in the sidebar. The type of request you made is in Blue, the status code of the response is in red or green (depending on whether it was successful or not), and the status text is in gray. You'll also see the date and time that the request was sent.</p>
        </Row>

        <Row>
          <Badge className="step" variant="info">Scheduling Future Requests</Badge>
        </Row>
        <Row>
          <p>If you used the scheduler when sending a request, that means your summary will be populated in the sidebar's <strong>Future</strong> tab. Click it to reveal the summary.</p>
          <p>Note that when scheduling a request the default time zone will be the one you chose when signing up. Feel free to change it when sending a request with the scheduler.</p>
        </Row>

        <Row>
          <Badge className="step" variant="info">Viewing a Request</Badge>
        </Row>
        <Row>
          <p>Ok, so you've either sent or scheduled a request. Just click on the summary in the sidebar to pop up a modal with all the details. At the top you'll see two tabs: Request and Response.</p>
          <p>The Request tab will show you what you sent including the request headers and the body, if applicable (for example, you don't include a body when sending a GET request).</p>
          <p>The Response tab will show you what was sent back to us in response including the response headers and the body, if applicable. For example, if you made a GET request to Google's homepage you'll see a bunch of HTML in the Body.</p>
          <p>You'll also notice that we've pre-populated the fields with the information your original request included. We do this to make life easier in case you want to scroll down and just send the same sort of request again. You can also choose to make some modifications and then send it, or even schedule a modified version for the future.</p>
        </Row>

        <Row>
          <Badge className="step" variant="info">Deleting a Request</Badge>
        </Row>
        <Row>
          <p>Perhaps you've scheduled a request that you no longer want to send. Click on the summary, scroll to the bottom of the pop up, and you'll find a <Button size='sm' variant="danger">Delete</Button> button to satisfy your desire.</p>
        </Row>

        <Row>
          <Badge className="step" variant="warning">Playing with an actual API endpoint</Badge>
        </Row>
        <Row>
          <p>If you want to test API-Q with an actual API, try something like <a target="_blank" href="https://reqres.in/">https://reqres.in/</a>.</p>
          <p>This is a sample API (no affiliation with us) that you can practice or test interacting with. For example, you could send a <code>POST</code> request to <code>https://reqres.in/api/users</code>. Be sure to select a Content-Type of <code>JSON</code> in the <code>Body</code> section and be sure to actually include valid JSON. To comply with the Reqres doc.'s, you'll note they tell you to try sending something like this: <pre><code>INSERTION NEEDED HERE</code></pre></p>
        </Row>
        
        <Row id='implementation'>
          <h2>Implementation</h2>
          <ul>
            <li>set interval</li>
            <li>data wrangling from the backend to the front end.</li>
            <li>our database tables and the schemas</li>
            <li>Our stack, the PERN stack - Postgres, Express, React, Node. Other things we use are React Bootstrap, React Calendar, React Router, </li>
            <li>Talk about how we setup PG persistence with our server file.</li>
            <li>Challenges</li>
            <li></li>
          </ul>
        </Row>
       
        <Row id='futureFeatures'>
          <h2>Future Features</h2>
          <ul>
            <li>adding more timezones</li>
            <li>copy/paste script that runs after we receive a response to your request.</li>
            <li>schedule recurring future requests</li>
            <li>implement our scheduling functionality with a cron job instead of Set Interval.</li>
            <li>testing suite</li>
            <li>settings page</li>
            <li>password reset email links</li>
          </ul>
        </Row>
      </Col>
    </Row>

  </Container>
  );
};

export default Docs;
