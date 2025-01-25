import React, { useState } from "react";
import GridLines from "react-gridlines";
import axios from "axios"; // Import axios

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    privateKeyHex: "",
  });

  const [loading, setLoading] = useState(false); // To track loading state
  const [error, setError] = useState(""); // To track errors after submission

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);

    // Set loading to true when the request starts
    setLoading(true);
    setError(""); // Clear any previous errors
    console.log(formData.privateKeyHex);
    try {
      const response = await axios.post("http://localhost:3000/auth/login",formData,
        {withCredentials: true}
      );

      console.log("Login Success:", response.data);
      // Optionally redirect or save login info here (e.g., save token)
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid username or passkey.");
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
                    <label className="text-xl font-semibold  w-28 text-black">
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
                    disabled={loading} // Disable button during loading
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
    </>
  );
};

export default LoginPage;
