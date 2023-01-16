import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import HeaderLogo from "../Assets/images/headerlogo.svg";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

function Header() {
  return (
    <section id="header" className="main-padding">
      <Navbar className="navbar-dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <Image src={HeaderLogo} fluid alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About us</Nav.Link>
              <Nav.Link href="#action2">How it Works</Nav.Link>
              <Nav.Link href="#action2">Blog</Nav.Link>
              <Nav.Link href="#action2">Refer a Friend</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="header-login-btn">
        <Button variant="primary">Login</Button>
      </div>
    </section>
  );
}

export default Header;
