import React from "react";
import email from "../assets/icons/email.svg";
import location from "../assets/icons/location.svg";

function ContactMe() {
  return (
    <div className="flex flex-col items-center  mt-7 p-6">
      <div className="text-[28px] md:text-[40px] font-bold text-center relative">
        <h1 className="inline-block relative pb-2 text-zinc-200">
          Contact Me
          <span className="rounded absolute left-0 bottom-0 w-full  h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></span>
        </h1>
      </div>
      <div className="w-full md:w-[75%] md:mt-20 mt-9 flex flex-wrap md:flex-nowrap justify-evenly items-center md:gap-2 gap-10">
        {/* Left Section - Contact Info */}
        <div className="w-full md:w-[30%] flex flex-col gap-6  text-start md:mt-0 mt-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-fit font-bold text-[40px] md:text-[50px]">
                Let's Talk
              </span>
          <p className="text-zinc-300 text-[16px] md:text-[17px] font-light">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>

          <div className="flex gap-2 md:gap-6 items-center  justify-items-start">
            <img src={email} alt="Email Icon" className="w-[22px] md:w-[30px]" />
            <p className="text-zinc-300 text-[17px]">
              poulomirouth12@gmail.com
            </p>
          </div>
          <div className="flex gap-2 md:gap-7 items-center justify-start">
            <img src={location} alt="Location Icon" className="md:w-[25px] w-[17px]" />
            <p className="text-zinc-300 text-[17px]">Kolkata, India</p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-[60%] p-4 md:p-6 text-zinc-300 flex flex-col gap-4 md:gap-5">
          <div>
            <p className="mb-1">Your Name</p>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
            />
          </div>
          <div>
            <p className="mb-1">Your Email</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
            />
          </div>
          <div>
            <p className="mb-1">Write your message here</p>
            <textarea
              placeholder="Enter your message"
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded h-32"
            ></textarea>
          </div>
          <div className="flex justify-center md:justify-start w-[100%]">
          <button className="px-6 py-3 w-[200px] rounded-full text-white font-medium bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 transition">
            Submit now
          </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
