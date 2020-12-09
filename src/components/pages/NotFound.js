import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const NotFound = () => (
  <Container className="container-style">
    <Row className="pt-5 pb-5">
      <Col md={{ span: 6, offset: 3 }} className="text-center">
        <h2>Oops, something went wrong!</h2>
        <p className="mt-3">
          Unfortunately you have found a 404 error page, which means the page you were looking for was moved, removed, or might never existed.
        </p>
        <Image src={require("../../404.png")} fluid />
      </Col>
    </Row>
  </Container>
);

export default NotFound;
