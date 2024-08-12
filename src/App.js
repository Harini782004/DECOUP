import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/HomePage';
import FavoritesPage from './components/FavoritesPage';
import ProfilePage from './components/ProfilePage';
import SuggestionPage from './components/SuggestionPage';
import NavBar from './components/NavBar'; 
import DashboardPage from './components/DashboardPage';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import SearchPage from './components/SearchPage'; // Import the SearchPage component

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/suggestions" element={<SuggestionPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/search" element={<SearchPage />} /> {/* Add route for SearchPage */}
            </Routes>
        </Router>
    );
};

export default App;
