import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css';

import DoctorImage from '../assets/images/doctor-image.jpg';

const Hero = () => {
    return (
        <section className="hero-section py-5">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="text-left">
                        <p className="text-primary mb-2">Welcome</p>
                        <h1 className="display-4 font-weight-bold">Online Appointment</h1>
                        <p className="lead">Medical Functional is most focused in helping you discover your most beautiful smile</p>
                        <div className="button-group mt-4">
                            <Button variant="primary" className="mr-3">Get Quote Now</Button>
                            <Button variant="outline-primary">Learn More</Button>
                        </div>
                    </Col>

                    <Col md={6} className="text-center">
                        <div className="hero-image">
                            <img src={DoctorImage} alt="Doctor" className="img-fluid rounded" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
