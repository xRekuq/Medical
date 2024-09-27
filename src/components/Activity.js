import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Activity.css';

import EmergencyIcon from '../assets/images/emergency-icon.png';
import HealthIcon from '../assets/images/health-icon.png';
import ProcedureIcon from '../assets/images/procedure-icon.png';

const Activity = () => {
    const activities = [
        { 
            title: "Emergency Case", 
            description: "The gradual accumulation of information about", 
            icon: EmergencyIcon
        },
        { 
            title: "Health Queries", 
            description: "The gradual accumulation of information about", 
            icon: HealthIcon
        },
        { 
            title: "Painless procedures", 
            description: "The gradual accumulation of information about", 
            icon: ProcedureIcon
        }
    ];

    return (
        <section className="activity-section py-5">
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 0 }} className="mb-5 text-left">
                        <h4 className="text-primary mb-2">Practice Advice</h4>
                        <h2 className="display-5 font-weight-bold">Our Activity</h2>
                        <p className="lead">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                    </Col>
                </Row>
                <Row>
                    {activities.map((activity, index) => (
                        <Col key={index} md={4} className="mb-4">
                            <Card className="text-center h-100 shadow-sm">
                                <Card.Body>
                                    <div className="activity-icon mb-3">
                                        <img src={activity.icon} alt={activity.title} className="img-fluid" />
                                    </div>
                                    <Card.Title className="font-weight-bold">{activity.title}</Card.Title>
                                    <hr className="activity-divider" />
                                    <Card.Text>{activity.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Activity;
