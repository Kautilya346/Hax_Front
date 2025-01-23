import React, { useState } from "react";
import GridLines from "react-gridlines";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
  });

  const [loading, setLoading] = useState(false); // To track loading state
  const [error, setError] = useState(""); // To track errors after submission

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // Set loading to true when the request starts
    setLoading(true);
    setError(""); // Clear any previous errors

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

      // Optionally clear form data after successful submission
      setFormData({
        fullname: "",
        username: "",
        email: "",
      });
    } catch (error) {
      console.error("Request failed:", error);
      setError("Network error, please check your connection.");
    } finally {
      setLoading(false); // Set loading to false when the request finishes
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
          <div className="border-2 border-black p-10 rounded-lg relative">
            <div className="border-2 border-black p-8 rounded-md">
              <div className="border-2 border-black p-6 rounded-md">
                <div className="border-b-2 border-black">
                  <h2 className="text-6xl font-bold text-black text-center font-gravity tracking-wider">
                    Create an Account
                  </h2>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 mt-6 font-mono"
                >
                  <div className="flex items-center space-x-4">
                    <label className="text-xl font-semibold w-28 text-black">
                      Fullname
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      className="border border-black rounded px-3 py-1 w-full"
                      required
                    />
                  </div>
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
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border border-black rounded px-3 py-1 w-full"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#DC483A] text-white px-6 py-2 rounded-md w-full mt-4 text-lg tracking-wide"
                    disabled={loading} // Disable button during loading
                  >
                    {loading ? "Signing Up..." : "Sign Up"}
                  </button>
                </form>
                {error && (
                  <p className="mt-4 text-center text-red-500">{error}</p>
                )}
                <div className="mt-4 text-center">
                  <p className="text-sm text-black">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-[#DC483A] font-bold underline"
                    >
                      Login here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GridLines>
      </div>
    </>
  );
};

export default SignupPage;
