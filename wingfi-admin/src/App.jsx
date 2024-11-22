/** @format */

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";

// Login auth Components
import Login from "./pages/auth/Login.jsx";

// Users Components
import Retailer from "./components/users/Retailer.jsx";
import Corporate from "./components/users/Corporate.jsx";
import Vendors from "./components/users/Vendors.jsx";

// Services components
import Train from "./components/services/Train.jsx";
import Hotel from "./components/services/Hotel.jsx";
import Air from "./components/services/Air.jsx";
import Bus from "./components/services/Bus.jsx";
import Cab from "./components/services/Cab.jsx";
// Ratecard components
import RateCardGetCab from "./components/rateCard/RateCardGetCab.jsx";
// Get logs components
import GetLogs from "./components/getLogs/GetLogs.jsx";
// Protected route
import ProtectRoute from "./components/ProtectRoute.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";

import AddContactDetails from "./components/AddContactDetails.jsx";
import GetContactDetails from "./components/GetContactDetails.jsx";
import ContactType from "./components/ContactType.jsx";
import Products from "./components/products/products.jsx";

const App = () => {
  return (
    <div className="flex h-screen overflow-y-hidden">
      <div className="flex-1 ml-0">
        <Router>
          <Routes>
            {/* Redirect to Home if authenticated */}
            <Route path="/login" element={<Login />} />

            {/* Main application routes, wrapped with AdminDashboard */}
            <Route path="/" element={<ProtectRoute />}>
              {/* Protected Routes */}
              <Route element={<AdminDashboard />}>
                <Route index element={<Home />} />

                {/* Users Routes */}
                <Route path="users/retailers" element={<Retailer />} />
                <Route path="users/corporates" element={<Corporate />} />
                <Route path="users/vendors" element={<Vendors />} />

                {/* Services Routes */}

                <Route path="service/train" element={<Train />} />
                <Route path="service/air" element={<Air />} />
                <Route path="service/hotel" element={<Hotel />} />
                <Route path="service/cab" element={<Cab />} />
                <Route path="service/bus" element={<Bus />} />
                <Route path="products/products" element={<Products />} />

                {/* Ratecard Routes */}
                <Route path="ratecard/get-cab" element={<RateCardGetCab />} />

                {/* Other Routes */}
                <Route path="getlogs" element={<GetLogs />} />
                <Route path="add-contact" element={<AddContactDetails />} />
                <Route path="get-contacts" element={<GetContactDetails />} />
                <Route path="contact-type" element={<ContactType />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
