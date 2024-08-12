import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './SignInPage.css';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Replace with actual API call for authentication
        const validEmail = 'siva@gmail.com';
        const validPassword = 'password123';

        if (email === validEmail && password === validPassword) {
            setSuccess('Successfully signed in!');
            navigate('/dashboard'); // Redirect to the dashboard
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <Container fluid className="sign-in-container">
            <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <Col md="5" className="sign-in-form">
                    <h2 className="text-center">Sign In</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" block>
                            Sign In
                        </Button>
                    </Form>
                    {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                    {success && <Alert variant="success" className="mt-3">{success}</Alert>}
                    <div className="mt-3 text-center">
                        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SignInPage;
