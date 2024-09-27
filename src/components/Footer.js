import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer bg-light">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Company Info</h5>
                        <ul>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Blog</li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Legal</h5>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Contact</h5>
                        <p>Email: support@medicalfunc.com</p>
                        <p>Phone: +123-456-7890</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
