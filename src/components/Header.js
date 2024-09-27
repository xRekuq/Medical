import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className="px-3">
            <Container>
                <Navbar.Brand href="#home" className="font-weight-bold">MedicalFunc</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="font-weight-bold">Home</Nav.Link>
                        <Nav.Link href="#product" className="font-weight-bold">Product</Nav.Link>
                        <Nav.Link href="#pricing" className="font-weight-bold">Pricing</Nav.Link>
                        <Nav.Link href="#contact" className="font-weight-bold">Contact</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Button variant="link" className="login-btn mr-2">Login</Button>
                        <Button variant="primary">Join Us</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
