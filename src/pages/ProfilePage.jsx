import React, { useState } from "react";
import banner from "../assets/banner.png";
import dp from "../assets/dp.jpg";
import GridLines from "react-gridlines";
import { FaPaste, FaStar } from "react-icons/fa";

const ProfilePage = () => {
  const [copied, setCopied] = useState(false);
  const publicKey = "your-public-key-here"; // Replace this with the actual public key

  const handleCopy = () => {
    navigator.clipboard.writeText(publicKey).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="bg-[#f5f2e5] min-h-screen font-sans text-black">
      {/* Banner Section */}
      <div className="relative rounded-lg px-2 py-1 bg-[#f5f2e5]">
        <img
          src={banner}
          alt="banner"
          className="w-full h-[250px] object-cover rounded-lg"
        />
        <div className="absolute bottom-4 left-8 text-4xl font-bold text-white drop-shadow-lg">
          Web3 Developer & Blockchain Enthusiast
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col p-10 gap-6 border-b-2 border-black">
        <div className="flex gap-10">
          {/* Profile Picture */}
          <div className="relative">
            <img
              src={dp}
              alt="profile"
              className="w-36 h-36 border-4 border-black rounded-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-[#1fff45] rounded-full w-6 h-6 border-2 border-black"></div>
          </div>

          {/* Name and Share Button */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold font-gravity">
              Aditya Srivastava
            </h1>
            <div className="flex gap-4 mt-2">
              <div className="px-4 py-2 bg-[#f5f2e5] border-2 border-black rounded-md flex justify-center items-center gap-2">
                <div>{publicKey}</div>
                <FaPaste
                  className="cursor-pointer text-[#dc483a]"
                  onClick={handleCopy}
                />
              </div>
              <button
                className="relative px-4 py-2 bg-[#d5655b] text-white font-gravity text-xl rounded-md border-2 border-black 
  shadow-[0_4px_0_#a9463d,0_8px_0_#752e28] 
  transition-all duration-300 ease-in-out transform-gpu 
  hover:-translate-y-1 hover:shadow-[0_6px_0_#a9463d,0_12px_0_#752e28] hover:bg-[#df3829] 
  active:translate-y-2 active:shadow-none"
              >
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="w-[70%] font-mono text-lg">
          Free3Lance is a decentralized freelancing platform that connects
          clients and freelancers directly using blockchain technology. It
          eliminates intermediaries, provides transparent payment systems via
          smart contracts, and ensures secure user authentication through Web3
          services. The platform also introduces a reputation system and dispute
          resolution powered by decentralized governance.
        </div>
      </div>

      {/* Active Projects Section */}
      <div className="p-10 border-t-2 mt-2 border-black">
        <h2 className="text-3xl font-bold mb-6 font-gravity">
          Active Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((project, index) => (
            <div
              key={index}
              className="bg-[#f5f2e5] border-2 border-black p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex justify-between mb-4">
                <h3 className="text-xl font-bold">Service {project}</h3>
                <span className="text-sm font-medium">$Price</span>
              </div>
              <p className="text-sm font-mono">
                A brief description of the service offered goes here. Add more
                details to make it engaging.
              </p>
              {/* Project Completed Button */}
              <button
                className="relative mt-4 w-full px-4 py-2 bg-[#82db85] text-white font-semibold rounded-md border-2 border-black 
  shadow-[0_4px_0_#45a049,0_8px_0_#2c6b2f] 
  transition-all duration-300 ease-in-out transform-gpu 
  hover:-translate-y-1 hover:shadow-[0_6px_0_#45a049,0_12px_0_#2c6b2f] hover:brightness-95 
  active:translate-y-2 active:shadow-none"
              >
                Project Completed
              </button>
            </div>
          ))}
        </div>
      </div>


      {/* Skills Section */}
      <div className="p-10 border-t-2 border-black">
        <h2 className="text-3xl font-bold mb-6 font-gravity">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {["Web3.js", "React.js", "Solidity", "Node.js", "Blockchain"].map(
            (skill, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-[#f5f2e5] border-2 border-black rounded-md font-semibold"
              >
                {skill}
              </div>
            )
          )}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="p-10 border-t-2 border-black">
        <h2 className="text-3xl font-bold mb-6 font-gravity">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((review, index) => (
            <div
              key={index}
              className="bg-[#f5f2e5] border-2 border-black p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <p className="text-sm font-mono italic">
                "Aditya provided exceptional service and demonstrated expertise
                in Web3. The project was delivered on time and exceeded
                expectations!"
              </p>
              <div className="mt-4 flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="mt-2 text-sm font-semibold">- Client Name</p>
            </div>
          ))}
        </div>
      </div>

      

      {/* Displaying Copy Status */}
      {copied && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-md shadow-md">
          Public Key Copied!
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
