// src/components/ProfilePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css'; // Import the custom CSS

const ProfilePage = () => {
    const navigate = useNavigate();

    const handleDashboardClick = () => {
        navigate('/dashboard');
    };

    const handleSignInClick = () => {
        navigate('/signin');
    };

    return (
        <div className="profile-background">
            <h1>Profile Page</h1>
            <button onClick={handleDashboardClick}>Dashboard</button>
            <button onClick={handleSignInClick}>Sign In</button>
        </div>
    );
};

export default ProfilePage;
