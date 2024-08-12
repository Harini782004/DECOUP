// src/components/SuggestionPage.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import Footer from './Footer';
import './SuggestionPage.css'; // Import the custom CSS

const suggestedCoupons = [
    { id: 1, title: 'Frequent Coupon 1', description: 'Description for Frequent Coupon 1', imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.OTF1WnyIKuGlyUIgD1A0QwHaFQ&pid=Api&P=0&h=180', code: 'COUPON1' },
    { id: 2, title: 'Frequent Coupon 2', description: 'Description for Frequent Coupon 2', imgSrc: 'https://i.pinimg.com/originals/1f/61/21/1f6121795359309e067f0657e42b3b70.jpg', code: 'COUPON2' },
    { id: 3, title: 'Frequent Coupon 3', description: 'Description for Frequent Coupon 3', imgSrc: 'https://tse2.mm.bing.net/th?id=OIP.HUFKajJ8B8rGbS8wqM7GQwHaDp&pid=Api&P=0&h=180', code: 'COUPON3' },
    { id: 4, title: 'Frequent Coupon 4', description: 'Description for Frequent Coupon 4', imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.3USd1zdaqyM1PPGpIVIlVQHaEK&pid=Api&P=0&h=180', code: 'COUPON4' },
    { id: 5, title: 'Frequent Coupon 5', description: 'Description for Frequent Coupon 5', imgSrc: 'https://th.bing.com/th/id/OIP.-rDvEF_c0CJRX4UOZEvZVwHaD4?pid=ImgDet&w=474&h=248&rs=0', code: 'COUPON5' },
    { id: 6, title: 'Frequent Coupon 6', description: 'Description for Frequent Coupon 6', imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.RLhKW5G5JBl7XRgWd37z4AHaD0&pid=Api&P=0&h=180', code: 'COUPON6' },
];

const SuggestionPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [copiedCode, setCopiedCode] = useState('');

    const handleCopyCode = (code) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(code);
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    return (
        <div className="suggestion-background">
            <Container className="mt-4 suggestion-container">
                <h2 className="text-center mb-4">Suggested Coupons</h2>
                <Row>
                    {suggestedCoupons.map(card => (
                        <Col key={card.id} md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={card.imgSrc} />
                                <Card.Body>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text>{card.description}</Card.Text>
                                    <Button variant="primary" onClick={() => handleCopyCode(card.code)}>
                                        Copy Code
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Code Copied</Modal.Title>
                </Modal.Header>
                <Modal.Body>Coupon code "{copiedCode}" has been copied to the clipboard!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default SuggestionPage;
