// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';

// Temporary placeholder pages
const FlightsPage = () => <h1>Flights Page</h1>;
const TrainsPage = () => <h1>Trains Page</h1>;
const BusesPage = () => <h1>Buses Page</h1>;
const SearchResults = () => <h1>Search Results</h1>;
const DestinationDetails = () => <h1>Destination Details</h1>;
const NotFound = () => <h1>404 - Page Not Found</h1>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/flights" element={<FlightsPage />} />
      <Route path="/trains" element={<TrainsPage />} />
      <Route path="/buses" element={<BusesPage />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/destination/:name" element={<DestinationDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
