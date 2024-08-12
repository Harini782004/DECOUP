import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css'; 

const NavBar = () => {
    return (
        <Navbar expand="lg" className="navbar">
            <Navbar.Brand as={Link} to="/">DECOUP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
                    <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                    <Nav.Link as={Link} to="/suggestions">Suggestions</Nav.Link>
                    <Nav.Link as={Link} to="/search">Search</Nav.Link> {/* Add link for SearchPage */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
