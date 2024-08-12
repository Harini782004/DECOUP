import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import Footer from './Footer';
import './HomePage.css'; // Import the custom CSS

const carouselImages = [
    { id: 1, src: 'https://hindi.cdn.zeenews.com/hindi/sites/default/files/2021/06/30/860114-ajio.jpg', alt: 'First slide' },
    { id: 2, src: 'https://s3-img.pixpa.com/com/large/55219/1567225567-10168-couple-sitting-30x15-ft-unipole-01.jpg', alt: 'Second slide' },
    { id: 3, src: 'https://cdn.zoutons.com/images/originals/blog/1648892680413.jpg_1648892680.png', alt: 'Third slide' },
    { id: 4, src: 'https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png', alt: 'Fourth slide' }
];

const couponCards = [
    { id: 1, title: 'Coupon 1', description: 'Enjoy 50-70% off on a wide range of footwear. Grab your favorite pairs now!', code: 'FOOT50', imgSrc: 'https://couponbunnie.com/wp-content/uploads/2022/05/50-70-off-on-footwear-Instagram-Post-1-1536x1536.jpg' },
    { id: 2, title: 'Coupon 2', description: 'Get amazing deals on delicious meals at top restaurants. Don’t miss out!', code: 'MEAL20', imgSrc: 'https://b.zmtcdn.com/data/pictures/3/70393/1b7bc4665241d3b88f4272230384073f_featured_v2.jpg' },
    { id: 3, title: 'Coupon 3', description: 'Exclusive discount on Noise Colorfit Pro 4. Perfect smartwatch for your daily needs.', code: 'SMART15', imgSrc: 'https://couponbunnie.com/wp-content/uploads/2022/07/noise-colorfit-pro-4-front.jpg' },
    { id: 4, title: 'Coupon 4', description: 'Fashion sale! Get the latest trends in clothing at unbeatable prices.', code: 'FASH40', imgSrc: 'https://couponbunnie.com/wp-content/uploads/2022/05/Clothing-Promo-Your-Story-1536x1536.jpg' },
    { id: 5, title: 'Coupon 5', description: 'Limited time offer on stylish clothing. Refresh your wardrobe with great discounts.', code: 'STYLE25', imgSrc: 'https://couponbunnie.com/wp-content/uploads/2022/05/Clothing-Promo-Your-Story-1-1536x1536.jpg' },
    { id: 6, title: 'Coupon 6', description: 'Up to 60% off on top brands like Lee Cooper and John Player. Shop now!', code: 'BRAND60', imgSrc: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-04072024-UHP-TopBrands-Leecooper-Johnplayer-Min60.jpg' },
    { id: 7, title: 'Coupon 7', description: 'Get the closet basics you need. Trousers starting at just ₹699.', code: 'TROUSER699', imgSrc: 'https://assets.ajio.com/cms/AJIO/WEB/D-21072024-TrendsSIS-BagTheClosetBasics-trousers-starting699.jpg' },
    { id: 8, title: 'Coupon 8', description: 'Stay tuned for exciting offers. New deals coming soon!', code: 'NEWDEALS', imgSrc: 'https://i.ytimg.com/vi/naWrP6P3RaI/maxresdefault.jpg' },
    { id: 9, title: 'Coupon 9', description: 'Great deals on your favorite restaurants. Enjoy delicious meals at discounted prices.', code: 'RESTAURANT30', imgSrc: 'https://b.zmtcdn.com/data/pictures/5/20926805/26dac1ec4e75e4ebfaa63042a09e5e5a_featured_v2.jpg' }
];

const popularOffers = [
    { id: 1, title: 'Domino\'s coupons', description: '40% Off on ₹200', code: 'CART80', imgSrc: 'https://link-to-image.com/dominos-coupon.jpg' },
    { id: 2, title: 'Domino\'s coupons', description: '50% Off Upto ₹120', code: 'NEW120', imgSrc: 'https://link-to-image.com/dominos-coupon-2.jpg' },
    { id: 3, title: 'Myntra coupons', description: 'Right To Fashion Sale', code: 'CASHBACK', imgSrc: 'https://link-to-image.com/myntra-coupon.jpg' },
    { id: 4, title: 'Foxtale coupons', description: '₹400 Off On ₹899', code: 'ADM400', imgSrc: 'https://link-to-image.com/foxtale-coupon.jpg' }
];

const faqs = [
    { question: "What is Decoup?", answer: "Decoup is a platform that offers a wide range of coupons and deals to help you save money on your purchases." },
    { question: "How do I use a coupon?", answer: "Simply log in to Decoup, browse the available coupons, and click on your preferred coupon to get the code. Use this code at the retailer’s website during checkout to avail the discount." },
    { question: "How does cashback work?", answer: "When you use a coupon through Decoup, cashback gets added to your Decoup wallet. You can withdraw this cashback to your bank account or use it for future purchases." },
    { question: "Is Decoup free to use?", answer: "Yes, Decoup is completely free to use. You can browse and use any of the available coupons without any charges." }
];

const HomePage = () => {
    const [visibleCode, setVisibleCode] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [activeFaq, setActiveFaq] = useState(null);

    const handleShowCode = (code) => {
        navigator.clipboard.writeText(code).then(() => {
            setPopupMessage(`Coupon code "${code}" has been copied to clipboard!`);
            setVisibleCode(code);
            setShowPopup(true);
        }).catch(err => {
            setPopupMessage('Failed to copy coupon code.');
            setShowPopup(true);
        });
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setVisibleCode(null);
    };

    const handleToggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="homepage-background">
            <Container fluid className="p-0">
                <Carousel>
                    {carouselImages.map(image => (
                        <Carousel.Item key={image.id}>
                            <img className="d-block w-100" src={image.src} alt={image.alt} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>

            <Container className="mt-4">
                <h2 className="text-center mb-4">Top Available Coupons</h2>
                <Row>
                    {couponCards.map(card => (
                        <Col key={card.id} md={4} className="mb-4">
                            <Card className="coupon-card">
                                <Card.Img variant="top" src={card.imgSrc} />
                                <Card.Body>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text>{card.description}</Card.Text>
                                    <Button variant="primary" onClick={() => handleShowCode(card.code)}>
                                        Show Coupon
                                    </Button>
                                    {visibleCode === card.code && (
                                        <div className="coupon-code">
                                            <p>{card.code}</p>
                                        </div>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Container className="popular-offers mt-5">
                <h2 className="text-center mb-4">Popular Offers</h2>
                <Row>
                    {popularOffers.map(offer => (
                        <Col key={offer.id} md={3} className="mb-4">
                            <Card className="offer-card">
                                <Card.Img variant="top" src={offer.imgSrc} />
                                <Card.Body>
                                    <Card.Title>{offer.title}</Card.Title>
                                    <Card.Text>{offer.description}</Card.Text>
                                    <Button variant="primary" onClick={() => handleShowCode(offer.code)}>
                                        Show Coupon
                                    </Button>
                                    {visibleCode === offer.code && (
                                        <div className="coupon-code">
                                            <p>{offer.code}</p>
                                        </div>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Container className="steps-to-save mt-5">
                <h2 className="text-center mb-4">Three Steps to Save</h2>
                <Row className="justify-content-center">
                    <Col md={4} className="text-center mb-4">
                        <img src="https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/4735ce608c5c4fc1f9b83267d8fb1a8c/dominos-logo-large.jpg?876051" alt="Step 1" />
                        <h4>Log In & Shop</h4>
                        <p>Click your favourite coupon & Shop</p>
                    </Col>
                    <Col md={4} className="text-center mb-4">
                        <img src="https://link-to-image.com/step2.jpg" alt="Step 2" />
                        <h4>Cashback Earned</h4>
                        <p>Cashback gets added to your CouponDunia wallet</p>
                    </Col>
                    <Col md={4} className="text-center mb-4">
                        <img src="https://link-to-image.com/step3.jpg" alt="Step 3" />
                        <h4>Withdraw Cashback</h4>
                        <p>To your bank account, or as a voucher, recharge</p>
                    </Col>
                </Row>
            </Container>

            <Container className="trending-categories mt-5">
                <h2 className="text-center mb-4">Monsoon Specials ⛱️ Trending Categories</h2>
                <Row>
                    <Col md={2} className="text-center">
                        <img src="https://media.istockphoto.com/photos/restaurant-plates-picture-id104704117?k=20&m=104704117&s=612x612&w=0&h=kpYSHTcSnkQZbhHmUr25jIIvns7f3x2oBMNvX1lLTwU=" alt="Food & Dining" />
                        <h5>Food & Dining</h5>
                    </Col>
                    <Col md={2} className="text-center">
                        <img src="https://d3pzq99hz695o4.cloudfront.net/temporary/image/20240806073029-380787-190x260.jpg" alt="Fashion" />
                        <h5>Fashion</h5>
                    </Col>
                    <Col md={2} className="text-center">
                        <img src="https://d3pzq99hz695o4.cloudfront.net/temporary/image/20240806070044-765022-190x260.jpg" alt="Beauty & Health" />
                        <h5>Beauty & Health</h5>
                    </Col>
                    <Col md={2} className="text-center">
                        <img src="https://img.freepik.com/premium-photo/online-delivery-service-concept-parcel-delivery-man-wearing-face-mask-handling-cardboard-boxes-door-home-mature-woman-receiving-packages-entrance-during-pandemic_633337-4040.jpg?size=626&ext=jpg" alt="Electronics" />
                        <h5>Electronics</h5>
                    </Col>
                    <Col md={2} className="text-center">
                        <img src="https://d3pzq99hz695o4.cloudfront.net/temporary/image/20240806070137-613180-190x260.jpg" alt="Home Furnishing" />
                        <h5>Home Furnishing</h5>
                    </Col>
                    <Col md={2} className="text-center">
                        <img src="https://media.istockphoto.com/photos/hand-holding-business-news-picture-id506817534?k=20&m=506817534&s=612x612&w=0&h=yUlJEmS1jzVuA3-yXTmTgIklON1ZpyNQmiKH-R9txEg=" alt="New Deals" />
                        <h5>New Deals</h5>
                    </Col>
                </Row>
            </Container>

            <Container className="testimonials mt-5">
                <h2 className="text-center mb-4">What Our Users Say</h2>
                <Row className="justify-content-center">
                    <Col md={4}>
                        <Card className="testimonial-card">
                            <Card.Body>
                                <Card.Text>
                                    "Decoup helped me save a lot of money on my favorite brands. The coupons are amazing and so easy to use!"
                                </Card.Text>
                                <Card.Footer>
                                    <small className="text-muted">- Priya, Bangalore</small>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="testimonial-card">
                            <Card.Body>
                                <Card.Text>
                                    "I love the cashback feature on Decoup. It feels great to shop and earn at the same time. Highly recommend it!"
                                </Card.Text>
                                <Card.Footer>
                                    <small className="text-muted">- Raj, Mumbai</small>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="testimonial-card">
                            <Card.Body>
                                <Card.Text>
                                    "Decoup's customer service is top-notch. They resolved my issue quickly and were very helpful. A+ experience!"
                                </Card.Text>
                                <Card.Footer>
                                    <small className="text-muted">- Aisha, Delhi</small>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className="faq mt-5">
                <h2 className="text-center mb-4">Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-row">
                        <div className={`faq-item ${activeFaq === index ? 'active' : ''}`} onClick={() => handleToggleFaq(index)}>
                            <h5>{faq.question}</h5>
                            {activeFaq === index && <p>{faq.answer}</p>}
                        </div>
                    </div>
                ))}
            </Container>

            <Container className="testimonials mt-5">
                <h2 className="text-center mb-4">What Our Users Say</h2>
                <Row>
                    {/* Add testimonial cards here */}
                </Row>
            </Container>

            <Footer />

            <Modal show={showPopup} onHide={handleClosePopup}>
                <Modal.Header closeButton>
                    <Modal.Title>Coupon Code</Modal.Title>
                </Modal.Header>
                <Modal.Body>{popupMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClosePopup}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default HomePage;
