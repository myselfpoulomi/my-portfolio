import React from "react";

function Navbar() {
  return (
    <div className="flex items-center w-[100%] justify-around h-[100%] text-white">
      <div className="w-[50%] flex justify-center">
        <ul className="flex list-none justify-evenly w-[50%]">
          <li className="relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-pink-500 after:left-0 after:bottom-[-2px] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
            Home
          </li>
          <li className="relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-pink-500 after:left-0 after:bottom-[-2px] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
            About Me
          </li>
          <li className="relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-pink-500 after:left-0 after:bottom-[-2px] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
            Services
          </li>
          <li className="relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-pink-500 after:left-0 after:bottom-[-2px] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
            Portfolio
          </li>
          <li className="relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-pink-500 after:left-0 after:bottom-[-2px] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
            Contact
          </li>
        </ul>
      </div>

      <div className="w-[50%] flex justify-center">
        <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-2 px-8">
          Connect With Me
        </button>
      </div>
    </div>
  );
}

export default Navbar;
