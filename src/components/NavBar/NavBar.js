import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import './NavBar.css'

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Taste of Bangladesh</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/" activeClassName="bg-orange" className="bg-white text-dark p-3 font-weight-bold rounded-lg">
              Home
            </NavLink>
            <NavLink to="/dashboard" activeClassName="bg-orange" className="bg-white text-dark p-3 font-weight-bold rounded-lg">
              Dashboard
            </NavLink>
            <NavLink to="/about" activeClassName="bg-orange text-white" className="p-3 font-weight-bold text-dark rounded-lg">
              About
            </NavLink>
            <NavLink to="/contact" activeClassName="bg-orange text-white" className="p-3 font-weight-bold text-dark rounded-lg">
              Contact
            </NavLink>
            <NavLink to="/yourOrder" activeClassName="bg-orange text-white" className="p-3 font-weight-bold text-dark rounded-lg">
              Your Order
            </NavLink>
            {
              loggedInUser.email ? <h4 className="bg-orange p-3 mx-3 rounded font-weight-bold text-white">{loggedInUser.name}</h4> :
                <NavLink to="/login" activeClassName="bg-orange text-white" className="p-3 font-weight-bold text-dark rounded-lg">
                  LogIn
              </NavLink>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;