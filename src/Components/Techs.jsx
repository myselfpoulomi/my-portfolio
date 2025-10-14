import React from "react";
import C from "../assets/icons/C.svg";
import CPP from "../assets/icons/CPP.svg";
import CSS from "../assets/icons/CSS.svg";
import GitHub from "../assets/icons/Github-Dark.svg";
import HTML from "../assets/icons/HTML.svg";
import Java from "../assets/icons/Java-Dark.svg";
import JavaScript from "../assets/icons/JavaScript.svg";
import Reactlogo from "../assets/icons/React-Dark.svg";
import Tailwind from "../assets/icons/TailwindCSS-Dark.svg";
import Firebase from "../assets/icons/Firebase-Dark.svg";
import Nextjs from "../assets/icons/NextJS-Dark.svg";
import Vite from "../assets/icons/Vite-Dark.svg";
import ExpressJs from '../assets/icons/ExpressJS-Dark.svg'
import MongoDB from '../assets/icons/MongoDB.svg'
import Nodejs from '../assets/icons/NodeJS-Dark.svg'
import Vercel from '../assets/icons/Vercel-Dark.svg'
import Netlify from '../assets/icons/Netlify-Dark.svg'

function Techs() {
  return (
    <div id="techs" className="py-12 md:py-16">
      <div className="container-x">
      <div className="text-[32px] md:text-[40px] font-bold text-center md:mt-2 relative mt-36">
        <h1 className="inline-block relative pb-2 text-neutral-900 dark:text-zinc-200">
          Techs
          <span className="rounded absolute left-0 bottom-0 w-full h-1 theme-gradient-bg"></span>
        </h1>
      </div>
      <div className="text-center md:mt-10 mt-5 flex flex-col justify-center items-center px-0 py-0">
        <h1 className="font-medium text-[39px] sm:text-[35px] md:text-[45px] flex flex-col text-center text-neutral-900 dark:text-zinc-200 ">
          Some of Techs I like
        </h1>
        <h1 className="theme-gradient-text text-[39px] sm:text-[55px] md:text-[45px] font-medium -mt-3">
          to work with
        </h1>
      </div>
      <div className="flex items-center justify-center w-full md:mt-7 mt-4">
        <div className="w-full max-w-[900px] mx-auto rounded-md bg-white dark:bg-[#161513] animate-fadeInUp py-4 md:py-6 px-0">
          <div className="grid grid-cols-4 gap-x-8 md:gap-x-10 gap-y-10 md:gap-y-14 place-items-center">
            {[Reactlogo, ExpressJs, Nodejs, MongoDB, HTML, CSS, Tailwind, JavaScript, C, CPP, Vite, GitHub, Java, Firebase, Vercel, Netlify].map((imgSrc, index) => (
              <img
                key={index}
                className="h-10 w-10 md:h-12 md:w-12 transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl dark:invert-0 animate-float-slow"
                src={imgSrc}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Techs;
