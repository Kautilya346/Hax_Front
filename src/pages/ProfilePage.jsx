import React from "react";
import banner from "../assets/banner.png";
import dp from "../assets/dp.jpg";
import { FaPaste } from "react-icons/fa";


const ProfilePage = () => {
  return (
    <div className="bg-[#f5f2e5] min-h-screen font-sans text-black">
      {/* Banner Section */}
      <div className="relative">
        <img src={banner} alt="banner" className="w-full h-[250px] object-cover" />
        <div className="absolute bottom-4 left-8 text-4xl font-bold text-white drop-shadow-lg">
          LNM HACKS 7.0
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col p-10 gap-6 border-b-2 mb-10">
        
        <div className="flex gap-10">
          {/* Profile Picture */}
        <div className="relative">
          <img
            src={dp}
            alt="profile"
            className="w-36 h-36 border-4 border-black rounded-full object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-[#DC483A] rounded-full w-6 h-6 border-2 border-black"></div>
        </div>

        {/* Name and Share Button */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold font-gravity">Aditya Srivastava</h1>
          <div className="flex  gap-4 mt-2">
            <div className="px-4 py-2 bg-[#f5f2e5] border-2 border-black rounded-md flex justify-center items-center gap-2">
              <div>public key</div>
              <FaPaste className="cursor-pointer text-[#dc483a]"/>
            </div> 
            <button className="px-4 py-2 bg-[#DC483A] text-white font-gravity text-xl rounded-md border-2 border-black">
              Share
            </button>
          </div>
        </div>
        </div>

        {/* Description */}
        <div className="w-[70%] text-center text-lg">
          Free3Lance is a decentralized freelancing platform that connects clients and freelancers directly using blockchain technology. It eliminates intermediaries, provides transparent payment systems via smart contracts, and ensures secure user authentication through Web3 services. The platform also introduces a reputation system and dispute resolution powered by decentralized governance.
        </div>
      </div>

      {/* Active Projects Section */}
      <div className="p-10 border-t-2 mt-5 border-black">
        <h2 className="text-3xl font-bold mb-6 font-gravity">Active Projects</h2>
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
              <p className="text-sm">
                A brief description of the service offered goes here. Add more details to make it engaging.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
