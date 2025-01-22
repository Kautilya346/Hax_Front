import React from "react";
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    // orange
    <div className="bg-[#f5f2e5] h-screen gap-10 ">
      
       {/* white */}
      <div className="flex flex-col gap-1 border-2 border-black w-[90%] text-center mx-auto">



        {/* green */}
        <div className="text-center justify-center flex font-gravity text-[250px] font-bold">
          <h1 className="text-black">Free</h1>
          <span className="text-[#DC483A]">3</span>
          <h1 className="text-black">Lance</h1>
        </div>


        {/* blue */}
        <div
          id="panel"
          className="flex font-gravity mb-20 bg-black h-[45px] items-center justify-center w-[800px] rounded-[20px] text-center mx-auto  "
        >
          <Link to="/login" className=" px-[57px] text-[#f5f2e5] text-[40px]">Login</Link>
          <Link to="/signup" className=" px-[57px] text-[#f5f2e5] text-[40px]">Signup</Link>
          <Link to="/search" className=" px-[57px] text-[#f5f2e5] text-[40px]">Search</Link>
          <Link to="/product" className=" px-[57px] text-[#f5f2e5] text-[40px]">Product</Link>
        </div>

  
      </div >


      {/* yellow */}
      <div className=' h-[40%] border-2 border-t-0  border-black w-[90%] text-center mx-auto'>
            <div className='border-2 border-t-0 rounded-b-md border-black w-[50%] px-5 py-2 text-center mx-auto'>
            <p>Free3Lance is a decentralized freelancing platform that connects clients and freelancers directly using blockchain technology. It eliminates intermediaries, provides transparent payment systems via smart contracts, and ensures secure user authentication through Web3 services. The platform also introduces a reputation system and dispute resolution powered by decentralized governance.</p>

            </div>
      </div>
    </div>
  );
};

export default HomePage;
