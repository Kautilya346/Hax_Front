import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import dinoImage from "../assets/dino.svg";
import GridLines from "react-gridlines";
import { FaCaretRight } from "react-icons/fa";

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
    <div className="bg-[#f5f2e5] h-full gap-10">
      <GridLines
        className="grid-area"
        cellWidth={20}                        
        strokeWidth={1}
        cellWidth2={20}
      >
        <div className="flex flex-col gap-1 border-2 border-t-0 border-black w-[90%] text-center mx-auto pb-0 m-0 relative">
          <div className="text-center justify-center flex mb-[-50px] font-gravity text-[250px] font-bold">
            <h1 className="text-black">Free</h1>
            <span className="text-[#DC483A]">3</span>
            <h1 className="text-black">Lance</h1>
          </div>

          <div
            id="panel"
            className="flex flex-col font-gravity mb-16 bg-black rounded-[20px] text-center mx-auto relative overflow-hidden transition-all duration-300 ease-in-out" // Added flex-col, overflow-hidden and transition
            style={{ height: isSearchOpen ? "110px" : "45px" }} // Dynamic height
          >
            <div className="flex items-center justify-center h-[45px]">
              {" "}
              {/* Container for buttons */}
              <Link
                to="/login"
                className="px-[57px] text-[#f5f2e5] text-[40px] transition-transform transform hover:scale-110 hover:text-[#DC483A] duration-300 ease-in-out"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-[57px] text-[#f5f2e5] text-[40px] transition-transform transform hover:scale-110 hover:text-[#DC483A] duration-300 ease-in-out"
              >
                Signup
              </Link>
              <button
                onClick={handleSearchClick}
                className="px-[57px] text-[#f5f2e5] text-[40px] transition-transform transform hover:scale-110 hover:text-[#DC483A] duration-300 ease-in-out"
              >
                Search
              </button>
              <Link
                to="/explore"
                className="px-[57px] text-[#f5f2e5] text-[40px] transition-transform transform hover:scale-110 hover:text-[#DC483A] duration-300 ease-in-out"
              >
                Explore
              </Link>
            </div>

            {/* Search Bar */}
            {isSearchOpen && (
              <div className="w-full h-[45px] flex items-center justify-center bg-[#000000] pt-6 ">
                {" "}
                {/* Container for search bar */}
                <input
                  type="text"
                  ref={searchInputRef}
                  placeholder="Search..."
                  className="w-[750px] px-4 py-2 text-2xl border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#DC483A] h-[40px]"
                />
                <button
                  onClick={handleSearchClick}
                  className="ml-2 px-4 py-2 bg-[#DC483A] text-[#f5f2e5] rounded-md hover:bg-[wheat] hover:text-black transition duration-300 h-[40px]"
                >
                  Close
                </button>
              </div>
            )}
          </div>

          <div>
            <img
              src={dinoImage}
              alt="Dinosaur"
              className="size-20 ml-5 left-[-15px]  text-white animate-dino absolute bottom-[-10px]"
            />
          </div>
        </div>

        <div className="h-[40%] border-2 border-t-0 border-black w-[90%] text-center mx-auto mb-10 pb-10">
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
        </div>
        <div>
          <div className="flex flex-wrap justify-around items-center gap-4 p-5">
            <div className="px-6 py-3 flex items-center bg-[#DC483A] text-white font-semibold font-gravity text-2xl hover:scale-110 rounded-full shadow-md hover:bg-[#b9362c] transition-all duration-300 cursor-pointer">
              Web Developer
              <FaCaretRight />
            </div>
            <div className="px-6 py-3 flex items-center bg-[#DC483A] text-white font-semibold font-gravity text-2xl hover:scale-110 rounded-full shadow-md hover:bg-[#b9362c] transition-all duration-300 cursor-pointer">
              App Developer
              <FaCaretRight />
            </div>
            <div className="px-6 py-3 flex items-center bg-[#DC483A] text-white font-semibold font-gravity text-2xl hover:scale-110 rounded-full shadow-md hover:bg-[#b9362c] transition-all duration-300 cursor-pointer">
              Video Editor
              <FaCaretRight />
            </div>
            <div className="px-6 py-3 flex items-center bg-[#DC483A] text-white font-semibold font-gravity text-2xl hover:scale-110 rounded-full shadow-md hover:bg-[#b9362c] transition-all duration-300 cursor-pointer">
              Graphic Designer
              <FaCaretRight />
            </div>
          </div>
        </div>
        <div className="border-black border-t-4 pb-20 mt-5 pt-5">
          <h2 className="text-center text-6xl font-gravity font-bold">
            Discover Our Unique Features
          </h2>
          <p className="text-center text-lg mt-3">
            Our features are designed to enhance your productivity and
            streamline your workflow.
          </p>

          <div className="flex flex-wrap justify-around items-center gap-16 mt-10">
            <div className="max-w-sm text-center">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-2xl font-bold">1-Stop Solution</h3>
              <p className="mt-2">
                Aeternity’s enchanting platform: effortlessly forge, deploy, and
                transform your ideas into powerful smart contracts.
              </p>
            </div>

            <div className="max-w-sm text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold">AI Powered Development</h3>
              <p className="mt-2">
                Create smart contracts effortlessly with Aeternity. Intuitive
                interface, Sophia language, and LLM guidance for excellence.
              </p>
            </div>

            <div className="max-w-sm text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold">Advanced Customization</h3>
              <p className="mt-2">
                With Advanced Customization, you can personalize your email
                client to suit your preferences and work style.
              </p>
            </div>
          </div>

          <p className="text-center mt-16">
            Made with ❤️ by bunch of {" "}{" "}
            <span className=" ml-2 font-gravity text-3xl"> Adityas</span>
          </p>
        </div>
      </GridLines>
    </div>
  );
};

export default HomePage;
