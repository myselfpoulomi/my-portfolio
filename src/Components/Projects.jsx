import React from "react";

function Projects() {
  return (
    <div className="h-[1180px]">
      <div className="text-[32px] md:text-[40px] font-bold text-center md:mt-2 relative mt-16">
        <h1 className="inline-block relative pb-2 text-zinc-200">
          My Latest Works
          <span className="rounded absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></span>
        </h1>
      </div>
      <div className="h-[1100px] w-[100%] border border-white flex flex-col items-center justify-center">
        <div className=" w-[90%] flex flex-col gap-4">
          <div className="border border-white h-[250px] flex items-center justify-center gap-7">
            <div className="border border-white h-[240px] w-[50%]"></div>
            <div className="border border-white h-[240px] w-[30%]"></div>
          </div>
          <div className="border border-white h-[250px] flex items-center justify-center gap-7">
            <div className="border border-white h-[240px] w-[50%]"></div>
            <div className="border border-white h-[240px] w-[30%]"></div>
          </div>
          <div className="border border-white h-[250px] flex items-center justify-center gap-7">
            <div className="border border-white h-[240px] w-[50%]"></div>
            <div className="border border-white h-[240px] w-[30%]"></div>
          </div>
          <div className="border border-white h-[250px] flex items-center justify-center gap-7">
            <div className="border border-white h-[240px] w-[50%]"></div>
            <div className="border border-white h-[240px] w-[30%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
