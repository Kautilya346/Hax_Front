import React, { useState, useEffect } from "react";
import GridLines from "react-gridlines";
import { motion } from "framer-motion";
import axios from "axios";
import Preloader from "../assets/preloader"; // Import Preloader component

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoadingPage, setIsLoadingPage] = useState(true); // Manage page loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Success:", response.data);

      setFormData({
        fullname: "",
        username: "",
        email: "",
      });
    } catch (error) {
      console.error("Request failed:", error);
      setError("Network error, please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Simulate a loading delay to show the preloader
    const timer = setTimeout(() => {
      setIsLoadingPage(false); // Hide preloader after 2 seconds
    }, 300);

    return () => clearTimeout(timer); // Clean up the timeout on component unmount
  }, []);

  return (
    <div className="bg-[#f5f2e5] h-screen flex items-center justify-center pb-16 relative">
      {/* Display preloader if page is loading */}
      {isLoadingPage && <Preloader />}

      <GridLines
        className="grid-area"
        cellWidth={20}
        strokeWidth={1}
        cellWidth2={20}
      >
        <motion.div
          className="border-[30%] border-black p-10 rounded-lg relative"
          initial={{ borderWidth: "0.1px", borderColor: "#000" }}
          animate={{ borderWidth: "3px", borderColor: "#000" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="border-9 border-black p-8 rounded-md"
            initial={{ borderWidth: "0.1px", borderColor: "#000" }}
            animate={{ borderWidth: "3px", borderColor: "#000" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="border-2 border-black p-10 rounded-md"
              initial={{ borderWidth: "0.2px", borderColor: "#000" }}
              animate={{ borderWidth: "3px", borderColor: "#000" }}
              transition={{ duration: 0.5 }}
            >
              <div className="border-b-2 border-black ">
                <motion.h2
                  className="text-6xl font-bold text-black text-center font-gravity tracking-wider"
                  initial={{ opacity: 0, y: -40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    opacity: { duration: 0.6 },
                    y: { type: "spring", stiffness: 80 },
                    scale: { duration: 0.4 },
                  }}
                >
                  Create an Account
                </motion.h2>
              </div>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 mt-6 font-mono"
              >
                <div className="flex items-center space-x-4">
                  <motion.label
                    className="text-xl font-semibold w-28 text-black"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    Fullname
                  </motion.label>
                  <motion.input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    className="border-2 border-black rounded px-3 py-1 w-full"
                    required
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <motion.label
                    className="text-xl font-semibold w-28 text-black"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    Username
                  </motion.label>
                  <motion.input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="border-2 border-black rounded px-3 py-1 w-full"
                    required
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <motion.label
                    className="text-xl font-semibold w-28 text-black"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    Email
                  </motion.label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-2 border-black rounded px-3 py-1 w-full"
                    required
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-[#ff6a5c] border-2 border-black text-black py-3 rounded-md font-bold 
    shadow-[0_4px_0_#c34d44,0_8px_0_#8a2d27] 
    transition-all duration-300 ease-in-out transform-gpu 
    hover:-translate-y-1 hover:shadow-[0_6px_0_#c34d44,0_12px_0_#8a2d27] hover:bg-[#DC483A] 
    active:translate-y-2 active:shadow-none"
                  disabled={loading}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {loading ? "Signing Up..." : "Sign Up"}
                </motion.button>
              </form>
              {error && (
                <p className="mt-4 text-center text-red-500">{error}</p>
              )}
              <div className="mt-4 text-center">
                <motion.p
                  className="text-sm text-black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  Already have an account?{" "}
                  <motion.a
                    href="/login"
                    className="text-[#DC483A] font-bold underline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Login here
                  </motion.a>
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </GridLines>
    </div>
  );
};

export default SignupPage;
