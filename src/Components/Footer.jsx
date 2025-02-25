import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className="w-full py-10 flex flex-col justify-center items-center">
      <div className="w-[70%] pr-9">
        {/* Centered Content Wrapper */}
        <div className="mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Left Section */}
          <div className="flex flex-col gap-4 md:w-1/2">
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-fit">
              {"<Poulomi/>"}
            </div>
            <p className="text-gray-300 font-light max-w-[500px]">
              I am a frontend developer from Kolkata, India. I work with
              React.js, HTML, CSS, JavaScript, Tailwind, and Firebase. Let's
              create something together...
            </p>
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h1 className="font-semibold text-[20px] text-zinc-300">
              Follow Me on
            </h1>
            <div className="flex gap-5">
              <FaLinkedin className="text-zinc-300 text-[25px] cursor-pointer hover:text-white transition" />
              <FaGithub className="text-zinc-300 text-[25px] cursor-pointer hover:text-white transition" />
              <FaXTwitter className="text-zinc-300 text-[25px] cursor-pointer hover:text-white transition" />
              <FaInstagram className="text-zinc-300 text-[25px] cursor-pointer hover:text-white transition" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="w-full max-w-[1300px] border-zinc-600 my-6 h-[2px] mx-auto" />

        {/* Copyright Text */}
        <div className="text-gray-400 text-sm text-center">
          <p>© 2024 Poulomi Routh. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
