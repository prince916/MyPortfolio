import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedin, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
    

  return (
    <div className="w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-4xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">
            Prince Kumar Sharma
          </span>
        </h1>
        <h2 className="text-3xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-titleFont leading-6 tracking-wide">
          I should be hired for this role because of my relevant skills,
          experience, and passion for the industry. I’ve researched the company
          and can add value to its growth. My positive attitude, work ethics,
          and long-term goals align with the job requirements, making me a
          committed and valuable asset to the company.
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Best Skills on
          </h2>
          <div className="flex gap-4 pt-4">
            <span
              className="w-14 h-14 bg-black bg-opacity-25 text-grey-200 text-xl inline-flex
                      items-center justify-center rounded-md shadow-shadowOne hover:
                      hover:-y-translate1 transition-all hover:text-designColor cursor-pointer duration-300"
            >
              <FaReact />
            </span>
            <span
              className="w-14 h-14 bg-black bg-opacity-25 text-grey-200 text-xl inline-flex
                      items-center justify-center rounded-md shadow-shadowOne hover:
                      hover: --y-translate1 transition-all hover:text-designColor cursor-pointer duration-300"
            >
              <SiNextdotjs />
            </span>
            <span
              className="w-14 h-14 bg-black bg-opacity-25 text-grey-200 text-xl inline-flex
                      items-center justify-center rounded-md shadow-shadowOne hover:
                      hover: --y-translate1 transition-all hover:text-designColor cursor-pointer duration-300"
            >
              <SiTailwindcss />
            </span>
            <span
              className="w-14 h-14 bg-black bg-opacity-25 text-grey-200 text-xl inline-flex
                      items-center justify-center rounded-md shadow-shadowOne hover:
                      hover: --y-translate1 transition-all hover:text-designColor cursor-pointer duration-300"
            >
              <SiFigma />
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
