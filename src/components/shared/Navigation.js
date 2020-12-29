import React from "react";
import { Nav, Navbar, Image, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = (props) => (
  <Container style={{backgroundColor: "rgba(0,0,0,0)"}} className="pt-3 nav-container">
    <Row className="justify-content-center mb-">
      <Navbar className="flex-column">
        <div className="logo mb-3">
          <Link to="/">
            <Image width={70} src="images/apiq-logo-full.svg" />
          </Link>
        </div>
      
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-style">
            {props.loggedIn === "true" && (
              <Nav.Link className="pr-3 pl-3 pt-2 pb-2 text-dark h5" as={Link} to="/app">
                App
              </Nav.Link>
            )}

            <Nav.Link className="pr-3 pl-3 pt-2 pb-2 text-dark h5 active" as={Link} to="/docs">
              Docs
            </Nav.Link>
            <Nav.Link className="pr-3 pl-3 pt-2 pb-2 text-dark h5" as={Link} to="/team">
              Team
            </Nav.Link>
            {props.loggedIn === "false" && (
              <Nav.Link className="pr-3 pl-3 pt-2 pb-2 text-dark h5" as={Link} to="/login">
                Log in
              </Nav.Link>
            )}
            {props.loggedIn === "false" && (
              <Nav.Link className="pr-3 pl-3 pt-2 pb-2 text-dark h5" as={Link} to="/signup">
                Sign up
              </Nav.Link>
            )}
            {props.loggedIn === "true" && (
              <Nav.Link
                className="pr-3 pl-3 pt-2 pb-2 text-dark h5"
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
