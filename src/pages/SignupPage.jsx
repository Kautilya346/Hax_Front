import React, { useState } from "react";
import GridLines from "react-gridlines";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
        "https://hax-back.vercel.app/auth/signup",
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

  return (
    <>
      <div className="bg-[#f5f2e5] h-screen flex items-center justify-center pb-16">
        <GridLines className="grid-area" cellWidth={20} strokeWidth={1} cellWidth2={20}>
          <motion.div
            className="border-[30%] border-black p-10 rounded-lg relative"
            initial={{ borderWidth: "0.1px", borderColor: "#000" }}
            animate={{ borderWidth: "3px", borderColor: "#000" }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="border-2 border-black p-8 rounded-md"
              initial={{ borderWidth: "0.1px", borderColor: "#000" }}
              animate={{ borderWidth: "4.5px", borderColor: "#000" }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="border-2 border-black p-10 rounded-md"
                initial={{ borderWidth: "0.2px", borderColor: "#000" }}
                animate={{ borderWidth: "4px", borderColor: "#000" }}
                transition={{ duration: 0.5 }}
              >
                <div className="border-b-2 border-black ">
                  <motion.h2
                    className="text-6xl font-bold text-black text-center font-gravity tracking-wider"
                    initial={{ opacity: 0, y: -50, scale: 0.6 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                    transition={{
                      opacity: { duration: 1 },
                      y: { type: "spring", stiffness: 100 },
                      scale: { duration: 0.5, delay: 0.3 },
                    }}
                  >
                    Create an Account
                  </motion.h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 mt-6 font-mono">
                  <div className="flex items-center space-x-4">
                    <motion.label
                      className="text-xl font-semibold w-28 text-black"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
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
                      initial={{ opacity: 0, scale: 0.75 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <motion.label
                      className="text-xl font-semibold w-28 text-black"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
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
                      initial={{ opacity: 0, scale: 0.75 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <motion.label
                      className="text-xl font-semibold w-28 text-black"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
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
                      initial={{ opacity: 0, scale: 0.75 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="bg-[#DC483A] text-white px-6 py-2 rounded-md w-full mt-4 text-lg tracking-wide"
                    disabled={loading}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
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
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    Already have an account?{" "}
                    <motion.a
                      href="/login"
                      className="text-[#DC483A] font-bold underline"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
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
    </>
  );
};

export default SignupPage;
