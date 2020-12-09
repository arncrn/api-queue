import React from "react";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";

const Team = () => (
  <Container className="container-style">
    <Row className="pt-5">
      <Col md={{ span: 6, offset: 3 }} className="text-center">
        <h2>Meet the Team</h2>
        <p className="mt-3">
          Our team of three built SpaceCraft by working together remotely across
          the United States. We are looking for our next opportunities! Please
          get in touch if you think we'd be a good fit for your team.
        </p>
      </Col>
    </Row>
    <Row className="d-flex justify-content-center pb-5">
      <CardDeck className="mt-5 mw-75">
        <Card style={{ width: "15rem" }} className="text-center">
          <Card.Img variant="top" src="holder.js/100px180" />

          <Card.Body>
            <Card.Title className="mb-3">Ryan Schaul</Card.Title>
            <Card.Subtitle className="mb-4 text-muted">
              Software Engineer
              <div>City, State</div>
            </Card.Subtitle>

            <Card.Text className="mb-4">
              <h6>Areas of Interest:</h6>
              <p>loremipsum</p>
              <h6>Fun Facts</h6>
              <p>loremipsum</p>
            </Card.Text>

            <Card.Link href="#">email</Card.Link>
            <Card.Link href="#">linkedin</Card.Link>
            <Card.Link href="#">github</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }} className="text-center">
          <Card.Img variant="top" src="holder.js/100px180" />

          <Card.Body>
            <Card.Title className="mb-3">Aaron Crane</Card.Title>
            <Card.Subtitle className="mb-4 text-muted">
              Software Engineer
              <div>City, State</div>
            </Card.Subtitle>

            <Card.Text className="mb-4">
              <h6>Areas of Interest:</h6>
              <p>loremipsum</p>
              <h6>Fun Facts</h6>
              <p>loremipsum</p>
            </Card.Text>

            <Card.Link href="#">email</Card.Link>
            <Card.Link href="#">linkedin</Card.Link>
            <Card.Link href="#">github</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }} className="text-center">
          <Card.Img variant="top" src="holder.js/100px180" />

          <Card.Body>
            <Card.Title className="mb-3">Justin Zeng</Card.Title>
            <Card.Subtitle className="mb-4 text-muted">
              Software Engineer
              <div>City, State</div>
            </Card.Subtitle>

            <Card.Text className="mb-4">
              <h6>Areas of Interest:</h6>
              <p>loremipsum</p>
              <h6>Fun Facts</h6>
              <p>loremipsum</p>
            </Card.Text>

            <Card.Link href="#">email</Card.Link>
            <Card.Link href="#">linkedin</Card.Link>
            <Card.Link href="#">github</Card.Link>
          </Card.Body>
        </Card>
      </CardDeck>
    </Row>
  </Container>
);

export default Team;
