import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUpPage.css';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate(); // Use navigate to handle redirects

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Basic validation
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/auth/signup', {
                email: email,
                password: password,
            });

            console.log('Server Response:', response); // Log the response for debugging

            if (response.status === 200) { // Check if the sign-up was successful
                setSuccess('Successfully signed up! Redirecting to sign-in page...');
                setTimeout(() => navigate('/signin'), 2000); // Redirect after 2 seconds
            } else {
                setError('Sign-up failed');
            }
        } catch (error) {
            console.error('Error during sign-up:', error);
            if (error.response) {
                setError(error.response.data.message || 'Sign-up failed');
            } else {
                setError('Sign-up failed');
            }
        }
    };

    return (
        <Container fluid className="sign-up-container">
            <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <Col md="5" className="sign-up-form">
                    <h2 className="text-center">Sign Up</h2>
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

                        <Form.Group controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" block>
                            Sign Up
                        </Button>
                    </Form>
                    {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                    {success && <Alert variant="success" className="mt-3">{success}</Alert>}
                </Col>
            </Row>
        </Container>
    );
};

export default SignUpPage;
