import React, { useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../Assets/neosoft.webp";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-gradient-to-r from-[#ffffff] to-[#0077b6] py-2 mt-10 relative z-10">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white relative">
        <h1 className=" cursor-pointer w-[80px] justify-center items-center">
          <img
            src={logo}
            alt="MindTree Logo"
            className="transform hover:scale-110 transition-transform duration-500 "
          />
        </h1>
        <h3 className="p-4 text-white font-sans font-bold text-3xl">Kanban Board for Task Management</h3>
        <ul className="hidden md:flex">
          <li className="p-4 cursor-pointer text-white font-sans font-semibold text-lg">
            <a href="#home">Total: </a>
          </li>
          <li className="p-4 cursor-pointer font-sans font-semibold text-lg text-white">
            <a href="#dashboard">Pending: </a>
          </li>
          <li className="p-4 cursor-pointer font-sans font-semibold text-lg  text-white">
            <a href="#contact">Completed: </a>
          </li>
          <li className="p-4 cursor-pointer font-sans font-semibold text-2xl  text-white">
            <a href="#contact">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;