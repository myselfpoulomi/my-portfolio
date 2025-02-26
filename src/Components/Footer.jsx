import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className="w-full py-10 flex flex-col items-center mt-24 gap-8">
      <div className="w-full max-w-[1590px] px-6 md:px-12 lg:px-24 gap-8">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          {/* Left Section */}
          <div className="flex flex-col gap-4 text-left w-full md:w-1/2">
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-fit mx-0">
              {"<Poulomi/>"}
            </div>
            <p className="text-gray-300 md:font-light max-w-[600px] mx-auto md:mx-0 font-extralight ">
              I am a frontend developer from Kolkata, India. I work with
              React.js, HTML, CSS, JavaScript, Tailwind, and Firebase. Let's
              create something together...
            </p>
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex flex-col items-start md:items-end gap-4 w-full md:w-auto pr-6">
            <h1 className="font-semibold text-[20px] text-zinc-300">
              Follow Me on
            </h1>
            <div className="flex gap-5">
              <a
                href="https://www.linkedin.com/in/poulomi-routh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-zinc-300 text-[25px] cursor-pointer hover:text-white transition" />
              </a>
              <a
                href="https://github.com/myselfpoulomi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-zinc-300 text-[25px] cursor-pointer hover:text-white transition" />
              </a>
              <a
                href="https://x.com/PoluuuCodes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="text-zinc-300 text-[25px] cursor-pointer hover:text-white transition" />
              </a>
              <a
                href="https://www.instagram.com/myself.poulomi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-zinc-300 text-[25px] cursor-pointer hover:text-white transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="w-full border-zinc-600 my-6 h-[2px] mx-auto" />

        {/* Copyright Text */}
        <div className="text-gray-400 text-sm text-center">
          <p>© 2024 Poulomi Routh. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
