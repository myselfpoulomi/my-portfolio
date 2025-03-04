import React from "react";
import email from "../assets/icons/email.svg";
import location from "../assets/icons/location.svg";

function ContactMe() {

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submission started...");
  
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "ce528312-de78-4dac-8426-d783b32e5fdf");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      console.log("Form Data Object:", object);
      console.log("JSON Payload:", json);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
  
      const res = await response.json();
      console.log("API Response:", res);
  
      if (res.success) {
        console.log("Success:", res);
      } else {
        console.error("Form submission failed:", res);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };
  

  return (
    <div className="flex flex-col items-center  mt-16 py-6 justify-center">
      <div className="text-[28px] md:text-[40px] font-bold text-center relative">
        <h1 className="inline-block relative pb-2 text-zinc-200">
          Contact Me
          <span className="rounded absolute left-0 bottom-0 w-full  h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></span>
        </h1>
      </div>
      <div className="w-full px-[10%] md:mt-20 mt-9 flex flex-wrap md:flex-nowrap justify-evenly  gap-10">
        {/* Left Section - Contact Info */}
        <div className="w-full md:w-[25%] flex flex-col gap-6  text-start md:mt-0">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-fit font-bold text-[40px] md:text-[50px]">
                Let's Talk
              </span>
          <p className="text-zinc-300 text-[16px] md:text-[17px] font-light">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>

          <div className="flex gap-2 md:gap-6 items-center  justify-items-start">
            <img src={email} alt="Email Icon" className="w-[22px] md:w-[30px]" />
            <p className="text-zinc-300 text-[17px]">
              poulomirouth12@gmail.com
            </p>
          </div>
          <div className="flex gap-2 md:gap-7 items-center justify-start">
            <img src={location} alt="Location Icon" className="md:w-[22px] w-[17px]" />
            <p className="text-zinc-300 text-[17px]">Kolkata, India</p>
          </div>
        </div>

        {/* Right Section - Form */}
        <form 
        onSubmit={onSubmit}
        className="w-full md:w-[60%] px-4 md:px-6 text-zinc-300 flex flex-col gap-4 md:gap-5">
          <div>
            <label className="mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-2 bg-[#201e1b] text-white border border-gray-700 rounded"
            />
          </div>
          <div>
            <label className="mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-2 bg-[#201e1b] text-white border border-gray-700 rounded"
            />
          </div>
          <div>
            <label className="mb-1">Write your message here</label>
            <textarea
              placeholder="Enter your message"
              className="w-full p-2 bg-[#201e1b] text-white border border-gray-700 rounded h-32"
              name="massage"
            ></textarea>
          </div>
          <div className="flex justify-center md:justify-start w-[100%]">
          <button type="submit" className="px-6 py-3 w-[200px] rounded-full text-white font-medium bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 transition">
            Submit now
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
