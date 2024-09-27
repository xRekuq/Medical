import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Doctors.css';

import Doctor1 from '../assets/images/doctor1.jpg';
import Doctor2 from '../assets/images/doctor2.jpg';
import Doctor3 from '../assets/images/doctor3.jpg';

import HeartIcon from '../assets/images/heart-icon.png';
import CartIcon from '../assets/images/cart-icon.png';
import EyeIcon from '../assets/images/eye-icon.png';

const Doctors = () => {
    const doctors = [
        { 
            id: 1, 
            name: "Graphic Design", 
            department: "English Department", 
            image: Doctor1, 
            sales: 15, 
            price: "$16.48", 
            discountedPrice: "$6.48", 
            rating: 4.9, 
            duration: "22hr 30min", 
            lessons: 64, 
            progress: "Progress" 
        },
        { 
            id: 2, 
            name: "Graphic Design", 
            department: "English Department", 
            image: Doctor2, 
            sales: 15, 
            price: "$16.48", 
            discountedPrice: "$6.48", 
            rating: 4.9, 
            duration: "22hr 30min", 
            lessons: 64, 
            progress: "Progress" 
        },
        { 
            id: 3, 
            name: "Graphic Design", 
            department: "English Department", 
            image: Doctor3, 
            sales: 15, 
            price: "$16.48", 
            discountedPrice: "$6.48", 
            rating: 4.9, 
            duration: "22hr 30min", 
            lessons: 64, 
            progress: "Progress" 
        }
    ];

    return (
        <section className="doctors-section py-5">
            <Container>
                <Row className="mb-4">
                    <Col md={8} className="text-left">
                        <h4 className="text-primary">Practice Advice</h4>
                        <h2 className="display-5 font-weight-bold">Our Doctors Specialize in you</h2>
                        <p className="lead bold-text">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                    </Col>
                </Row>
                <Row>
                    {doctors.map((doctor) => (
                        <Col md={4} key={doctor.id} className="mb-4">
                            <div className="doctor-profile">
                                <div className="image-container">
                                    <img src={doctor.image} alt={doctor.name} className="img-fluid doctor-image" />
                                    <div className="sale-badge">Sale</div>
                                    <div className="overlay-icons">
                                        <div className="icon" style={{ backgroundImage: `url(${HeartIcon})` }}></div>
                                        <div className="icon" style={{ backgroundImage: `url(${CartIcon})` }}></div>
                                        <div className="icon" style={{ backgroundImage: `url(${EyeIcon})` }}></div>
                                    </div>
                                </div>
                                <div className="doctor-details">
                                    <div className="department text-primary">{doctor.department}</div>
                                    <div className="doctor-name font-weight-bold">{doctor.name}</div>
                                    <div className="description">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</div>
                                    <div className="sales-info">
                                        <i className="fas fa-shopping-cart"></i> {doctor.sales} Sales
                                    </div>
                                    <div className="pricing">
                                        <span className="original-price">{doctor.price}</span> 
                                        <span className="discounted-price text-success">{doctor.discountedPrice}</span>
                                    </div>
                                    <div className="rating">
                                        <i className="fas fa-star text-warning"></i> {doctor.rating}
                                    </div>
                                    <div className="course-details">
                                        <span><i className="far fa-clock"></i> {doctor.duration}</span>
                                        <span><i className="far fa-file-alt"></i> {doctor.lessons} Lessons</span>
                                        <span><i className="far fa-check-circle"></i> {doctor.progress}</span>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Button variant="outline-primary">Learn More &rarr;</Button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Doctors;
