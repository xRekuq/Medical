import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter-section py-5">
            <Container>
                <Row className="text-center mb-4">
                    <Col>
                        <h4 className="text-primary">Newsletter</h4>
                        <h2 className="display-5 font-weight-bold">JOIN US</h2>
                        <p className="lead">Problems trying to resolve the conflict between <br/> the two major realms of Classical physics: Newtonian mechanics</p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Form className="newsletter-form">
                            <Form.Group className="d-flex">
                                <Form.Control 
                                    type="email" 
                                    placeholder="Your Email" 
                                    className="newsletter-input"
                                />
                                <Button variant="primary" type="submit" className="subscribe-button">
                                    Subscribe
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Newsletter;
