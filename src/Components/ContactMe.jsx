import React from "react";
import email from "../assets/icons/email.svg";
import location from "../assets/icons/location.svg";

function ContactMe() {
  return (
    <div className="border border-white h-[960px] flex  flex-col items-center">
      <div className="text-[32px] md:text-[40px] font-bold text-center md:mt-2 relative mt-0">
        <h1 className="inline-block relative pb-2 text-zinc-200">
          Contact Me
          <span className="rounded absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></span>
        </h1>
      </div>
      <div className="h-[650px] w-[75%] mt-4 flex justify-between items-center">
        <div className="h-[400px] w-[35%] flex flex-col gap-7">
          <span className="text-[50px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-fit">
            Let's Talk
          </span>
          <p className="text-zinc-300 text-[17px] font-light">
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>

          <div className="flex gap-6 items-center">
            <img src={email} alt="" className="w-[30px]" />
            <p className="text-zinc-300 text-[17px]">
              poulomirouth12@gmail.com
            </p>
          </div>
          <div className="flex gap-7 items-center">
            <img src={location} alt="" className="w-[25px]" />
            <p className="text-zinc-300 text-[17px]">Kolkata , India</p>
          </div>
        </div>
        <div className="h-[420px] w-[60%] p-6 text-zinc-300 flex flex-col gap-5">
          <div className="mb-4">
            <p className="mb-1">Your Name</p>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
            />
          </div>
          <div className="mb-4">
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
          <button className="px-6 py-3 w-[200px] rounded-full text-white font-medium bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 transition">
      Submit now
    </button>

        </div>
      </div>
    </div>
  );
}

export default ContactMe;
