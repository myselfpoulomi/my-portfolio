import React from "react";
import { Link } from "react-scroll";
import profilepic from "../assets/profilepic.jpg";
import RESUME_POULOMI_ROUTH from '../assets/RESUME_POULOMI_ROUTH.pdf';

function Home() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = RESUME_POULOMI_ROUTH;
    link.download = "RESUME_POULOMI_ROUTH.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="md:h-[770px] h-[600px] text-white flex items-center justify-center flex-col gap-1 px-6 md:px-0 mt-3">
      <div className=" flex flex-col justify-center items-center md:gap-2 gap-5 md:h-[580px] h-[500px] w-full  md:w-[40%]">
        <img
          src={profilepic}
          alt="Description of image"
          className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] object-cover rounded-full"
        />
        <div className="font-bold text-[30px] md:text-[60px] justify-center items-center flex flex-col text-center">
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
          <div className="md:w-[80%] w-[90%]">
            <p className="md:text-[17px] text-[15px] font-light text-center text-zinc-300">
              I'm a frontend developer who builds websites using React.js, HTML,
              CSS, and JavaScript. I use Tailwind for styling and Firebase for
              backend services. I focus on creating clean, responsive, and
              user-friendly web applications.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[40px] w-full max-w-[350px] md:w-[30%] flex items-center justify-evenly mt-0">
        <Link to="contact" smooth={true} duration={800}>
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl py-2 px-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            Connect With Me
          </button>
        </Link>

        <button
          onClick={handleDownloadResume}
          className="relative py-2 px-6 rounded-xl text-white bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border border-[#DB4BB0] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          <span className="absolute inset-0 rounded-xl border-[#DB4BB0]"></span>
          My Resume
        </button>
      </div>
    </div>
  );
}

export default Home;
