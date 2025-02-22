import React from "react";
import disney from "../assets/projects/disney-colne.png";
import netflix from "../assets/projects/netflix-clone.png";
import vscode from "../assets/projects/vs-code-landing.png";
import youtube from "../assets/projects/youtube-clone.png";
import { ArrowUpRight } from "lucide-react";

function Projects() {
  return (
    <div className="md:h-[1480px] h-auto">
      <div className="text-[32px] md:text-[40px] font-bold text-center md:mt-2 relative mt-0">
        <h1 className="inline-block relative pb-2 text-zinc-200">
          My Latest Works
          <span className="rounded absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></span>
        </h1>
      </div>
      <div className="h-auto w-[100%] flex flex-col items-center justify-around mt-9">
        <div className="w-[90%] flex flex-col justify-center items-center gap-8">
          {/* 1st project */}
          <div className="border border-zinc-400 h-auto flex flex-col md:flex-row items-center justify-evenly gap-8 p-4 rounded-lg transition-all duration-300 hover:border-zinc-200 hover:shadow-lg md:w-[75%] w-[100%]">
            <div className="w-full md:w-[40%] flex flex-col justify-center items-center gap-2 text-center md:text-left">
              <h1 className="text-[30px] md:text-[50px] font-semibold text-zinc-300">
                Disney+Hotstar Clone
              </h1>
              <p className="text-zinc-300 text-[14px] md:text-[16px] font-light text-center">
                Disney+ Hotstar Clone using React.js and Tailwind CSS, capturing
                the look and feel of the popular streaming platform. With a
                clean, responsive design, smooth navigation, and dynamic content
                displays, it delivers a seamless and immersive user experience.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                <button className="px-6 py-2 border border-zinc-500 text-zinc-300 rounded-full bg-transparent backdrop-blur-md hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                  React Js
                </button>
                <button className="px-6 py-2 border border-zinc-500 text-zinc-300 rounded-full bg-transparent backdrop-blur-md hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                  Tailwind
                </button>
              </div>
            </div>
            <div className="w-full md:w-[30%] flex justify-center items-center relative group">
              <a
                href="https://project2-clone-movie-app-polu.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block"
              >
                <img
                  src={disney}
                  alt="Disney"
                  className="rounded-md w-full md:w-[475px] h-auto md:h-[230px] transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-lg"
                />
                <span className="absolute top-3 right-3 text-white bg-black/60 p-3 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-in-out">
                  ↗
                </span>
              </a>
            </div>
          </div>
          <div className="border border-zinc-400 h-auto flex flex-col md:flex-row items-center justify-evenly gap-8 p-4 rounded-lg transition-all duration-300 hover:border-zinc-200 hover:shadow-lg md:w-[75%] w-[100%]">
            <div className="w-full md:w-[40%] flex flex-col justify-center items-center gap-2 text-center md:text-left">
              <h1 className="text-[30px] md:text-[50px] font-semibold text-zinc-300">
                Disney+Hotstar Clone
              </h1>
              <p className="text-zinc-300 text-[14px] md:text-[16px] font-light text-center">
                Disney+ Hotstar Clone using React.js and Tailwind CSS, capturing
                the look and feel of the popular streaming platform. With a
                clean, responsive design, smooth navigation, and dynamic content
                displays, it delivers a seamless and immersive user experience.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                <button className="px-6 py-2 border border-zinc-500 text-zinc-300 rounded-full bg-transparent backdrop-blur-md hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                  React Js
                </button>
                <button className="px-6 py-2 border border-zinc-500 text-zinc-300 rounded-full bg-transparent backdrop-blur-md hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                  Tailwind
                </button>
              </div>
            </div>
            <div className="w-full md:w-[30%] flex justify-center items-center relative group">
              <a
                href="https://project2-clone-movie-app-polu.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block"
              >
                <img
                  src={disney}
                  alt="Disney"
                  className="rounded-md w-full md:w-[475px] h-auto md:h-[230px] transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-lg"
                />
                <span className="absolute top-3 right-3 text-white bg-black/60 p-3 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-in-out">
                  ↗
                </span>
              </a>
            </div>
          </div>
          <div className="border border-zinc-400 h-auto flex flex-col md:flex-row items-center justify-evenly gap-8 p-4 rounded-lg transition-all duration-300 hover:border-zinc-200 hover:shadow-lg md:w-[75%] w-[100%]">
            <div className="w-full md:w-[40%] flex flex-col justify-center items-center gap-2 text-center md:text-left">
              <h1 className="text-[30px] md:text-[50px] font-semibold text-zinc-300">
                Disney+Hotstar Clone
              </h1>
              <p className="text-zinc-300 text-[14px] md:text-[16px] font-light text-center">
                Disney+ Hotstar Clone using React.js and Tailwind CSS, capturing
                the look and feel of the popular streaming platform. With a
                clean, responsive design, smooth navigation, and dynamic content
                displays, it delivers a seamless and immersive user experience.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                <button className="px-6 py-2 border border-zinc-500 text-zinc-300 rounded-full bg-transparent backdrop-blur-md hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                  React Js
                </button>
                <button className="px-6 py-2 border border-zinc-500 text-zinc-300 rounded-full bg-transparent backdrop-blur-md hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                  Tailwind
                </button>
              </div>
            </div>
            <div className="w-full md:w-[30%] flex justify-center items-center relative group">
              <a
                href="https://project2-clone-movie-app-polu.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block"
              >
                <img
                  src={disney}
                  alt="Disney"
                  className="rounded-md w-full md:w-[475px] h-auto md:h-[230px] transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-lg"
                />
                <span className="absolute top-3 right-3 text-white bg-black/60 p-3 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-in-out">
                  ↗
                </span>
              </a>
            </div>
          </div>
          <div className="border border-zinc-400 h-auto flex flex-col md:flex-row items-center justify-evenly gap-8 p-4 rounded-lg transition-all duration-300 hover:border-zinc-200 hover:shadow-lg md:w-[75%] w-[100%]">
            <div className="w-full md:w-[40%] flex flex-col justify-center items-center gap-2 text-center md:text-left">
              <h1 className="text-[30px] md:text-[50px] font-semibold text-zinc-300">
                Disney+Hotstar Clone
              </h1>
              <p className="text-zinc-300 text-[14px] md:text-[16px] font-light text-center">
                Disney+ Hotstar Clone using React.js and Tailwind CSS, capturing
                the look and feel of the popular streaming platform. With a
                clean, responsive design, smooth navigation, and dynamic content
                displays, it delivers a seamless and immersive user experience.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                <button className="px-6 py-2 border border-zinc-500 text-zinc-300 rounded-full bg-transparent backdrop-blur-md hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                  React Js
                </button>
                <button className="px-6 py-2 border border-zinc-500 text-zinc-300 rounded-full bg-transparent backdrop-blur-md hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                  Tailwind
                </button>
              </div>
            </div>
            <div className="w-full md:w-[30%] flex justify-center items-center relative group">
              <a
                href="https://project2-clone-movie-app-polu.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block"
              >
                <img
                  src={disney}
                  alt="Disney"
                  className="rounded-md w-full md:w-[475px] h-auto md:h-[230px] transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-lg"
                />
                <span className="absolute top-3 right-3 text-white bg-black/60 p-3 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-in-out">
                  ↗
                </span>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center h-[100px] w-[100%]">
            <button className="px-6 py-2 border border-zinc-500 text-zinc-300 bg-transparent backdrop-blur-md hover:bg-white hover:bg-opacity-10 transition-all duration-300 rounded-lg">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
