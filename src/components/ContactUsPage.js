// src/components/ContactUsPage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import './ContactUsPage.css'; // Import the CSS file

const ContactUsPage = () => {
    return (
        <div>
            <Container className="contact-us-container">
                <h2 className="contact-us-header">Contact Us</h2>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="contact-us-content">
                        <p>Email: <a href="mailto:contact@couponwebsite.com">contact@couponwebsite.com</a></p>
                        <p>Phone: +123 456 7890</p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default ContactUsPage;

