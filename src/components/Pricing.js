import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

const Pricing = () => {
    const pricingOptions = [
        { price: "$19", plan: "Basic Plan", features: ["Unlimited product updates", "Lifetime access", "Free support", "Unlimited product updates"] },
        { price: "$29", plan: "Standard Plan", features: ["Unlimited product updates", "Lifetime access", "Free support", "Unlimited product updates"] },
        { price: "$49", plan: "Premium Plan", features: ["Unlimited product updates", "Lifetime access", "Free support", "Unlimited product updates"] }
    ];

    return (
        <section className="pricing-section">
            <Container>
                <h2>Pricing</h2>
                <Row>
                    {pricingOptions.map((option, index) => (
                        <Col key={index} md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{option.plan}</Card.Title>
                                    <Card.Text>{option.price}</Card.Text>
                                    <ul>
                                        {option.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                    <Button variant="primary">Try for Free</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Pricing;
