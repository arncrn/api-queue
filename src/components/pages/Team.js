import React from "react";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";

const Team = () => (
  <Container className="container-style pb-5">
    <Row className="pt-5">
      <Col md={{ span: 6, offset: 3 }} className="text-center">
        <h2>Meet the Team</h2>
        <p className="mt-3">
          Our remote team of three worked together to build API-Q. We are
          looking for our next opportunity and would love to hear from you! Please get in touch if you think we'd be a good fit for your team.
        </p>
      </Col>
    </Row>
    <Row className="d-flex justify-content-center pb-5">
      <CardDeck className="mt-4 mw-75">
        <Card style={{ width: "15rem" }} className="text-center">
          <Card.Img height={238} width={238} variant="top" src="images/ryan-schaul.jpg" />

          <Card.Body>
            <Card.Title className="mb-3">Ryan Schaul</Card.Title>
            <Card.Subtitle className="mb-4 text-muted">
              Software Engineer
              <div>Chicago, IL</div>
            </Card.Subtitle>

            <Card.Link href="mailto:rschaul@gmail.com">email</Card.Link>
            <Card.Link
              href="https://www.linkedin.com/in/ryan-schaul-87a922b5/"
              target="_blank"
            >
              linkedin
            </Card.Link>
            <Card.Link href="https://github.com/ryanschaul" target="_blank">
              github
            </Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }} className="text-center">
          <Card.Img height={238} width={238} variant="top" src="images/aaron-crane.png" />

          <Card.Body>
            <Card.Title className="mb-3">Aaron Crane</Card.Title>
            <Card.Subtitle className="mb-4 text-muted">
              Software Engineer
              <div>San Francisco, CA</div>
            </Card.Subtitle>

            <Card.Link href="mailto:aaron@duodreamers.com">email</Card.Link>
            <Card.Link
              href="https://www.linkedin.com/in/aaron-crane-a889a221/"
              target="_blank"
            >
              linkedin
            </Card.Link>
            <Card.Link href="https://github.com/arncrn" target="_blank">
              github
            </Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }} className="text-center">
          <Card.Img height={238} width={238} variant="top" src="images/justin-zeng.jpg" />

          <Card.Body>
            <Card.Title className="mb-3">Justin Zeng</Card.Title>
            <Card.Subtitle className="mb-4 text-muted">
              Software Engineer
              <div>Los Angeles, CA</div>
            </Card.Subtitle>

            <Card.Link href="mailto:hi.justinzeng@gmail.com">email</Card.Link>
            <Card.Link
              href="https://www.linkedin.com/in/justin-zeng-6a68b3153/"
              target="_blank"
            >
              linkedin
            </Card.Link>
            <Card.Link href="https://github.com/jzeng88" target="_blank">
              github
            </Card.Link>
          </Card.Body>
        </Card>
      </CardDeck>
    </Row>
  </Container>
);

export default Team;
