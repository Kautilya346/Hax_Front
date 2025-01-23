import React, { useState } from "react";
import GridLines from "react-gridlines";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <>
      {/* <GridLines
        className="grid-area"
        cellWidth={50}
        strokeWidth={1}
        cellWidth2={50}
        > */}
        
        <div className="bg-[#f5f2e5] h-screen flex items-center justify-center">
          <div className="border-2 border-black p-10  rounded-lg relative">
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
                    <label className="text-xl font-semibold w-28 text-black">Fullname</label>
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
                    <label className="text-xl font-semibold w-28 text-black">Username</label>
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
                    <label className="text-xl font-semibold w-28 text-black">Email</label>
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
                    className="bg-black text-white px-6 py-2 rounded-md w-full mt-4 text-lg tracking-wide"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      {/* </GridLines> */}
    </>
  );
};

export default SignupPage;
