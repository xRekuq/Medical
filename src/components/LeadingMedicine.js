import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './LeadingMedicine.css';

import MedicineImage from '../assets/images/medicine-image.jpg';

const LeadingMedicine = () => {
    return (
        <section className="leading-medicine-section py-5">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="text-left">
                        <hr className="title-underline" />
                        <h2 className="display-5 font-weight-bold">Leading Medicine</h2>
                        <p className="lead" >Problems trying to resolve the conflict between
                            <br/>
                        the two major realms of Classical physics:
                        <br/>
                        Newtonian mechanics</p>
                        <Button variant="link" className="learn-more-btn mt-4">Learn More &rarr;</Button>
                    </Col>
                    <Col md={6} className="text-right">
                        <div className="medicine-image-container">
                            <img src={MedicineImage} alt="Medicine" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default LeadingMedicine;
