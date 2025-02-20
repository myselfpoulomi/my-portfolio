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

function Techs() {
  return (
    <div className="h-[740px]">
      <div className="text-[32px] md:text-[40px] font-bold text-center mt-2 relative">
        <h1 className="inline-block relative pb-2 text-zinc-200">
          Teachs
          <span className="rounded absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></span>
        </h1>
      </div>
      <div className="text-center mt-10 flex flex-col justify-center h-[170px]">
        <h1 className="font-semibold text-[60px] sm:text-[35px] md:text-[45px] flex flex-col text-center text-zinc-200">
          Some of Techs I like
        </h1>
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[40px] sm:text-[55px] md:text-[60px] font-normal tracking-wider">
          to work with
        </h1>
      </div>
      <div className="h-[430px] flex items-center justify-center w-[100%] mt-7">
        
          <div className=" h-[390px] w-[60%] rounded-md bg-[#161513]">
            {[
              [Reactlogo, JavaScript, Tailwind, Firebase],
              [HTML, CSS, Nextjs, Vite],
              [C, CPP, Java, GitHub],
            ].map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="h-[120px] flex items-center justify-evenly"
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
