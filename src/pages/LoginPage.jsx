import React, { useState } from "react";
import axios from "axios";
import GridLines from "react-gridlines";
import toast, { Toaster } from "react-hot-toast"; // Import react-hot-toast
import { useNavigate } from "react-router-dom";

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
          <div className="border-2 border-black p-8 rounded-lg relative">
            <div className="border-2 border-black p-8 rounded-md">
              <div
                id="ultimate"
                className="border-2 border-black p-6 w-max rounded-md"
              >
                <div className="border-b-2 border-black">
                  <h2 className="text-6xl font-bold text-black text-center font-gravity tracking-wider">
                    Login
                  </h2>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 mt-6 font-mono"
                >
                  <div className="flex items-center space-x-4">
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
                  </div>
                  <div className="flex items-center space-x-4">
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
                  </div>
                  <button
                    type="submit"
                    className="bg-[#DC483A] text-white px-6 py-2 rounded-md w-full mt-4 text-lg tracking-wide"
                    disabled={loading}
                  >
                    {loading ? "Logging In..." : "Login"}
                  </button>
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
              </div>
            </div>
          </div>
        </GridLines>
      </div>

      {/* Toaster component to show toasts */}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default LoginPage;
