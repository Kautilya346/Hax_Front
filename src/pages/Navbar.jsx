import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import aptosImage from "../assets/aptos.png";


const Navbar = () => {
    const Navigate=useNavigate();
    return (
        <nav className="bg-[#f5f2e5] border-b-2 border-black px-8 flex justify-between items-center"
            >
            <div className="text-black flex font-gravity text-[40px] font-bold cursor-pointer"
             onClick={() => Navigate('/')}>
                <h1 className="text-black">Free</h1>
                <span className="text-[#DC483A]">3</span>
                <h1 className="text-black">Lance</h1>
            </div>
            <div className='flex items-center w-full justify-end mr-3'>
            <p className='font-mono font-semibold text-lg mr-2'>Powered By</p>
            <div className=''>
            <img src={aptosImage} alt="" className='w-20 h-5' />
            </div>
            </div>
            <a
                href="https://github.com/Kautilya346/Hax_Front"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black text-[40px] transition-transform transform hover:scale-110 hover:text-[#DC483A] duration-500 ease-in-out"
            >
                <FaGithub />
            </a>
        </nav>
    );
};

export default Navbar;