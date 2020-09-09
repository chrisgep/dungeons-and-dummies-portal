import {Nav, Navbar, Image, NavDropdown} from 'react-bootstrap';
import React, {Container} from 'react';
import './appnav.scss';

function AppNav(props) {
    
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Image className={`logo offset-lg-1 mr-5`} src={require(`../../images/logo.png`)} fluid />
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