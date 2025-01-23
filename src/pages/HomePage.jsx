import React from "react";
import { Link } from "react-router-dom";
import dinoImage from "../assets/dino.svg";
 import GridLines from "react-gridlines";
// import GridLines from "react-gridlines/dist/index";

const HomePage = () => {
  return (
   
      <div className="bg-[#f5f2e5] h-screen gap-10">
        {/* Main Section */}
        <GridLines
      className="grid-area"
      ccellWidth={20}  // Width of the grid cells
      strokeWidth={1} // Adjust stroke for visibility
      cellWidth2={20}
    >
        <div className="flex flex-col gap-1 border-2 border-black w-[90%] text-center mx-auto pb-0 m-0">
          {/* Title */}
          <div className="text-center justify-center flex font-gravity text-[250px] font-bold">
            <h1 className="text-black">Free</h1>
            <span className="text-[#DC483A]">3</span>
            <h1 className="text-black">Lance</h1>
          </div>

          {/* Buttons Panel */}
          <div
            id="panel"
            className="flex font-gravity mb-16 bg-black h-[45px] items-center justify-center w-[800px] rounded-[20px] text-center mx-auto"
          >
            {/* Buttons with hover effects */}
            <Link
              to="/login"
              className="px-[57px] text-[#f5f2e5] text-[40px] transition-transform transform hover:scale-110 hover:text-[#DC483A] duration-500 ease-in-out "
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-[57px] text-[#f5f2e5] text-[40px] transition-transform transform hover:scale-110 hover:text-[#DC483A] duration-500 ease-in-out"
            >
              Signup
            </Link>
            <Link
              to="/search"
              className="px-[57px] text-[#f5f2e5] text-[40px] transition-transform transform hover:scale-110 hover:text-[#DC483A] duration-500 ease-in-out "
            >
              Search
            </Link>
            <Link
              to="/product"
              className="px-[57px] text-[#f5f2e5] text-[40px] transition-transform transform hover:scale-110 hover:text-[#DC483A] duration-500 ease-in-out"
            >
              Product
            </Link>
          </div>

          {/* image-dino */}
          <div>
            <img
              src={dinoImage}
              alt="Dinosaur"
              className="size-20 ml-5 text-white animate-dino absolute bottom-[36%] left-16"
            />
          </div>
        </div>

        {/* Description Section */}
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
