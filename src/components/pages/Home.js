import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => (
  <Container className="container-style pb-5">
    <Row className="pt-5">
      <Col 
      lg={{ span: 6, offset: 3 }}
      md={{ span: 8, offset: 2 }}
      sm={{ span: 10, offset: 1 }}
      xs={{ span: 10, offset: 1 }}
      className="text-center">
        <h2>Schedule a request at a later time</h2>
        <p className="mt-3">
          Request queue helps you schedule HTTP requests for later, without
          servers, DevOps, or infrastructure
        </p>
        <Button as={Link} to={"/signup"} className="mt-3">
          Try it now
        </Button>
      </Col>
    </Row>

    <Row className="mt-5">
      <Col
        xs={{ span: 10, offset: 1 }}
        className="shadow p-3 mb-5 bg-white rounded"
      >
        <Image src="images/api-q-app.png" fluid />
      </Col>
    </Row>

    <Row className="mt-5 pb-3" md={8}>
      <Col xs={{ span: 9, offset: 1 }}>
        <h2>Features</h2>

        <Row className="mt-5">
          <Col md={{ span: 5, offset: 1 }}>
            <Row>
              {/* https://icons.getbootstrap.com/icons/emoji-laughing/ */}
              <Col md={2} className="mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-device-desktop"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="#000000"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="3" y="4" width="18" height="12" rx="1" />
                  <line x1="7" y1="20" x2="17" y2="20" />
                  <line x1="9" y1="16" x2="9" y2="20" />
                  <line x1="15" y1="16" x2="15" y2="20" />
                </svg>
              </Col>
              <Col>
                <h4>API Client</h4>
                <p>
                  Easily send RESTful HTTP requests and view responses within
                  your dashboard. GET, POST, DELETE, PUT, and PATCH are supported. Create any custom headers and parameters you need and send any payload if applicable.
                </p>
              </Col>
            </Row>
          </Col>

          <Col md={{ span: 5, offset: 1 }}>
            <Row>
              {/* https://icons.getbootstrap.com/icons/emoji-laughing/ */}
              <Col md={2} className="mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-table"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="#000000"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <line x1="4" y1="10" x2="20" y2="10" />
                  <line x1="10" y1="4" x2="10" y2="20" />
                </svg>
              </Col>
              <Col>
                <h4>Workspace</h4>
                <p>
                  Schedule, monitor, and test your APIs within a single
                  dashboard.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={{ span: 5, offset: 1 }}>
            <Row>
              {/* https://icons.getbootstrap.com/icons/emoji-laughing/ */}
              <Col md={2} className="mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-database"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="#000000"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
                  <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
                  <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
                </svg>
              </Col>
              <Col>
                <h4>Logs</h4>
                <p>
                  Keep track of past and future HTTP requests for viewing at a
                  later time.
                </p>
              </Col>
            </Row>
          </Col>

          <Col md={{ span: 5, offset: 1 }}>
            <Row>
              {/* https://icons.getbootstrap.com/icons/emoji-laughing/ */}
              <Col md={2} className="mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-fingerprint"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="#000000"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3" />
                  <path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6" />
                  <path d="M12 11v2a14 14 0 0 0 2.5 8" />
                  <path d="M8 15a18 18 0 0 0 1.8 6" />
                  <path d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95" />
                </svg>
              </Col>
              <Col>
                <h4>Authentication</h4>
                <p>Support for basic authentication using HTTP headers.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
    
    <Row className="mt-5 pb-5" xs={8}>
      <Col xs={{ span: 10, offset: 1 }}>
        <h2>Use cases</h2>

        <Row className="mt-5">
          <Col md={{ span: 5 }} className="card-style p-4">
            <h4>Testing</h4>
            <p>Building API enpoints? Easily test these endpoints with API-Q to ensure they work as expected.</p>
          </Col>
          <Col md={{ span: 5 }} className="card-style p-4">
            <h4>Scheduling</h4>
            <p>Want to send an HTTP request but not right now, without having to set up a server to receive the response? Schedule HTTP requests and API-Q will send them at a later date and time as scheduled.</p>
          </Col>
        </Row>
        <Row className="use-cases-style">
          <Col md={{ span: 5 }} className="card-style p-4">
            <h4>Monitoring</h4>
            <p>Monitor the status of any future and past HTTP request.</p>
          </Col>
          <Col md={{ span: 5 }} className="card-style p-4">
            <h4>API-First Development</h4>
            <p>Build your API first without the need to setup an API client.</p>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Home;
