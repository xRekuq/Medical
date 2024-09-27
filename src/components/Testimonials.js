import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Testimonials = () => {
    const testimonials = [
        { name: "John Doe", position: "CEO", quote: "This is the best medical service I've ever used.", rating: 5 },
        { name: "Jane Smith", position: "Designer", quote: "Excellent care and professional service.", rating: 4 },
        { name: "Robert Brown", position: "Developer", quote: "Highly recommended for anyone looking for quality medical care.", rating: 5 }
    ];

    return (
        <section className="testimonials-section">
            <Container>
                <h2>Each and every client is important</h2>
                <Row>
                    {testimonials.map((testimonial, index) => (
                        <Col key={index} md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Text>{testimonial.quote}</Card.Text>
                                    <Card.Subtitle>{testimonial.name}, {testimonial.position}</Card.Subtitle>
                                    <Card.Text>{"★".repeat(testimonial.rating)}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;
