import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavbarComponent() {
  return (
    <Navbar bg="primary" variant="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#inicio">
          <i className="bi bi-pc-display-horizontal me-2"></i>
          PC ANDES
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#caracteristicas">Características</Nav.Link>
            <Nav.Link href="#demo">Ver DEMO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
