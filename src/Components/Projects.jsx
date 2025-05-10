import React, { useState } from "react";
import disney from "../assets/projects/disney-colne.png";
import netflix from "../assets/projects/netflix-clone.png";
import vscode from "../assets/projects/vs-code-landing.png";
import youtube from "../assets/projects/youtube-clone.png";
import MIND from '../assets/projects/MIND.png';
import { ArrowUpRight } from "lucide-react";

const projectData = [
  {
    title: "Hospital-Management-System",
    description:
      "A modern, responsive MERN stack app that simplifies hospital operations—managing doctors, patients, prescriptions, inventory, beds, staff, and finances. With secure role-based login and interactive revenue charts, it ensures a smooth experience for both Admin and Receptionist.",
    tech: ["MERN Stack", "Tailwind"],
    image: disney,
    link: "https://github.com/myselfpoulomi/Hospital-Management-mern/",
  },
  {
    title: "MIND-Mental Health Support",
    description:
      "Mind is a full stack mental wellness platform designed to support users through mood tracking, meditation, yoga, soothing music, and personalized self-care tools.",
    tech: ["MERN Stack", "Tailwind"],
    image: MIND,
    link: "https://github.com/myselfpoulomi/MIND/",
  },
  {
    title: "Disney+Hotstar Clone",
    description:
      "Disney+ Hotstar Clone using React.js and Tailwind CSS, capturing the look and feel of the popular streaming platform.",
    tech: ["React Js", "Tailwind"],
    image: disney,
    link: "https://project2-clone-movie-app-polu.netlify.app/",
  },
  {
    title: "Netflix Clone",
    description:
      "Netflix Clone built with React.js, Tailwind CSS, and Firebase, offering a sleek and responsive UI.",
    tech: ["React Js", "Tailwind", "Firebase"],
    image: netflix,
    link: "https://github.com/myselfpoulomi/Netflix-Clone-Reactjs",
  },
  {
    title: "VS Code Landing Page",
    description:
      "VS Code Landing Page using HTML and Tailwind CSS, featuring a clean, modern, and fully responsive design.",
    tech: ["React Js", "Tailwind"],
    image: vscode,
    link: "https://vscode-landing-page-polu.netlify.app/",
  },
  {
    title: "Youtube Clone",
    description:
      "YouTube Clone using React.js and Tailwind CSS, recreating its modern UI and responsive design.",
    tech: ["React Js", "Tailwind"],
    image: youtube,
    link: "https://project3-video-app-clone-polu.netlify.app/",
  },
];

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projectData : projectData.slice(0, 3);

  return (
    <div id="portfolio" className="h-auto mt-36">
      <div className="text-[32px] md:text-[40px] font-bold text-center md:mt-2 relative mt-0">
        <h1 className="inline-block relative pb-2 text-zinc-200">
          My Latest Works
          <span className="rounded absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></span>
        </h1>
      </div>

      <div className="h-auto w-full flex flex-col items-center justify-around mt-14">
        <div className="w-[90%] flex flex-col justify-center items-center gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="border border-zinc-700 h-auto flex flex-col md:flex-row items-center justify-evenly gap-8 p-4 rounded-xl transition-all duration-300 hover:border-zinc-500 hover:shadow-lg md:w-[75%] w-full"
            >
              <div className="w-full md:w-[50%] flex flex-col justify-center items-center gap-2 text-center md:text-left">
                <h1 className="text-[26px] md:text-[32px] font-semibold text-zinc-300">
                  {project.title}
                </h1>
                <p className="text-zinc-300 text-[14px] md:text-[16px] font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                  {project.tech.map((tech, i) => (
                    <button
                      key={i}
                      className="px-6 py-2 border border-zinc-500 text-zinc-300 rounded-full bg-transparent backdrop-blur-md hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-[35%] flex justify-center items-center relative group">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-md w-full md:w-[475px] h-auto md:h-[230px] transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-lg"
                  />
                  <ArrowUpRight
                    className="absolute top-3 right-3 text-white bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-in-out"
                    size={40}
                  />
                </a>
              </div>
            </div>
          ))}

          {!showAll && (
            <div className="flex justify-center items-center h-[100px] w-full">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-2 border border-zinc-500 text-zinc-300 bg-transparent backdrop-blur-md hover:bg-white hover:bg-opacity-10 transition-all duration-300 rounded-lg"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
