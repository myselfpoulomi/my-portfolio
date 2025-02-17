import React from "react";
import profilepic from "../assets/profilepic.jpg";

function Home() {
  return (
    <div className="h-[750px] text-white flex items-center justify-center flex-col gap-1">
      <div className="flex flex-col justify-center items-center gap-2 h-[580px] w-[40%]">
        <img
          src={profilepic}
          alt="Description of image"
          className="w-[220px] h-[220px] object-cover rounded-full"
        />
        <div className="font-bold text-[60px] justify-center items-center flex flex-col">
          <div className="flex items-center">
            <h1>
              Hey!
              <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                I'm Poulomi
              </span>
            </h1>
          </div>
          <div>
            <h1> a Frontend Developer</h1>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <div className="w-[80%] max-w-[800px]">
            <p className="text-[17px] font-light text-center text-zinc-300">
              I'm a frontend developer who builds websites using React.js, HTML,
              CSS, and JavaScript. I use Tailwind for styling and Firebase for
              backend services. I focus on creating clean, responsive, and
              user-friendly web applications.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[40px] w-[30%] flex items-center justify-evenly">
      <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl py-2 px-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
  Connect With Me
</button>

<button className="relative py-2 px-6 rounded-xl text-white bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-2 border-[#DB4BB0] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
  <span className="absolute inset-0 rounded-xl border-[#DB4BB0]"></span>
  My Resume
</button>

      </div>
    </div>
  );
}

export default Home;
