import React from "react";

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
        <div className="border border-zinc-100 h-[400px] w-[50%] rounded-md flex items-center justify-center">
          <div className="border border-zinc-300 h-[370px] w-[97%] rounded-md">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Techs;
