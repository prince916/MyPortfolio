import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { logo } from "../../assets/index";

const Footer = () => {
  return (
    <div className="w-full font-titleFont py-20 h-auto border-b-[1px] border-b-black grid grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4 pt-4">
          <span
            className="w-12 h-12 bg-black bg-opacity-25 text-grey-200 text-xl inline-flex
                      items-center justify-center rounded-md shadow-shadowOne hover:
                      hover:-y-translate1 transition-all hover:text-designColor cursor-pointer duration-300"
          >
            <FaFacebookF />
          </span>
          <span
            className="w-12 h-12 bg-black bg-opacity-25 text-grey-200 text-xl inline-flex
                      items-center justify-center rounded-md shadow-shadowOne hover:
                      hover: --y-translate1 transition-all hover:text-designColor cursor-pointer duration-300"
          >
            <FaTwitter />
          </span>
          <span
            className="w-12 h-12 bg-black bg-opacity-25 text-grey-200 text-xl inline-flex
                      items-center justify-center rounded-md shadow-shadowOne hover:
                      hover: --y-translate1 transition-all hover:text-designColor cursor-pointer duration-300"
          >
            <FaLinkedin />
          </span>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-lg uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              About
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
              transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Portfolio
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
              transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Services
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
              transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Blog
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
              transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Contact
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
              transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-lg uppercase text-designColor tracking-wider">
          Resources
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Authentication
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
              transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              System Status
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
              transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Terms of service
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
              transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Pricing
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
              transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Over Right
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
              transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-lg uppercase text-designColor tracking-wider">
          Developers
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Documentation
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
              transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Authentication
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
              transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              API References
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
              transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Support
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
              transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Open Source
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
              transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
