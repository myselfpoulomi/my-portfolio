import React, { useState } from "react";
import disney from "../assets/projects/disney-colne.png";
import netflix from "../assets/projects/netflix-clone.png";
import vscode from "../assets/projects/vs-code-landing.png";
import youtube from "../assets/projects/youtube-clone.png";
import MIND from '../assets/projects/MIND.png';
import HealthHub from '../assets/projects/healthHub.png'
import { ArrowUpRight } from "lucide-react";

const projectData = [
  {
    title: "Hospital-Management-System",
    description:
      "A modern, responsive MERN stack app that simplifies hospital operations—managing doctors, patients, prescriptions, inventory, beds, staff, and finances. With secure role-based login and interactive revenue charts, it ensures a smooth experience for both Admin and Receptionist.",
    tech: ["MERN Stack", "Tailwind"],
    image: HealthHub,
    link: "https://hospital-management-mern-8st2.vercel.app/",
  },
  {
    title: "MIND-Mental Health Support",
    description:
     "Mind is a full stack mental wellness platform designed to support users through mood tracking, meditation, yoga, soothing music, and personalized self-care tools. It features secure user authentication, subscriptions, to-do lists, helpline access, chat support, and the option to book doctor appointments when needed.",
    tech: ["MERN Stack", "Tailwind"],
    image: MIND,
    link: "https://github.com/myselfpoulomi/MIND/",
  },
  {
    title: "Disney+Hotstar Clone",
    description:
       "Disney+ Hotstar Clone using React.js and Tailwind CSS, capturing the look and feel of the popular streaming platform. With a clean, responsive design, smooth navigation, and dynamic content displays, it delivers a seamless and immersive user experience.",
    tech: ["React Js", "Tailwind"],
    image: disney,
    link: "https://project2-clone-movie-app-polu.netlify.app/",
  },
  {
    title: "Netflix Clone",
    description:
      "A sleek and responsive Netflix Clone built with React.js, Tailwind CSS, and Firebase. It replicates the core UI and user experience of Netflix, featuring smooth navigation, dynamic content display, and secure user login powered by Firebase Authentication.",
    tech: ["React Js", "Tailwind", "Firebase"],
    image: netflix,
    link: "https://github.com/myselfpoulomi/Netflix-Clone-Reactjs",
  },
  {
    title: "VS Code Landing Page",
    description:
      "A modern and responsive landing page inspired by Visual Studio Code, built with React and Tailwind CSS. It features a clean layout, smooth design elements, and adapts seamlessly across all devices.",
    tech: ["React Js", "Tailwind"],
    image: vscode,
    link: "https://vscode-landing-page-polu.netlify.app/",
  },
  {
    title: "Youtube Clone",
    description:
      "A responsive YouTube Clone built with React.js and Tailwind CSS, replicating the platform’s clean, modern UI and layout. It delivers a smooth browsing experience with dynamic content rendering and adaptive design.",
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
