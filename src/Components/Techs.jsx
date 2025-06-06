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
    <div id="techs" className="md:h-[750px] h-[700px]">
      <div className="text-[32px] md:text-[40px] font-bold text-center md:mt-2 relative mt-36">
        <h1 className="inline-block relative pb-2 text-zinc-200">
          Techs
          <span className="rounded absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></span>
        </h1>
      </div>
      <div className="text-center md:mt-10 mt-5 flex flex-col justify-center px-5 py-0">
        <h1 className="font-medium text-[39px] sm:text-[35px] md:text-[45px] flex flex-col text-center text-zinc-200 ">
          Some of Techs I like
        </h1>
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[39px] sm:text-[55px] md:text-[45px] font-medium -mt-3">
          to work with
        </h1>
      </div>
      <div className="h-[430px] flex items-center justify-center w-[100%] md:mt-7 mt-2">
        
          <div className=" h-[390px] md:w-[65%] w-[90%]  rounded-md bg-[#161513]">
            {[
              [Reactlogo, ExpressJs, Nodejs, MongoDB],
              [HTML, CSS, Tailwind, JavaScript],
              [C, CPP, Vite, GitHub],
              [Java,Firebase,Vercel,Netlify]
              
            ].map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="h-[120px] flex items-center justify-evenly gap-5"
              >
                {row.map((imgSrc, index) => (
                  <img
                    key={index}
                    className="h-[50px] w-[50px] transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl"
                    src={imgSrc}
                    alt=""
                  />
                ))}
              </div>
            ))}
          </div>
       
      </div>
    </div>
  );
}

export default Techs;
