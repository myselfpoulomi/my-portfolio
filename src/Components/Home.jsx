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
    <div id="home" className="text-neutral-900 dark:text-white flex items-center justify-center flex-col gap-4 mt-6 py-10 md:py-16">
      <div className="container-x">
      <div className="flex flex-col justify-center items-center md:gap-3 gap-5 w-full">
        <img
          src={profilepic}
          alt="Description of image"
          className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] object-cover rounded-full animate-float hover-float shadow-lg"
        />
        <div className="font-bold text-[30px] md:text-[60px] justify-center items-center flex flex-col text-center">
          <div className="flex items-center">
            <h1>
              Hey!
              <span className="ml-2 theme-gradient-text">
                I'm Poulomi
              </span>
            </h1>
          </div>
          <div>
            <h1> a FullStack Developer</h1>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="w-full max-w-[720px] animate-fadeInUp">
            <p className="md:text-[17px] text-[15px] font-light text-center text-neutral-700 dark:text-zinc-300">
            I'm a full-stack developer who builds clean, responsive web apps using React, Tailwind, and JavaScript on the frontend, with Node.js, Express, and MongoDB on the backend. I deploy using Vercel and Netlify, and focus on creating smooth, user-friendly experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[520px] flex flex-wrap gap-6 items-center justify-center mx-auto mt-6">
        <Link to="contact" smooth={true} duration={800}>
          <button className="rounded-xl py-2 px-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg theme-gradient-bg text-white">
            Connect With Me
          </button>
        </Link>

        <button
          onClick={handleDownloadResume}
          className="relative py-2 px-6 rounded-xl text-white bg-clip-text theme-gradient-text border theme-border transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          <span className="absolute inset-0 rounded-xl theme-border"></span>
          My Resume 
        </button>
      </div>
      </div>
    </div>
  );
}

export default Home;
