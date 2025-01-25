import React, { useState, useEffect } from "react";
import GridLines from "react-gridlines";
import { Link, useNavigate } from "react-router-dom";
import { motion,AnimatePresence } from "framer-motion";
import axios from "axios";
import { FaCopy } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [openModal,setOpenModal]=useState(false);
  const [privateKey,setPrivateKey]=useState("1")

  const navigate=useNavigate()

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
      console.log(response.data)
      setPrivateKey(response.data.privateKey)
      setOpenModal(true)
    } catch (error) {
      console.error("Request failed:", error);
      setError("Network error, please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(privateKey).then(() => {
    toast.success("Private key copied to clipboard!");
    });
    };

    const handleRedirect = () => {
      setOpenModal(false);
      navigate("/profile");
      };

  return (

    <>
    
    <div className="bg-[#f5f2e5] h-screen flex items-center justify-center pb-16">
      <GridLines className="grid-area" cellWidth={20} strokeWidth={1} cellWidth2={20}>
        <motion.div
          className="border-[30%] border-black p-10 rounded-lg relative"
          initial={{ borderWidth: "0.1px", borderColor: "#000" }}
          animate={{ borderWidth: "3px", borderColor: "#000" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="border-23 border-black p-8 rounded-md"
            initial={{ borderWidth: "0.1px", borderColor: "#000" }}
            animate={{ borderWidth: "3px", borderColor: "#000" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="border-2 border-black p-10 rounded-md bg-white"
              initial={{ borderWidth: "0.2px", borderColor: "#000" }}
              animate={{ borderWidth: "3px", borderColor: "#000" }}
              transition={{ duration: 0.5 }}
            >
              <div className="border-b-2 border-black  ">
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
                  className="text-sm text-black font-mono font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  Already have an account?{" "}
                  <motion.button
                    onClick={() => navigate("/login")}
                    className="text-[#DC483A] font-bold underline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    LOGIN HERE
                  </motion.button>
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </GridLines>
      <AnimatePresence>
    {openModal && (
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Cloud background animation with more clouds */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Cloud 1 */}
          <motion.div
            className="absolute top-[10%] left-[20%] w-[200px] h-[100px] bg-gray-200 rounded-full opacity-60"
            animate={{
              x: [0, 20, -20, 0],
              y: [0, 10, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 4,
              ease: "easeInOut",
            }}
          ></motion.div>

          {/* Cloud 2 */}
          <motion.div
            className="absolute top-[30%] right-[15%] w-[300px] h-[150px] bg-gray-300 rounded-full opacity-50"
            animate={{
              x: [0, -30, 30, 0],
              y: [0, 15, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 5,
              ease: "easeInOut",
            }}
          ></motion.div>

          {/* Cloud 3 */}
          <motion.div
            className="absolute top-[50%] left-[5%] w-[250px] h-[120px] bg-gray-100 rounded-full opacity-40"
            animate={{
              x: [0, 25, -25, 0],
              y: [0, -10, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 6,
              ease: "easeInOut",
            }}
          ></motion.div>

          {/* Cloud 4 */}
          <motion.div
            className="absolute bottom-[10%] right-[10%] w-[180px] h-[90px] bg-gray-300 rounded-full opacity-50"
            animate={{
              x: [0, -15, 15, 0],
              y: [0, 5, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 5.5,
              ease: "easeInOut",
            }}
          ></motion.div>

          {/* Cloud 5 */}
          <motion.div
            className="absolute top-[70%] right-[30%] w-[300px] h-[150px] bg-gray-200 rounded-full opacity-60"
            animate={{
              x: [0, -20, 20, 0],
              y: [0, 10, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 4.5,
              ease: "easeInOut",
            }}
          ></motion.div>
        </motion.div>

        {/* Popup Content */}
        <motion.div
          className="bg-white p-10 rounded-lg shadow-lg text-center space-y-6 w-[500px] max-w-full"
          initial={{ scale: 0.8, y: 50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.8, y: -50, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 10,
            duration: 0.5,
          }}
        >
          <motion.h2
            className="pb-2 font-semibold border-b-2 border-black font-gravity text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Your Private Key
          </motion.h2>
          <motion.p
            className="text-gray-700 break-words"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {privateKey}
          </motion.p>
          <div className="space-x-4 mt-5 flex justify-center items-center">
            <motion.button
              onClick={handleCopy}
              className="bg-red-500 text-white px-6 border-black border-2 py-2 rounded-md hover:bg-red-600 flex justify-center items-center gap-3 font-mono"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Copy<FaCopy />
            </motion.button>
            <motion.button
              onClick={handleRedirect}
              className="bg-[wheat] border-black border-2  text-black px-6 py-2 rounded-md font-mono"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Go to Profile →
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
  <Toaster position="top-center" reverseOrder={false} />
    </div>
    </>
  );
};

export default SignupPage;
