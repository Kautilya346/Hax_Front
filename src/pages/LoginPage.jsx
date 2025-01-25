import React, { useState } from "react";
import axios from "axios";
import GridLines from "react-gridlines";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    privateKeyHex: "",
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        formData,
        { withCredentials: true }
      );
      console.log("Login Success:", response.data);
      toast.success("Login Successful!");
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-[#f5f2e5] h-screen flex items-center justify-center">
        <GridLines
          className="grid-area"
          cellWidth={20}
          strokeWidth={1}
          cellWidth2={20}
        >
          <motion.div
            className="border-2 border-black p-8 rounded-lg relative shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="border-2 border-black p-8 rounded-md bg-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <motion.h2
                className="text-6xl font-bold text-black text-center font-gravity tracking-wider"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                Login
              </motion.h2>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 mt-6 font-mono"
              >
                <motion.div
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <label className="text-xl font-semibold w-28 text-black">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="border border-black rounded px-3 py-1 w-full"
                    required
                  />
                </motion.div>
                <motion.div
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label className="text-xl font-semibold w-28 text-black">
                    Passkey
                  </label>
                  <input
                    type="password"
                    name="privateKeyHex"
                    value={formData.privateKeyHex}
                    onChange={handleChange}
                    className="border border-black rounded px-3 py-1 w-full"
                    required
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  className=" w-full bg-[#ff6a5c] border-2 border-black text-black py-3 rounded-md font-bold 
    shadow-[0_4px_0_#c34d44,0_8px_0_#8a2d27] 
    transition-all duration-300 ease-in-out transform-gpu 
    hover:-translate-y-1 hover:shadow-[0_6px_0_#c34d44,0_12px_0_#8a2d27] hover:bg-[#DC483A] 
    active:translate-y-2 active:shadow-none"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {loading ? "Logging In..." : "Login"}
                </motion.button>
              </form>
              {error && (
                <p className="mt-4 text-center text-red-500">{error}</p>
              )}
              <div className="mt-4 text-center">
                <p className="text-sm text-black">
                  Don’t have an account?{" "}
                  <a
                    href="/signup"
                    className="text-[#DC483A] font-bold underline"
                  >
                    Sign up here
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </GridLines>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default LoginPage;
