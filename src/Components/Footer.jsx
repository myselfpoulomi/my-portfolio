// import React from "react";
// import { FaUser } from "react-icons/fa";

// function Footer() {
//   return (
//     <div className="h-auto mt-24 text-zinc-300 py-10 flex flex-col px-[17rem]">
//       <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-12 w-[80%]">

//         {/* Left Section - Logo & Bio */}
//         <div className="flex flex-col gap-2">
//         <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-fit">{"<Poulomi/>"}</div>
//           <p className="text-gray-300 text-sm md:text-base max-w-[400px]">
//             I am a frontend developer from the USA with 10 years of experience in
//             companies like Microsoft, Tesla, and Apple.
//           </p>
//         </div>

//         {/* Right Section - Newsletter */}
//         <div className="flex items-center gap-3 w-full md:w-auto">
//           <div className="flex items-center bg-gray-800 text-gray-400 px-4 py-2 rounded-full w-full md:w-[250px]">
//             {/* <FaUser className="text-lg mr-2" /> */}
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="bg-transparent outline-none text-white w-full"
//             />
//           </div>
//           <button className="px-4 py-2 rounded-full text-white font-medium bg-gradient-to-r from-purple-500 to-orange-500 hover:opacity-90 transition">
//             Subscribe
//           </button>
//         </div>
//       </div>

//       {/* Divider */}
//       <hr className="border-gray-600 my-6" />

//       {/* Bottom Links */}
//       <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
//         <p>© 2023 Alex Bennett. All rights reserved.</p>
//         <div className="flex gap-6 mt-3 md:mt-0">
//           <a href="#" className="hover:text-white transition">Term of Services</a>
//           <a href="#" className="hover:text-white transition">Privacy Policy</a>
//           <a href="#" className="hover:text-white transition">Connect with me</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;

import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


function Footer() {
  return (
    <div className="h-[280px] mt-24 flex flex-col items-center">
      <div className=" flex items-center w-[68%] justify-between">
        {/* Left Section */}
        <div className="flex flex-col gap-4  w-[40%] ">
          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-fit">
            {"<Poulomi/>"}
          </div>
          <p className="text-gray-300 font-light">
            I am a frontend developer from Kolkata, India. I work with React.js,
            HTML, CSS, JavaScript, Tailwind, and Firebase. Let's create
            something together...
          </p>
        </div>

        {/* Right Section */}
        <div className="flex w-[50%] ">
          <div className="flex flex-col w-full items-end gap-5">
            <h1 className="font-semibold text-[25px] text-zinc-300">
              Follow Me on
            </h1>
            <div className="flex gap-6">
              <FaLinkedin className="text-zinc-300 text-[30px]"/>
              <FaGithub className="text-zinc-300 text-[30px]"/>
              <FaXTwitter className="text-zinc-300 text-[30px]"/>
              <FaInstagram className="text-zinc-300 text-[30px]"/>
            </div>
          </div>
        </div>
      </div>

      {/* Centered hr tag */}
      <hr className="w-[71%] border-zinc-600 my-6 h-[2px] bg-zinc-600 mx-auto" />
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>© 2024 Poulomi Routh. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
