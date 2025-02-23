import React from "react";

function ContactMe() {
  return (
    <div className="border border-white h-[960px] flex  flex-col items-center">
      <div className="text-[32px] md:text-[40px] font-bold text-center md:mt-2 relative mt-0">
        <h1 className="inline-block relative pb-2 text-zinc-200">
          Contact Me
          <span className="rounded absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></span>
        </h1>
      </div>
      <div className="h-[880px] border border-white w-[75%] mt-4 flex justify-between">
            <div className="h-full w-[35%] border border-white">

            </div>
            <div className="h-full w-[60%] border border-white">

            </div>
      </div>
    </div>
  );
}

export default ContactMe;
