import React from "react";
import disney from "../assets/projects/disney-colne.png";
import netflix from "../assets/projects/netflix-clone.png";
import vscode from "../assets/projects/vs-code-landing.png";
import youtube from "../assets/projects/youtube-clone.png";
import { ArrowUpRight } from "lucide-react";

function Projects() {
  return (
    <div className="h-[1380px]">
      <div className="text-[32px] md:text-[40px] font-bold text-center md:mt-2 relative mt-16">
        <h1 className="inline-block relative pb-2 text-zinc-200">
          My Latest Works
          <span className="rounded absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></span>
        </h1>
      </div>
      <div className="h-[1210px] w-[100%] flex flex-col items-center justify-around">
        <div className=" w-[75%] flex flex-col gap-8">
          /{/* 1st project */}
          <div className="border border-zinc-400 h-[250px] flex items-center justify-evenly gap-8 rounded-lg transition-all duration-300 hover:border-zinc-200 hover:shadow-lg">
  <div className="h-[240px] w-[40%] flex flex-col justify-center items-center gap-2">
    <h1 className="text-[50px] font-semibold text-zinc-300">
      Disney+Hotstar-Clone
    </h1>
    <p className="text-zinc-300 text-[16px] text-center font-light">
      Disney+ Hotstar Clone using React.js and Tailwind CSS, capturing the look and feel of the popular streaming platform. With a clean, responsive design, smooth navigation, and dynamic content displays, it delivers a seamless and immersive user experience.
    </p>

    <div className="flex gap-4 mt-4">
      <button className="px-6 py-2 border border-zinc-500 text-zinc-300 rounded-full bg-transparent backdrop-blur-md hover:bg-white hover:bg-opacity-10 transition-all duration-300">
        React Js
      </button>
      <button className="px-6 py-2 border border-zinc-500 text-zinc-300 rounded-full bg-transparent backdrop-blur-md hover:bg-white hover:bg-opacity-10 transition-all duration-300">
        Tailwind
      </button>
    </div>
  </div>

  <div className="h-[240px] w-[30%] flex justify-center items-center relative group">
    <a
      href="https://project2-clone-movie-app-polu.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="relative block"
    >
      <img
        src={disney}
        alt="Disney"
        className="rounded-md h-[230px] w-[475px] transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-lg"
      />
      <ArrowUpRight
        className="absolute top-3 right-3 text-white bg-black/60 p-3 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-in-out"
        size={40}
      />
    </a>
  </div>
</div>

          {/* 2nd project */}
          <div className="border border-zinc-400 h-[250px] flex items-center justify-evenly gap-7 rounded-lg transition-all duration-300 hover:border-zinc-200 hover:shadow-lg">
  <div className="h-[240px] w-[40%] flex flex-col justify-center items-center gap-2">
    <h1 className="text-[50px] font-semibold text-zinc-300">Netflix-Clone</h1>
    <p className="text-zinc-300 text-[16px] text-center font-light">
      Netflix Clone built with React.js, Tailwind CSS, and Firebase, offering a sleek and responsive UI. It includes user authentication, secure data storage, and dynamic content rendering, delivering a seamless and immersive streaming experience.
    </p>

    <div className="flex gap-4 mt-4">
      <button className="px-6 py-2 border border-zinc-500 text-zinc-300 rounded-full bg-transparent backdrop-blur-md hover:bg-white hover:bg-opacity-10 transition-all duration-300">
        React Js
      </button>
      <button className="px-6 py-2 border border-zinc-500 text-zinc-300 rounded-full bg-transparent backdrop-blur-md hover:bg-white hover:bg-opacity-10 transition-all duration-300">
        Tailwind
      </button>
      <button className="px-6 py-2 border border-zinc-500 text-zinc-300 rounded-full bg-transparent backdrop-blur-md hover:bg-white hover:bg-opacity-10 transition-all duration-300">
        Firebase
      </button>
    </div>
  </div>

  <div className="h-[240px] w-[30%] flex justify-center items-center relative group">
    <a
      href="https://github.com/myselfpoulomi/Netflix-Clone-Reactjs"
      target="_blank"
      rel="noopener noreferrer"
      className="relative block"
    >
      <img
        src={netflix}
        alt="Netflix"
        className="rounded-md h-[230px] w-[475px] transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-lg"
      />
      <ArrowUpRight
        className="absolute top-3 right-3 text-white bg-black/60 p-3 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-in-out"
        size={40}
      />
    </a>
  </div>
</div>

          {/* 3rd project */}
          <div className="border border-zinc-400 h-[250px] flex items-center justify-evenly gap-7 rounded-lg transition-all duration-300 hover:border-zinc-200 hover:shadow-lg">
  <div className="h-[240px] w-[40%] flex flex-col justify-center items-center gap-2">
    <h1 className="text-[50px] font-semibold text-zinc-300">
      VS Code Landing Page
    </h1>
    <p className="text-zinc-300 text-[16px] text-center font-light">
      VS Code Landing Page using HTML and Tailwind CSS, featuring a clean, modern, and fully responsive design. The page highlights VS Code’s key features with a sleek layout and smooth styling, ensuring an intuitive user experience.
    </p>

    <div className="flex gap-4 mt-4">
      <button className="px-6 py-2 border border-zinc-500 text-zinc-300 rounded-full bg-transparent backdrop-blur-md hover:bg-white hover:bg-opacity-10 transition-all duration-300">
        Tailwind
      </button>
    </div>
  </div>

  <div className="h-[240px] w-[30%] flex justify-center items-center relative group">
    <a
      href="https://vscode-landing-page-polu.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="relative block"
    >
      <img
        src={vscode}
        alt="VS Code"
        className="rounded-md h-[230px] w-[475px] transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-lg"
      />
      <ArrowUpRight
        className="absolute top-3 right-3 text-white bg-black/60 p-3 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-in-out"
        size={40}
      />
    </a>
  </div>
</div>

          {/* 4th project */}
          <div className="border border-zinc-400 h-[250px] flex items-center justify-evenly gap-7 rounded-lg transition-all duration-300 hover:border-zinc-200 hover:shadow-lg">
            <div className="h-[240px] w-[40%] flex flex-col justify-center items-center gap-2">
              <h1 className="text-[50px] font-semibold text-zinc-300">
                Youtube Clone
              </h1>
              <p className="text-zinc-300 text-[16px] text-center font-light">
                YouTube Clone using React.js and Tailwind CSS, recreating its
                modern UI, responsive design, and smooth navigation. It features
                dynamic video listings, a sleek homepage, and an intuitive user
                experience, making it feel just like the real platform.
              </p>

              <div className="flex gap-4 mt-4">
                <button className="px-6 py-2 border border-zinc-500 text-zinc-300 rounded-full bg-transparent backdrop-blur-md hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                  React Js
                </button>
                <button className="px-6 py-2 border border-zinc-500 text-zinc-300 rounded-full bg-transparent backdrop-blur-md hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                  Tailwind
                </button>
              </div>
            </div>

            <div className="h-[240px] w-[30%] flex justify-center items-center relative group">
              <a
                href="https://project3-video-app-clone-polu.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block"
              >
                <img
                  src={youtube}
                  alt="YouTube Clone"
                  className="rounded-md h-[230px] w-[475px] transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-lg"
                />
                <ArrowUpRight
                  className="absolute top-3 right-3 text-white bg-black/60 p-3 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-in-out"
                  size={40}
                />
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
