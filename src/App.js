// // src/App.js
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import RegisterPage from './pages/RegisterPage';
// import LoginPage from './pages/LoginPage';
// import LandingPage from './pages/LandingPage';
// import SearchPage from "./pages/SearchPage";


// // Temporary placeholder pages
// const FlightsPage = () => <h1>Flights Page</h1>;
// const TrainsPage = () => <h1>Trains Page</h1>;
// const BusesPage = () => <h1>Buses Page</h1>;
// const SearchResults = () => <h1>Search Results</h1>;
// const DestinationDetails = () => <h1>Destination Details</h1>;
// const NotFound = () => <h1>404 - Page Not Found</h1>;

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<LandingPage />} />
//       <Route path="/register" element={<RegisterPage />} />
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/flights" element={<FlightsPage />} />
//       <Route path="/trains" element={<TrainsPage />} />
//       <Route path="/buses" element={<BusesPage />} />
//       <Route path="/search" element={<SearchResults />} />
//       <Route path="/destination/:name" element={<DestinationDetails />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// }

// export default App;



// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import SearchPage from "./pages/SearchPage";
import VehicleList from "./pages/VehicleList";
// import DestinationDetails from "./pages/DestinationDetails";

// Optional: fallback 404 page
const NotFound = () => <h1>404 - Page Not Found</h1>;

function App() {
  return (
    <Routes>
      {/* Landing / Home */}
      <Route path="/" element={<LandingPage />} />

      {/* Auth */}
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Vehicle Pages */}
      <Route path="/vehicles" element={<VehicleList />} />

      <Route path="/buses" element={<VehicleList type="Bus" />} />
      <Route path="/trains" element={<VehicleList type="Train" />} />
      <Route path="/flights" element={<VehicleList type="Flight" />} />

      {/* Search */}
      <Route path="/search" element={<SearchPage />} />

      {/* Destination / Booking Details */}
      {/* <Route path="/destination/:name" element={<DestinationDetails />} /> */}

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
