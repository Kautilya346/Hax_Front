import React, { useState } from "react";
import axios from "axios";
import GridLines from "react-gridlines";
import toast, { Toaster } from "react-hot-toast"; // Import react-hot-toast
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
    setError(""); // Clear previous errors

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        formData,
        { withCredentials: true }
      );

      console.log("Login Success:", response.data);
      // Show success toast

      toast.success("Login Successful!");
      // Optionally redirect or save login info here
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Invalid username or passkey."); // Show error toast
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
            className="border-2 border-black p-8 rounded-lg relative"
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
                id="ultimate"
                className="border-2 border-black p-6 w-max rounded-md"
                initial={{ borderWidth: "0.2px", borderColor: "#000" }}
                animate={{ borderWidth: "4px", borderColor: "#000" }}
                transition={{ duration: 0.5 }}
              >
                <div className="border-b-2 border-black">
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
                    Login
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
                      transition={{ duration: 0.5 }}
                    >
                      Username
                    </motion.label>
                    <motion.input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="border border-black rounded px-3 py-1 w-full"
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
                      Passkey
                    </motion.label>
                    <motion.input
                      type="password"
                      name="privateKeyHex"
                      value={formData.privateKeyHex}
                      onChange={handleChange}
                      className="border border-black rounded px-3 py-1 w-full"
                      required
                      initial={{ opacity: 0, scale: 0.75 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="bg-[#DC483A] text-white px-6 py-2 rounded-md w-full mt-4 text-lg tracking-wide"
                    disabled={loading}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {loading ? "Logging In..." : "Login"}
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
                    Don’t have an account?{" "}
                    <motion.a
                      href="/signup"
                      className="text-[#DC483A] font-bold underline"
                      whileHover={{ scale: 1.1 }} // Enlarges the link slightly on hover
                      whileTap={{ scale: 0.95 }} // Shrinks the link when clicked
                    >
                      Sign up here
                    </motion.a>
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </GridLines>
      </div>

      {/* Toaster component to show toasts */}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default LoginPage;
