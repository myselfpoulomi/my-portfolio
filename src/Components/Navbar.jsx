import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full text-white bg-transparent">
      <div className="flex items-center justify-between md:justify-evenly px-6 py-4 md:px-10">
        {/* Logo / Brand Name */}
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">{"<Poulomi/>"}</div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links (Hidden in Mobile, Visible in Desktop) */}
        <ul className="hidden md:flex list-none justify-evenly space-x-6">
          {["Home", "About Me", "Techs", "Portfolio", "Contact"].map((item) => (
            <li
              key={item}
              className="relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-pink-500 after:left-0 after:bottom-[-2px] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Button (Desktop Only) */}
        <div className="hidden md:flex">
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl py-2 px-6 transition-transform transform hover:scale-105">
            Connect With Me
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible when Open) */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-[#111110] bg-opacity-80">
          {["Home", "About Me", "Services", "Portfolio", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer text-lg after:content-[''] after:block after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-pink-500 after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </li>
          ))}
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-2 px-6">
            Connect With Me
          </button>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
