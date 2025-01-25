import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ExplorePage from "./pages/ExplorePage";
import Navbar from "./pages/Navbar";
import ProfilePage from "./pages/ProfilePage";
import TransactionPage from "./pages/TransactionPage";
import { ThreeCircles } from "react-loader-spinner";
import ServiceForm from "./pages/ServiceForm";
import HirePage from "./pages/HirePage";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/hire" element={<HirePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/addservice" element={<ServiceForm />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/transact" element={<TransactionPage />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
