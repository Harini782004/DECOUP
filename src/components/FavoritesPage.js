// src/components/FavoritesPage.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './FavoritesPage.css';

const FavoritesPage = () => {
    const [favoriteCoupons, setFavoriteCoupons] = useState([
        { id: 1, website: 'Amazon', code: 'AMAZON20', description: 'Get 20% off on Amazon purchases.', minPurchase: '$50', expiryDate: '31st Dec 2024' },
        { id: 2, website: 'Myntra', code: 'MYNTRA15', description: 'Get 15% off on Myntra orders.', minPurchase: '$40', expiryDate: '30th Nov 2024' },
        { id: 3, website: 'Ajio', code: 'AJIO25', description: 'Get 25% off on Ajio fashion.', minPurchase: '$60', expiryDate: '31st Jan 2025' },
        { id: 4, website: 'Zomato', code: 'ZOMATO30', description: 'Get 30% off on Zomato food orders.', minPurchase: '$20', expiryDate: '30th Sep 2024' },
    ]);

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code).then(() => {
            alert('Copied to clipboard');
        });
    };

    return (
        <div className="favorites-background">
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Col md="8">
                        <h2 className="text-center">Favorite Coupons</h2>
                        <Row className="mt-4">
                            {favoriteCoupons.map((coupon) => (
                                <Col md="4" key={coupon.id} className="mb-4">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{coupon.website}</Card.Title>
                                            <Card.Text>
                                                {coupon.description}
                                                <br />
                                                Minimum purchase: {coupon.minPurchase}
                                                <br />
                                                Expiry Date: {coupon.expiryDate}
                                            </Card.Text>
                                            <Button variant="primary" onClick={() => handleCopy(coupon.code)}>
                                                Copy Code: {coupon.code}
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FavoritesPage;