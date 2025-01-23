import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const Navigate=useNavigate();
    return (
        <nav className="bg-[#f5f2e5] border-b-2 border-black px-8 flex justify-between items-center"
             onClick={() => Navigate('/')}>
            <div className="text-black flex font-gravity text-[40px] font-bold cursor-pointer">
                <h1 className="text-black">Free</h1>
                <span className="text-[#DC483A]">3</span>
                <h1 className="text-black">Lance</h1>
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