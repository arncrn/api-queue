import React from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = (props) => (
  <Navbar>
    <Navbar.Brand as={Link} to="/">
      <Image width={80} src={require("../../apiq-logo-full.svg")}/>
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { props.loggedIn === 'true' && <Nav.Link className="mr-1" as={Link} to="/app">App</Nav.Link>}

        <Nav.Link className="mr-1" as={Link} to="/docs">Docs</Nav.Link>
        <Nav.Link className="mr-1" as={Link} to="/team">Team</Nav.Link>
        {props.loggedIn === 'false' && <Nav.Link className="mr-1" as={Link} to="/login">Login</Nav.Link>}
        {props.loggedIn === 'false' && <Nav.Link className="mr-1" as={Link} to="/signup">Signup</Nav.Link>}
        {props.loggedIn === 'true' && <Nav.Link className="mr-1" as={Link} to="/" onClick={props.logout}>Log Out</Nav.Link>}
      </Nav>
    </Navbar.Collapse>
</Navbar>
);

export default Navigation;
