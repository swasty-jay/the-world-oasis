import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound"; // Import a 404 page component

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define your routes here */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="cabins" element={<Cabins />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
        <Route path="account" element={<Account />} />
        <Route path="login" element={<Login />} /> {/* Fallback route */}
        <Route path="*" element={<PageNotFound />} /> {/* Default route */}
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
