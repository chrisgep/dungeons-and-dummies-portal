import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import React, {Container} from 'react';
import './appnav.scss';

function AppNav(props) {
    
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Dungeons And Dummies</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#race">Race</Nav.Link>
                <Nav.Link href="#class">Class</Nav.Link>
                <Nav.Link href="#background">Background</Nav.Link>
                <Nav.Link href="#spells">Spells</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">About Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
  }

export default AppNav;