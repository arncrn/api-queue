import React from "react";
import { Nav, Navbar, Image, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = (props) => (
  <Container style={{backgroundColor: "rgba(0,0,0,0)"}} className="pt-3">
    <Row className="justify-content-center mb-">
      <Navbar className="flex-column">
        <div className="logo mb-3">
          <Link to="/">
            <Image width={70} src="images/apiq-logo-full.svg" />
          </Link>
        </div>
      
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {props.loggedIn === "true" && (
              <Nav.Link className="mr-1 text-dark font-weight-bold" as={Link} to="/app">
                App
              </Nav.Link>
            )}

            <Nav.Link className="mr-1 text-dark font-weight-bold" as={Link} to="/docs">
              Docs
            </Nav.Link>
            <Nav.Link className="mr-1 text-dark font-weight-bold" as={Link} to="/team">
              Team
            </Nav.Link>
            {props.loggedIn === "false" && (
              <Nav.Link className="mr-1 text-dark font-weight-bold" as={Link} to="/login">
                Log in
              </Nav.Link>
            )}
            {props.loggedIn === "false" && (
              <Nav.Link className="mr-1 text-dark font-weight-bold" as={Link} to="/signup">
                Sign up
              </Nav.Link>
            )}
            {props.loggedIn === "true" && (
              <Nav.Link
                className="mr-1 text-dark font-weight-bold"
                as={Link}
                to="/"
                onClick={props.logout}
              >
                Log Out
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  </Container>
);

export default Navigation;
