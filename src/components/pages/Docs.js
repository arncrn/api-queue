import React, { useRef } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Badge,
  Button,
  Image,
} from "react-bootstrap";

const Docs = () => {
  const tocRef = useRef(null);

  function handleClick(event) {
    document
      .querySelector(".list-group-item.active")
      .classList.remove("active");
    event.target.classList.add("active");

    let name = event.target.dataset.name;
    console.log(name);
    let row = document.querySelector(`#${name}`);
    row.scrollIntoView();
  }

  function showToc() {
    if (tocRef.current.style.display !== "flex") {
      tocRef.current.style.display = "flex";
    } else {
      tocRef.current.style.display = "none";
    }
  }

  return (
    <Container className="container-style pb-5">
      <Row className="pt-5 pr-5 pl-5 pb-5">
        <Col className="docs-toc-button justify-content-center mb-4">
          <Button onClick={showToc}>Table of Content</Button>
        </Col>
        
        <Col lg="4" className="toc-docs-sidebar-container" ref={tocRef}>
          <ListGroup variant="flush" className="mr-4 toc-docs-sidebar">
            <ListGroup.Item
              action
              active
              data-name="gettingStarted"
              onClick={handleClick}
            >
              <strong>Getting Started</strong>
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="sub-doc-item"
              data-name="signUp"
              onClick={handleClick}
            >
              Step 1: Sign Up
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="sub-doc-item"
              data-name="sendRequest"
              onClick={handleClick}
            >
              Step 2: Send Request
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="sub-doc-item"
              data-name="sendRequestNow"
              onClick={handleClick}
            >
              Send Request Now
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="sub-doc-item"
              data-name="scheduleRequest"
              onClick={handleClick}
            >
              Schedule Request
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="sub-doc-item"
              data-name="viewRequest"
              onClick={handleClick}
            >
              View Request
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="sub-doc-item"
              data-name="deleteRequest"
              onClick={handleClick}
            >
              Delete Request
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="sub-doc-item"
              data-name="example"
              onClick={handleClick}
            >
              Example: Test API Endpoint
            </ListGroup.Item>

            <ListGroup.Item
              action
              data-name="implementation"
              onClick={handleClick}
            >
              <strong>Implementation</strong>
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="sub-doc-item"
              data-name="stack"
              onClick={handleClick}
            >
              Our Stack: PERN
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="sub-doc-item"
              data-name="postgres"
              onClick={handleClick}
            >
              Postgres
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="sub-doc-item"
              data-name="react"
              onClick={handleClick}
            >
              React
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="sub-doc-item"
              data-name="asynchroncity"
              onClick={handleClick}
            >
              Asynchroncity
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="sub-doc-item"
              data-name="asynchroncity"
              onClick={handleClick}
            >
              Dates and Times
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="sub-doc-item"
              data-name="scheduling"
              onClick={handleClick}
            >
              Scheduling Requests
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="sub-doc-item"
              data-name="server"
              onClick={handleClick}
            >
              Server Structure?
            </ListGroup.Item>

            <ListGroup.Item
              action
              data-name="futureFeatures"
              onClick={handleClick}
            >
              <strong>Future Features</strong>
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="sub-doc-item"
              data-name="recurringRequests"
              onClick={handleClick}
            >
              Recurring Requests
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="sub-doc-item"
              data-name="moreTimezones"
              onClick={handleClick}
            >
              More Timezones
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="sub-doc-item"
              data-name="userScripts"
              onClick={handleClick}
            >
              User-Provided Scripts
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="sub-doc-item"
              data-name="testing"
              onClick={handleClick}
            >
              Testing Suite
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="sub-doc-item"
              data-name="settings"
              onClick={handleClick}
            >
              Settings
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="sub-doc-item"
              data-name="email"
              onClick={handleClick}
            >
              Email Sending
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col lg="8">
          <Row>
            <h2>Overview</h2>
          </Row>
          <Row>
            <p>
              API-Q is an application for sending and receiving HTTP requests
              and notably, scheduling the sending of a request at a later time
              (hence the name, API-"queue"). This saves the developer time and
              hassle from having to setup their own server to receive a
              response. API-Q is sort of like a slimmed down and better-looking
              Postman, but with a scheduler.
            </p>
          </Row>

          <Row id="gettingStarted">
            <h2>Getting Started</h2>
          </Row>

          <Row id="signUp">
            <Badge className="step" variant="info">
              Step 1: Sign Up
            </Badge>
          </Row>
          <Row>
            <p>
              This is really just a demo account for you to play around and
              explore what we've built. You won't get any emails. You won't even
              get an initial confirmation email. Or use the dummy credentials by
              clicking the yellow button.
            </p>
            <div>
              <Image
                src="images/signup.png"
                fluid
                className="shadow p-3 mb-5 bg-white rounded"
              />
            </div>

            <p>
              If you do sign up, be sure to choose a password that you can
              easily remember. Since this a demonstration site we've chosen not
              to implement a basic settings page at this time and we have not
              implemented a way to reset your password should you forget it.
            </p>
          </Row>

          <Row id="sendRequest">
            <Badge className="step" variant="info">
              Step 2: Send a Request!
            </Badge>
          </Row>
          <br></br>
          <Row>
            <div>
              <Image
                src="images/send-example.png"
                fluid
                className="shadow p-3 mb-5 bg-white rounded"
              />
            </div>
            <p>
              Now you should be at the <code>/app</code> route. Feel free to
              make a request! The simplest thing to try would be a GET request
              to some domain (i.e. website) that you're familiar with, like{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com"
              >
                https://www.google.com
              </a>
              . Select GET, enter the URL where it is indicated, and give your
              request a name - this is just something to help you remember it
              by. Then just scroll to the bottom of the page and hit send. There
              is no need to include any parameters or headers unless your
              specific use case requires them.
            </p>
          </Row>

          <Row id="sendRequestNow">
            <Badge className="step" variant="info">
              Sending Requests Now
            </Badge>
          </Row>
          <Row>
            <div>
              <Image
                src="images/past.png"
                fluid
                className="shadow p-3 mb-5 bg-white rounded"
              />
            </div>

            <p>
              If you sent a request and you did not use the scheduler, that
              means we sent the request right now on your behalf. You should see
              a summary of the request and the response we received on your
              behalf in the <strong>Past</strong> tab, located to left in the
              sidebar. The type of request you made is in Blue, the status code
              of the response is in red or green (depending on whether it was
              successful or not), and the status text is in gray. You'll also
              see the date and time that the request was sent.
            </p>
          </Row>

          <Row id="scheduleRequest">
            <Badge className="step" variant="info">
              Scheduling Future Requests
            </Badge>
          </Row>
          <Row>
            <div>
              <Image
                src="images/future.png"
                fluid
                className="shadow p-3 mb-5 bg-white rounded"
              />
            </div>
            <p>
              If you used the scheduler when sending a request, that means your
              summary will be populated in the sidebar's <strong>Future</strong>{" "}
              tab. Click it to reveal the summary.
            </p>
            <p>
              Note that when scheduling a request the default time zone will be
              the one you chose when signing up. Feel free to change it when
              sending a request with the scheduler.
            </p>
          </Row>

          <Row id="viewRequest">
            <Badge className="step" variant="info">
              Viewing a Request
            </Badge>
          </Row>
          <Row>
            <div>
              <Image
                src="images/modal.png"
                fluid
                className="shadow p-3 mb-5 bg-white rounded"
              />
            </div>

            <p>
              Ok, so you've either sent or scheduled a request. Just click on
              the summary in the sidebar to pop up a modal with all the details.
              At the top you'll see two tabs: Request and Response.
            </p>
            <p>
              The Request tab will show you what you sent including the request
              headers and the body, if applicable (for example, you don't
              include a body when sending a GET request).
            </p>
            <p>
              The Response tab will show you what was sent back to us in
              response including the response headers and the body, if
              applicable. For example, if you made a GET request to Google's
              homepage you'll see a bunch of HTML in the Body.
            </p>
            <p>
              You'll also notice that we've pre-populated the fields with the
              information your original request included. We do this to make
              life easier in case you want to scroll down and just send the same
              sort of request again. You can also choose to make some
              modifications and then send it, or even schedule a modified
              version for the future.
            </p>
          </Row>

          <Row id="deleteRequest">
            <Badge className="step" variant="info">
              Deleting a Request
            </Badge>
          </Row>
          <Row>
            <p>
              Perhaps you've scheduled a request that you no longer want to
              send. Click on the summary, scroll to the bottom of the pop up,
              and you'll find a{" "}
              <Button size="sm" variant="danger">
                Delete
              </Button>{" "}
              button to satisfy your desire.
            </p>
          </Row>

          <Row id="example">
            <Badge className="step" variant="info">
              Playing with an actual API endpoint
            </Badge>
          </Row>
          <Row>
            <p>
              If you want to test API-Q with an actual API, try something like{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://reqres.in/"
              >
                https://reqres.in/
              </a>
              .
            </p>
            <p>
              This is a sample API (no affiliation with us) that you can
              practice or test interacting with. For example, you could send a{" "}
              <code>POST</code> request to{" "}
              <code>https://reqres.in/api/users</code>. Be sure to select a
              Content-Type of <code>JSON</code> in the <code>Body</code> section
              and be sure to actually include valid JSON. Just follow the Reqres
              documentation.
            </p>
          </Row>

          <Row id="implementation">
            <h2>Implementation</h2>
          </Row>
          <Row>
            <p>
              We had a lot of decisions to make and many challenges along the
              way. At a high level, here's what we did and why.
            </p>
          </Row>

          <Row id="stack">
            <Badge className="step" variant="info">
              Stack
            </Badge>
          </Row>
          <Row>
            <p>
              We're using the PERN stack: Postgres, Express, React, Node.
              There's not much to say about the Express/Node choice but we can
              talk a little about the data and React.
            </p>
          </Row>

          <Row id="postgres">
            <Badge className="step" variant="info">
              Postgres and Data Wrangling
            </Badge>
          </Row>
          <br></br>
          <Row>
            <div>
              <Image
                src="images/erd.png"
                fluid
                className="shadow p-3 mb-5 bg-white rounded"
              />
            </div>
            <p>
              Why Postgres? We all had experience with it and it's a classic,
              powerful, relational database management system. In a way, our
              database isn't very complicated. We only have two tables,{" "}
              <code>users</code> and <code>requests</code>. So there really
              wasn't a need to make the database decision more complicated then
              it needed to be. We did however encounter some challenges
              "wrangling" the data into the forms we needed to work with.
              Different parts of our frontend expect data in various forms and
              HTTP requests and responses necessarily deal with a somewhat
              complicated and nested structure. If you send a request with say,
              Axios, what does that actual raw request look like? How do you
              view it? What does the actual raw response to an HTTP request look
              like? Hint: a bowl of spaghetti. Basically, we had to ensure that
              what our frontend expected to consume always matched up with the
              raw data we were storing in our database. This involved choices
              about type format, and just simply being careful enough to parse
              out the correct properties of these nested objects; it was
              surprisingly easy to forget to parse out a particular portion
              appropriately and sometimes storing data in particular data types
              versus others presented problems with the retrieval and
              consumption by the frontend.
            </p>
          </Row>

          <Row id="react">
            <Badge className="step" variant="info">
              React
            </Badge>
          </Row>
          <Row>
            <p>
              Why React? Each of us has the ability to build the frontend of
              this application from scratch with vanilla Javascript, AJAX
              requests, and various DOM manipulation techniques. Some of us had
              a little experience with React and others none. But we all agreed
              we wanted to get more/some experience with it so we decided to use
              the React abstraction. Although React is nice and makes some
              things easier it did cause us a lot of headaches. First, it has
              its own rules and one must learn those rules to work effectively.
              Why <strong>is</strong> this component re-rendering? Why{" "}
              <strong>won't</strong> this component re-render!?
            </p>
            <p>
              In an attempt to stay DRY, we reused many components. For example,
              our "popup", the modal that appears when you click on a past or
              future request in the sidebar, is just the same form with the same
              combination of components as the main app page. These things have
              state living in various places, yet the form on the main app page
              needs to behave differently than the same form in the popup.
              Managing these state issues amongst identical components yet
              achieving different behavior dependent upon this state was
              probably the largest source of our headaches. Our app doesn't
              appear that complicated on the frontend but because of this
              twins-like nature of our components, it was a little tricky to
              deal with.
            </p>
            <p>
              In terms of components we played around and employed a few
              different patterns. Sometimes we used plain old function
              components, sometimes class components, sometimes hooks, and we
              also implemented some higher order components in order to share
              some behavior amongst components.
            </p>
            <p>
              We all gained valuable experience working with React and working
              through the challenges it can sometimes impose. There's a lot of
              ways to skin a cat in React and we tried our hands at several of
              them.
            </p>
          </Row>

          <Row id="asynchroncity">
            <Badge className="step" variant="info">
              Asynchroncity
            </Badge>
          </Row>
          <Row>
            <p>
              <strong>TODO......</strong>What I have in mind here is discussing
              the challenges of ensuring that everything is happening when it is
              supposed to, and only after certain other things have happened.
              When we logged all 8 major steps of the process, from getting the
              request from the user, to storing it in DB, to sending it, to
              retrieving and consuming it on the frontend.
            </p>
          </Row>

          <Row id="datesTimes">
            <Badge className="step" variant="info">
              Dates and Times and Timezones, Oh My
            </Badge>
          </Row>
          <Row>
            <p>
              We could have chosen to work on anything but we just had to choose
              something involving dates and times{" "}
              <span role="img" aria-label="emoji">
                🤷‍♂️
              </span>
              . Still have to talk about this a little more.
              <strong>[TODO]</strong>.
            </p>
          </Row>

          <Row id="scheduling">
            <Badge className="step" variant="info">
              Scheduling Requests
            </Badge>
          </Row>
          <Row>
            <p>
              In concept, it's simple. In implementation, because dates, it was
              a little tricky to figure out. But basically we're using a{" "}
              <code>setInterval</code> function which runs another function
              about every 30 seconds. What that function does is query our{" "}
              <code>requests</code> table to see if there are any user requests
              that have a raw response that is <code>NULL</code>. A user request
              is just all the data stored from them submitting our main form. We
              filter those requests to see if any have a scheduled time that is
              later then the time now. Then we use Axios and generate some
              details for each request that needs to go out; our users can
              specify their own headers and parameters if they so choose, and
              they may have given us payload to send with their request as well.
            </p>
            <p>
              With more traffic, we'll refactor this by implementing a cron job.
            </p>
          </Row>

          <Row id="server">
            <Badge className="step" variant="info">
              Server Structure
            </Badge>
          </Row>
          <Row>
            <p>
              <strong>[question]</strong> Anything you guys want to say here?
            </p>
          </Row>

          <Row id="futureFeatures">
            <h2>Future Features</h2>
          </Row>
          <Row>
            <p>
              API-Q in its current form is really just a demonstration of our
              capabilities. It was meant to be fun project and one where we
              could explore and gain more experience with some particular
              technologies and perhaps also build something useful. It is a
              minimum viable product in terms of features. A user can send some
              requests now and schedule some requests for later. I we think
              we've packaged that up in a relatively intuitive implementation.
              But there are many features we're capable of adding in the future
              should warrant them.
            </p>
          </Row>

          <Row id="recurringRequests">
            <Badge className="step" variant="info">
              Scheduling Recurring Requests
            </Badge>
          </Row>
          <Row>
            <p>
              A user can currently only schedule a request for a single point in
              the future. It'd be nice to let them send one, say, every Tuesday
              at 6pm CST.
            </p>
          </Row>

          <Row id="moreTimeZones">
            <Badge className="step" variant="info">
              More Timezones
            </Badge>
          </Row>
          <Row>
            <p>
              We currently support five timezones in the U.S. We'd expand this
              to cover all timezones.
            </p>
          </Row>

          <Row id="userScripts">
            <Badge className="step" variant="info">
              User-Provided Scripts
            </Badge>
          </Row>
          <Row>
            <p>
              A user can send a request now or schedule one for later, but it'd
              be nice to let them also upload a script of their writing that
              executes at the time we receive a response to their request.
              Perhaps their code could perform some processing and then hit
              another endpoing they control, or perhaps some other third party
              API.
            </p>
          </Row>

          <Row id="cronJob">
            <Badge className="step" variant="info">
              Cron Job Scheduling
            </Badge>
          </Row>
          <Row>
            <p>
              Right now we're using a <code>setInterval</code> function on our
              main server to handle checking for and sending future scheduled
              requests. With more user traffic, it would make sense break out
              this functionality with a cron job operating on a separate server.
            </p>
          </Row>

          <Row id="testing">
            <Badge className="step" variant="info">
              Testing Suite
            </Badge>
          </Row>
          <Row>
            <p>
              We should have a testing suite. And if we go any further than this
              MVP it's one of the first things we should do.
            </p>
          </Row>

          <Row id="settings">
            <Badge className="step" variant="info">
              Settings
            </Badge>
          </Row>
          <Row>
            <p>
              Right now a user can sign up and therefore sign in any time to see
              requests associated with their account. But we expect 99% of
              visitors to "skip sign up" and simply play with a demo account we
              generate and pre-populate with some requests for them to view.
              Later we'd implement a settings page where a user can at a minimum
              change their email and/or password.
            </p>
          </Row>

          <Row id="email">
            <Badge className="step" variant="info">
              Email Sending
            </Badge>
          </Row>
          <Row>
            <p>
              We would implement email sending for forgotten passwords and any
              notifications a user indicates they want to receive, perhaps when
              a request is sent on their behalf or if a response is received for
              one of their requests.
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Docs;
