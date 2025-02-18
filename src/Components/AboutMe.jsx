import React from "react";
import profilepic from "../assets/profilepic.jpg";

function AboutMe() {
  return (
    <div className="h-[680px] text-white mt-8">
      <div className="text-[40px] font-bold text-center mt-2 relative ">
        <h1 className="inline-block relative pb-2 text-zinc-200">
          About Me
          <span className=" rounded absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></span>
        </h1>
      </div>
      <div className="flex items-center justify-center gap-20 h-[460px] mt-2">
        <div className="mt-6 w-[16%] flex justify-center h-[90%]">
          <img className="h-[400px] rounded-lg" src={profilepic} alt="" />
        </div>
        <div className="w-[55%] h-[90%]  text-[22px] font-light text-zinc-200 flex flex-col gap-3 justify-between">
          <div className="flex flex-col gap-5">
            <p>
              I'm a Frontend Developer who loves building clean, responsive, and
              user-friendly websites. I work with React.js, HTML, CSS,
              JavaScript, Tailwind, and Firebase to create smooth and
              interactive web experiences.
            </p>
            <p>
              I enjoy turning ideas into reality through code, focusing on both
              design and performance. Always learning, always creating—let,s
              build something amazing!
            </p>
          </div>
          <div className=" flex flex-col gap-[20px] ">
            <div className="flex gap-[50px] items-center transition duration-300">
              <p className="min-w-[150px] font-[400]">HTML & CSS</p> <hr className="w-[50%] outline-none border-none h-[8px] rounded-[50px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            </div>
            <div className="flex gap-[50px] items-center transition duration-300">
              <p  className="min-w-[150px] font-[400]">React Js</p> <hr className="w-[60%] outline-none border-none h-[8px] rounded-[50px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            </div>
            <div className="flex gap-[50px] items-center transition duration-300">
              <p  className="min-w-[150px] font-[400]">JavaScript</p> <hr className="w-[40%] outline-none border-none h-[8px] rounded-[50px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            </div>
            <div className="flex gap-[50px] items-center transition duration-300">
              <p  className="min-w-[150px] font-[400]">Next Js</p> <hr className="w-[20%] outline-none border-none h-[8px] rounded-[50px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
