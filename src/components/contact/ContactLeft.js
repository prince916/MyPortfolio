import React from "react";
import { ContactMe } from "../../assets/index";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div
      className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] 
            flex flex-col gap-8 p-6 lgl:p-8 rounded-lg shadow-shadowOne"
    >
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={ContactMe}
        alt="ContactMe"
      />
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl text-white font-bold font-titleFont">
          Prince Kumar Sharma
        </h1>
        <p className="text-lg text-gray-300 font-normal font-titleFont">
          Front End Developer | Competitive Programmer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum Lorem ipsum Lorem ipsum ipsum Cloe Decker is trying to
          find a lot more.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText"> +91 6289244916</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone:{" "}
          <span className="text-lightText">
            prince.sharma.ciem.cse@gmail.com
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4 pt-4">
          <span
            className="w-14 h-14 bg-black bg-opacity-25 text-grey-200 text-xl inline-flex
                      items-center justify-center rounded-md shadow-shadowOne hover:
                      hover:-y-translate1 transition-all hover:text-designColor cursor-pointer duration-300"
          >
            <FaFacebookF />
          </span>
          <span
            className="w-14 h-14 bg-black bg-opacity-25 text-grey-200 text-xl inline-flex
                      items-center justify-center rounded-md shadow-shadowOne hover:
                      hover: --y-translate1 transition-all hover:text-designColor cursor-pointer duration-300"
          >
            <FaTwitter />
          </span>
          <span
            className="w-14 h-14 bg-black bg-opacity-25 text-grey-200 text-xl inline-flex
                      items-center justify-center rounded-md shadow-shadowOne hover:
                      hover: --y-translate1 transition-all hover:text-designColor cursor-pointer duration-300"
          >
            <FaLinkedin />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
