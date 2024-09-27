import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

// Import images
import PhoneIcon from '../assets/images/phone.png';
import EnvelopeIcon from '../assets/images/envelope.png';
import MapMarkerIcon from '../assets/images/map-marker.png';
import FbIcon from '../assets/images/fb.png';
import IgIcon from '../assets/images/ig.png';
import TwitterIcon from '../assets/images/twitter.png';

const Footer = () => {
    return (
        <footer className="footer-section">
            <Container>
                <Row className="mb-4">
                    <Col md={2}>
                        <h5>Company Info</h5>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>Carrier</li>
                            <li>We are hiring</li>
                            <li>Blog</li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h5>Legal</h5>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>Carrier</li>
                            <li>We are hiring</li>
                            <li>Blog</li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h5>Features</h5>
                        <ul className="list-unstyled">
                            <li>Business Marketing</li>
                            <li>User Analytic</li>
                            <li>Live Chat</li>
                            <li>Unlimited Support</li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h5>Resources</h5>
                        <ul className="list-unstyled">
                            <li>IOS & Android</li>
                            <li>Watch a Demo</li>
                            <li>Customers</li>
                            <li>API</li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Get In Touch</h5>
                        <ul className="list-unstyled contact-info">
                            <li><img src={PhoneIcon} alt="Phone" className="contact-icon" /> (480) 555-0103</li>
                            <li><img src={MapMarkerIcon} alt="Map Marker" className="contact-icon" /> 4517 Washington Ave. Manchester, <br/>Kentucky 39495</li>
                            <li><img src={EnvelopeIcon} alt="Envelope" className="contact-icon" /> debra.holt@example.com</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="footer-bottom align-items-center">
                    <Col md={6} className="text-left">
                        <p className="mb-0">Made With Love By Figmaland All Right Reserved</p>
                    </Col>
                    <Col md={6} className="text-right">
                        <div className="social-icons">
                            <img src={FbIcon} alt="Facebook" className="social-icon" />
                            <img src={IgIcon} alt="Instagram" className="social-icon" />
                            <img src={TwitterIcon} alt="Twitter" className="social-icon" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
