import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Testimonials.css';

import StarRating from '../assets/images/star-rating.png'; 

import Reviewer1 from '../assets/images/reviewer1.png';
import Reviewer2 from '../assets/images/reviewer2.png';
import Reviewer3 from '../assets/images/reviewer3.png';

const Testimonials = () => {
    const testimonials = [
        {
            image: Reviewer1,
            name: "Regina Miles",
            title: "Designer",
            review: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
        },
        {
            image: Reviewer2,
            name: "Regina Miles",
            title: "Designer",
            review: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
        },
        {
            image: Reviewer3,
            name: "Regina Miles",
            title: "Designer",
            review: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
        },
    ];

    return (
        <section className="testimonials-section py-5">
            <Container>
                <Row className="mb-4">
                    <Col md={8} className="text-left">
                        <h4 className="text-primary">Practice Advice</h4>
                        <h2 className="display-5 font-weight-bold">Each and every client is important</h2>
                        <p className="lead">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                    </Col>
                </Row>
                <Row>
                    {testimonials.map((testimonial, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <div className="testimonial-card text-center">
                                <img src={StarRating} alt="Star Rating" className="star-rating" />
                                <p className="review-text">{testimonial.review}</p>
                                <div className="reviewer-info">
                                    <img src={testimonial.image} alt={testimonial.name} className="reviewer-image" />
                                    <div>
                                        <h5 className="reviewer-name text-primary">{testimonial.name}</h5>
                                        <p className="reviewer-title">{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;
