import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaGooglePlay } from 'react-icons/fa';
import './Footer.css'; // Import the custom CSS for footer

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={3}>
                        <h4>Decoup</h4>
                        <h5>India’s Go-To for Coupons, Offers & Cashback</h5>
                    </Col>
                    <Col md={3}>
                        <h5>Help & Support</h5>
                        <ul>
                            <li><a href="#faqs">FAQs</a></li>
                            <li><a href="#how-it-works">How It Works</a></li>
                            <li><a href="#missing-cashback">Missing Cashback Claims</a></li>
                            <li><a href="#contact-us">Contact Us</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Decoup</h5>
                        <ul>
                            <li><a href="#about-us">About Us</a></li>
                            <li><a href="#press">Press</a></li>
                            <li><a href="#media">Media</a></li>
                            <li><a href="#list-your-business">List Your Business</a></li>
                            <li><a href="#privacy-policy">Privacy Policy</a></li>
                            <li><a href="#terms-conditions">Terms & Conditions</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Earning Programs & Benefits</h5>
                        <ul>
                            <li><a href="#shopping-assistant">Shopping Assistant</a></li>
                            <li><a href="#share-earn">Share & Earn</a></li>
                            <li><a href="#refer-earn">Refer & Earn</a></li>
                        </ul>
                        <div className="app-download">
                            <h6>Download App</h6>
                            <img src="link-to-qr-code.png" alt="QR code" className="qr-code" />
                        </div>
                        <div className="social-icons">
                            <FaFacebook className="social-icon" />
                            <FaTwitter className="social-icon" />
                            <FaInstagram className="social-icon" />
                            <FaGooglePlay className="social-icon" />
                        </div>
                    </Col>
                </Row>
                <Row className="footer-bottom">
                    <Col>
                        <p>© 2024 Bennett, Coleman & Co. Ltd. All rights reserved. | Indiatimes Commerce Network</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
