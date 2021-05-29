import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Taste of Bangladesh</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <NavLink to="/" activeClassName="bg-danger" className="bg-white text-dark p-3 font-weight-bold rounded-lg">   
            Home
        </NavLink>
        <NavLink to="/about" activeClassName="bg-danger text-white" className="p-3 font-weight-bold text-dark rounded-lg">   
            About
        </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default NavBar;