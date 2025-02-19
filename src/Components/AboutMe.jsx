import React from "react";
import profilepic from "../assets/profilepic.jpg";

function AboutMe() {
  return (
    <div className="text-white mt-8 px-4 md:px-12 lg:px-20 md:h-[850px] h-[700px] flex flex-col items-center ">
      {/* Section Title */}
      <div className="text-[32px] md:text-[40px] font-bold text-center mt-2 relative">
        <h1 className="inline-block relative pb-2 text-zinc-200">
          About Me
          <span className="rounded absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></span>
        </h1>
      </div>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-8 h-[450px]">
        {/* Profile Picture */}
        <div className="w-[80%] sm:w-[50%] md:w-[30%] lg:w-[20%] hidden sm:flex justify-center">
          <img
            className="w-full max-w-[300px] h-auto rounded-lg"
            src={profilepic}
            alt="Profile"
          />
        </div>

        {/* About Me Text */}
        <div className="w-full md:w-[55%] text-[18px] md:text-[22px] font-light text-zinc-200 flex flex-col gap-10">
          <p>
            I'm a Frontend Developer who loves building clean, responsive, and
            user-friendly websites. I work with React.js, HTML, CSS, JavaScript,
            Tailwind, and Firebase to create smooth and interactive web
            experiences.
          </p>
          <p>
            I enjoy turning ideas into reality through code, focusing on both
            design and performance. Always learning, always creating—let's build
            something amazing!
          </p>

          {/* Skills Progress Bars */}
          <div className="flex flex-col gap-[20px]">
            {[
              { skill: "HTML & CSS", width: "w-[70%]" },
              { skill: "React Js", width: "w-[60%]" },
              { skill: "JavaScript", width: "w-[50%]" },
              { skill: "Next Js", width: "w-[30%]" },
            ].map(({ skill, width }, index) => (
              <div
                key={index}
                className="flex items-center gap-5 transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              >
                <p className="min-w-[120px] text-sm md:text-base font-medium">
                  {skill}
                </p>
                <div
                  className={`h-[6px] md:h-[8px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ${width}`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto flex flex-wrap items-center justify-around gap-4 sm:gap-9 text-center text-white mt-11 ">
  {[
    { number: "4320hr+", label: "Coding" },
    { number: "120,349+", label: "Lines Of Code" },
    { number: "Active since", label: "2024" },
    { number: "Last commit", label: "2hr ago" },
  ].map(({ number, label }, index) => (
    <React.Fragment key={index}>
      <div className="flex flex-col items-center gap-1 px-2 transition-transform duration-300 hover:scale-110">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {number}
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-300">{label}</p>
      </div>
      {index !== 3 && (
        <hr className="h-6 sm:h-8 md:h-10 w-[2px] bg-gray-500 border-none hidden sm:block" />
      )}
    </React.Fragment>
  ))}
</div>

    </div>
  );
}

export default AboutMe;
