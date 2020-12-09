import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => (
  <Container className="container-style">
    <Row className="pt-5">
      <Col md={{ span: 6, offset: 3 }} className="text-center">
        <h2>Schedule a request at a later time</h2>
        <p className="mt-3">Request queue helps you schedule HTTP requests for later, without servers, DevOps, or infrastructure</p>
        <Button as={Link} to={"/signup"} className="mt-3">Get started now</Button>
      </Col>
    </Row>

    <Row className="mt-5">
      <Col md={{ span: 6, offset: 3 }}>
        <Image width={600} src="holder.js/171x180" fluid />
      </Col>
    </Row>

    <Row className="mt-5" md={8}>
      <Col md={{ span: 10, offset: 1 }}>
        <h2>Use request queue to</h2>
      
        <Row className="mt-5">
          <Col md={{ span: 5, offset: 1 }}>
            <h4>Timezone</h4>
            <p>Schedule jobs by using any time interval or cron expression.</p>
          </Col>
          <Col md={{ span: 5, offset: 1 }}>
            <h4>Timezone</h4>
            <p>Schedule jobs by using any time interval or cron expression.</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={{ span: 5, offset: 1 }}>
            <h4>Timezone</h4>
            <p>Schedule jobs by using any time interval or cron expression.</p>
          </Col>
          <Col md={{ span: 5, offset: 1 }}>
            <h4>Timezone</h4>
            <p>Schedule jobs by using any time interval or cron expression.</p>
          </Col>
        </Row>
      </Col>
    </Row>

    <Row className="mt-5 pb-5" md={8}>
      <Col md={{ span: 9, offset: 1 }}>
        <h2>Features</h2>
      
        <Row className="mt-5">
          <Col md={{ span: 5, offset: 1 }}>
            <Row>
              {/* https://icons.getbootstrap.com/icons/emoji-laughing/ */}
              <Col md={2} className="mr-4 pt-2">
              <svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-clock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"/>
  <path fillRule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
</svg>    
              </Col>
              <Col>
                <h4>Schedule</h4>
                <p>Schedule jobs by using any time interval or cron expression.</p>
              </Col>
            </Row>
          </Col>
          
          <Col md={{ span: 5, offset: 1 }}>
            <Row>
              {/* https://icons.getbootstrap.com/icons/emoji-laughing/ */}
              <Col md={2} className="mr-4 pt-2">
              <svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-globe2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539a8.372 8.372 0 0 1-1.198-.49 7.01 7.01 0 0 1 2.276-1.52 6.7 6.7 0 0 0-.597.932 8.854 8.854 0 0 0-.48 1.079zM3.509 7.5H1.017A6.964 6.964 0 0 1 2.38 3.825c.47.258.995.482 1.565.667A13.4 13.4 0 0 0 3.508 7.5zm1.4-2.741c.808.187 1.681.301 2.591.332V7.5H4.51c.035-.987.176-1.914.399-2.741zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5H7.5v2.409c-.91.03-1.783.145-2.591.332a12.343 12.343 0 0 1-.4-2.741zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696A12.63 12.63 0 0 1 7.5 11.91v3.014c-.67-.204-1.335-.82-1.887-1.855a7.776 7.776 0 0 1-.395-.872zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964a9.083 9.083 0 0 0-1.565.667A6.963 6.963 0 0 1 1.018 8.5h2.49a13.36 13.36 0 0 0 .437 3.008zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909c.81.03 1.577.13 2.282.287-.12.312-.252.604-.395.872-.552 1.035-1.218 1.65-1.887 1.855V11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5h-2.49a13.361 13.361 0 0 0-.437-3.008 9.123 9.123 0 0 0 1.565-.667A6.963 6.963 0 0 1 14.982 7.5zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343c-.705.157-1.473.257-2.282.287V1.077c.67.204 1.335.82 1.887 1.855.143.268.276.56.395.872z"/>
</svg>
              </Col>
              <Col>
                <h4>Timezone</h4>
                <p>Schedule jobs by using any time interval or cron expression.</p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={{ span: 5, offset: 1 }}>
            <Row>
              {/* https://icons.getbootstrap.com/icons/emoji-laughing/ */}
              <Col md={2} className="mr-4 pt-2">
              <svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-list-ol" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
  <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"/>
</svg>  
              </Col>
              <Col>
                <h4>Logs</h4>
                <p>Schedule jobs by using any time interval or cron expression.</p>
              </Col>
            </Row>
          </Col>
          
          <Col md={{ span: 5, offset: 1 }}>
            <Row>
              {/* https://icons.getbootstrap.com/icons/emoji-laughing/ */}
              <Col md={2} className="mr-4 pt-2">
              <svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-cloud" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
</svg>
              </Col>
              <Col>
                <h4>HTTP Methods</h4>
                <p>Schedule jobs by using any time interval or cron expression.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>


  </Container>
);

export default Home;
