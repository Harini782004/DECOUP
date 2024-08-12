import React, { useState } from 'react';
import { Button, Modal, ListGroup, Container, Row, Col } from 'react-bootstrap';
import './SearchPage.css'; // Import the custom CSS for styling

const platforms = ['Amazon', 'Myntra', 'Ajio', 'Zomato'];

const coupons = {
    Amazon: [
        { id: 1, title: 'Amazon Coupon 1', description: '10% off on electronics', code: 'AMZ10' },
        { id: 2, title: 'Amazon Coupon 2', description: '5% off on books', code: 'AMZ05' },
        { id: 3, title: 'Amazon Coupon 3', description: '15% off on clothing', code: 'AMZ15' },
        { id: 4, title: 'Amazon Coupon 4', description: '20% off on shoes', code: 'AMZ20' },
        { id: 5, title: 'Amazon Coupon 5', description: '25% off on home appliances', code: 'AMZ25' },
        { id: 6, title: 'Amazon Coupon 6', description: '10% off on groceries', code: 'AMZ10G' },
        { id: 7, title: 'Amazon Coupon 7', description: '30% off on beauty products', code: 'AMZ30' },
        { id: 8, title: 'Amazon Coupon 8', description: '40% off on fashion', code: 'AMZ40' },
        { id: 9, title: 'Amazon Coupon 9', description: '15% off on electronics', code: 'AMZ15E' },
        { id: 10, title: 'Amazon Coupon 10', description: '5% off on sports equipment', code: 'AMZ5S' },
        { id: 11, title: 'Amazon Coupon 11', description: '20% off on kitchenware', code: 'AMZ20K' },
        { id: 12, title: 'Amazon Coupon 12', description: '25% off on furniture', code: 'AMZ25F' },
    ],
    Myntra: [
        { id: 1, title: 'Myntra Coupon 1', description: '20% off on clothing', code: 'MYN20' },
        { id: 2, title: 'Myntra Coupon 2', description: '15% off on shoes', code: 'MYN15' },
        { id: 3, title: 'Myntra Coupon 3', description: '10% off on accessories', code: 'MYN10' },
        { id: 4, title: 'Myntra Coupon 4', description: '25% off on fashion', code: 'MYN25' },
        { id: 5, title: 'Myntra Coupon 5', description: '30% off on beauty products', code: 'MYN30' },
        { id: 6, title: 'Myntra Coupon 6', description: '35% off on kids wear', code: 'MYN35' },
        { id: 7, title: 'Myntra Coupon 7', description: '40% off on home decor', code: 'MYN40' },
        { id: 8, title: 'Myntra Coupon 8', description: '45% off on watches', code: 'MYN45' },
        { id: 9, title: 'Myntra Coupon 9', description: '50% off on bags', code: 'MYN50' },
        { id: 10, title: 'Myntra Coupon 10', description: '5% off on electronics', code: 'MYN5E' },
        { id: 11, title: 'Myntra Coupon 11', description: '20% off on furniture', code: 'MYN20F' },
        { id: 12, title: 'Myntra Coupon 12', description: '25% off on kitchenware', code: 'MYN25K' },
    ],
    Ajio: [
        { id: 1, title: 'Ajio Coupon 1', description: '25% off on fashion', code: 'AJIO25' },
        { id: 2, title: 'Ajio Coupon 2', description: '10% off on accessories', code: 'AJIO10' },
        { id: 3, title: 'Ajio Coupon 3', description: '20% off on electronics', code: 'AJIO20' },
        { id: 4, title: 'Ajio Coupon 4', description: '30% off on shoes', code: 'AJIO30' },
        { id: 5, title: 'Ajio Coupon 5', description: '35% off on beauty products', code: 'AJIO35' },
        { id: 6, title: 'Ajio Coupon 6', description: '40% off on kids wear', code: 'AJIO40' },
        { id: 7, title: 'Ajio Coupon 7', description: '45% off on home decor', code: 'AJIO45' },
        { id: 8, title: 'Ajio Coupon 8', description: '50% off on watches', code: 'AJIO50' },
        { id: 9, title: 'Ajio Coupon 9', description: '55% off on bags', code: 'AJIO55' },
        { id: 10, title: 'Ajio Coupon 10', description: '60% off on fashion', code: 'AJIO60' },
        { id: 11, title: 'Ajio Coupon 11', description: '5% off on electronics', code: 'AJIO5E' },
        { id: 12, title: 'Ajio Coupon 12', description: '20% off on furniture', code: 'AJIO20F' },
    ],
    Zomato: [
        { id: 1, title: 'Zomato Coupon 1', description: '50% off on food', code: 'ZOM50' },
        { id: 2, title: 'Zomato Coupon 2', description: '20% off on delivery', code: 'ZOM20' },
        { id: 3, title: 'Zomato Coupon 3', description: '30% off on first order', code: 'ZOM30' },
        { id: 4, title: 'Zomato Coupon 4', description: '25% off on desserts', code: 'ZOM25' },
        { id: 5, title: 'Zomato Coupon 5', description: '15% off on drinks', code: 'ZOM15' },
        { id: 6, title: 'Zomato Coupon 6', description: '10% off on snacks', code: 'ZOM10' },
        { id: 7, title: 'Zomato Coupon 7', description: '5% off on dinners', code: 'ZOM5' },
        { id: 8, title: 'Zomato Coupon 8', description: '35% off on lunch', code: 'ZOM35' },
        { id: 9, title: 'Zomato Coupon 9', description: '40% off on breakfast', code: 'ZOM40' },
        { id: 10, title: 'Zomato Coupon 10', description: '45% off on brunch', code: 'ZOM45' },
        { id: 11, title: 'Zomato Coupon 11', description: '20% off on late-night orders', code: 'ZOM20N' },
        { id: 12, title: 'Zomato Coupon 12', description: '25% off on fast food', code: 'ZOM25F' },
    ],
};

const SearchPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedPlatform, setSelectedPlatform] = useState('');
    const [showCoupons, setShowCoupons] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => {
        setShowModal(false);
        setShowCoupons(false);
    };

    const handlePlatformClick = (platform) => {
        setSelectedPlatform(platform);
        setShowCoupons(true);
        setShowModal(false);
    };

    return (
        <Container>
            <h1 className="text-center mt-4">Search Coupons</h1>
            <Button variant="primary" onClick={handleShowModal}>Select Platform</Button>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Select a Platform</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        {platforms.map((platform) => (
                            <ListGroup.Item
                                key={platform}
                                action
                                onClick={() => handlePlatformClick(platform)}
                            >
                                {platform}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {showCoupons && (
                <div className="mt-4">
                    <h2>{selectedPlatform} Coupons</h2>
                    <Row>
                        {coupons[selectedPlatform]?.map((coupon) => (
                            <Col key={coupon.id} md={4} className="mb-4">
                                <div className="coupon-card">
                                    <h4>{coupon.title}</h4>
                                    <p>{coupon.description}</p>
                                    <strong>Code: {coupon.code}</strong>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
        </Container>
    );
};

export default SearchPage;
