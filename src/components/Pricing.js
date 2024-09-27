import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Pricing.css'; // Import custom CSS for additional styling

// Import icon image
import HeartIcon from '../assets/images/heart-empty-icon.png';
import CheckmarkIcon from '../assets/images/checkmark.png';
import GrayCheckmarkIcon from '../assets/images/gray-checkmark.png';


const Pricing = () => {
    const pricingPlans = [
        {
            title: "FREE",
            price: "19$",
            short_description: "Organize across all apps by hand",
            features: [
                "Unlimited product updates",
                "Unlimited product updates",
                "Unlimited product updates",
                "1GB Cloud storage",
                "Email and community support"
            ],
            description: "Slate helps you see how many more days you need...",
            isNew: false,
        },
        {
            title: "FREE",
            price: "19$",
            short_description: "Organize across all apps by hand",
            features: [
                "Unlimited product updates",
                "Unlimited product updates",
                "Unlimited product updates",
                "1GB Cloud storage",
                "Email and community support"
            ],
            description: "Slate helps you see how many more days you need...",
            isNew: true,
        },
        {
            title: "FREE",
            price: "19$",
            short_description: "Organize across all apps by hand",
            features: [
                "Unlimited product updates",
                "Unlimited product updates",
                "Unlimited product updates",
                "1GB Cloud storage",
                "Email and community support"
            ],
            description: "Slate helps you see how many more days you need...",
            isNew: false,
        },
    ];

    return (
        <section className="pricing-section py-5">
            <Container>
                <Row className="mb-4">
                    <Col md={8} className="text-left">
                        <h4 className="text-primary">Practice Advice</h4>
                        <h2 className="display-5 font-weight-bold">Pricing</h2>
                        <p className="lead">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                    </Col>
                </Row>
                <Row>
                    {pricingPlans.map((plan, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <Card className="pricing-card text-center">
                                <div className="icon-container">
                                    <img src={HeartIcon} alt="Heart" className="pricing-icon" />
                                </div>
                                <Card.Body>
                                    <h4 className="font-weight-bold">{plan.title}</h4>
                                    <p className="short-description font-weight-bold text-left">{plan.short_description}</p>
                                    <h2 className="pricing-price text-primary">
                                        {plan.price}
                                        <br/>    
                                        <span className="per-month text-primary">Per Month</span>
                                    </h2>
                                    <p className="description font-weight-bold text-left">{plan.description}</p>
                                    <Button variant="primary" className="pricing-button">Try for free</Button>
                                    <ul className="list-unstyled mt-4">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="mb-2">
                                                <img 
                                                    src={i >= plan.features.length - 2 ? GrayCheckmarkIcon : CheckmarkIcon} 
                                                    alt="checkmark" 
                                                    className="checkmark-icon"
                                                /> 
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                                {plan.isNew && <div className="new-badge">New</div>}
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Pricing;
