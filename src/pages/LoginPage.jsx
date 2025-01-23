import React, { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    privateKey: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <>
      <div className="bg-[#f5f2e5] h-screen flex items-center justify-center">
        <div className="border-2 border-black p-8 rounded-lg relative">
          <div className="border-2 border-black p-8 rounded-md">
            <div className="border-2 border-black p-6 w-max rounded-md">
              <div className="border-b-2 border-black ">
                <h2 className="text-6xl font-bold text-black text-center font-gravity tracking-wider">
                  Login
                </h2>
              </div>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 mt-6 font-mono"
              >
                <div className="flex items-center space-x-4">
                  <label className="text-xl font-semibold w-28 text-black ">Username</label>
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
                  <label className="text-xl font-semibold  w-28 text-black">Passkey</label>
                  <input
                    type="password"
                    name="privateKey"
                    value={formData.privateKey}
                    onChange={handleChange}
                    className="border border-black rounded px-3 py-1 w-full"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-md w-full mt-4 text-lg tracking-wide"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
