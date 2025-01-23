import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import dinoImage from "../assets/dino.svg";
import GridLines from "react-gridlines";

const HomePage = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="bg-[#f5f2e5] h-screen gap-10">
      <GridLines
        className="grid-area"
        ccellWidth={20}
        strokeWidth={1}
        cellWidth2={20}
      >
        <div className="flex flex-col gap-1 border-2 border-black w-[90%] text-center mx-auto pb-0 m-0 relative">
          <div className="text-center justify-center flex font-gravity text-[250px] font-bold">
            <h1 className="text-black">Free</h1>
            <span className="text-[#DC483A]">3</span>
            <h1 className="text-black">Lance</h1>
          </div>

          <div
            id="panel"
            className="flex flex-col font-gravity mb-16 bg-black rounded-[20px] text-center mx-auto relative overflow-hidden transition-all duration-300 ease-in-out" // Added flex-col, overflow-hidden and transition
            style={{ height: isSearchOpen ? '90px' : '45px' }} // Dynamic height
          >
            <div className="flex items-center justify-center h-[45px]"> {/* Container for buttons */}
              <Link
                to="/login"
                className="px-[57px] text-[#f5f2e5] text-[40px] transition-transform transform hover:scale-110 hover:text-[#DC483A] duration-500 ease-in-out"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-[57px] text-[#f5f2e5] text-[40px] transition-transform transform hover:scale-110 hover:text-[#DC483A] duration-500 ease-in-out"
              >
                Signup
              </Link>

              <button
                onClick={handleSearchClick}
                className="px-[57px] text-[#f5f2e5] text-[40px] transition-transform transform hover:scale-110 hover:text-[#DC483A] duration-500 ease-in-out"
              >
                Search
              </button>

              <Link
                to="/product"
                className="px-[57px] text-[#f5f2e5] text-[40px] transition-transform transform hover:scale-110 hover:text-[#DC483A] duration-500 ease-in-out"
              >
                Product
              </Link>
            </div>

            {/* Search Bar */}
            {isSearchOpen && (
              <div className="w-full h-[45px] flex items-center justify-center bg-[#000000]"> {/* Container for search bar */}
                <input
                  type="text"
                  ref={searchInputRef}
                  placeholder="Search..."
                  className="w-[750px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#DC483A] h-[40px]"
                />
                <button onClick={handleSearchClick} className="ml-2 px-4 py-2 bg-[#DC483A] text-[#f5f2e5] rounded-md hover:bg-[wheat] hover:text-black transition duration-300 h-[40px]">Close</button>
              </div>
            )}
          </div>

          {/* <div>
            <img
              src={dinoImage}
              alt="Dinosaur"
              className="size-20 ml-5 text-white animate-dino absolute bottom-[36%] left-16"
            />
          </div> */}
        </div>

        <div className="h-[40%] border-2 border-t-0 border-black w-[90%] text-center mx-auto">
          <div className="border-2 border-t-0 rounded-b-md border-black w-[50%] px-5 py-2 text-center mx-auto">
            <p className="ibm-flex-mono">
              Free3Lance is a decentralized freelancing platform that connects
              clients and freelancers directly using blockchain technology. It
              eliminates intermediaries, provides transparent payment systems
              via smart contracts, and ensures secure user authentication
              through Web3 services. The platform also introduces a reputation
              system and dispute resolution powered by decentralized governance.
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia sunt
            atque dolore ducimus tempore, soluta ad eos error ut officiis
          </p>
        </div>
      </GridLines>
    </div>
  );
};

export default HomePage;