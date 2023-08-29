import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="pl-2 lgl:pl-0">
        <img
          className="w-[75px] h-[75px] rounded-full border-[1px] border-[#545252]"
          src={logo}
          alt="logo"
        />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div className="">
                <img
                  className="w-[75px] h-[75px] rounded-full border-[1px] border-[#545252] "
                  src={logo}
                  alt="logo"
                />
                <p className="text-sm text-gray-400 mt-2">
                  I should be hired for this role because of my relevant skills,
                  experience, and passion for the industry. I’ve researched the
                  company and can add value to its growth. My positive attitude,
                  work ethics, and long-term goals align with the job
                  requirements, making me a committed and valuable asset to the
                  company.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4 pt-4">
                  <span
                    className="w-14 h-14 bg-black bg-opacity-25 text-grey-200 text-xl inline-flex
                      items-center justify-center rounded-md shadow-shadowOne hover:
                      hover:-y-translate1 transition-all hover:text-designColor cursor-pointer duration-300"
                  >
                    <a href="https://www.facebook.com/login/" target='_blank'>
                      <FaFacebookF />
                    </a>
                  </span>
                  <span
                    className="w-14 h-14 bg-black bg-opacity-25 text-grey-200 text-xl inline-flex
                      items-center justify-center rounded-md shadow-shadowOne hover:
                      hover: --y-translate1 transition-all hover:text-designColor cursor-pointer duration-300"
                  >
                    <a href="https://twitter.com/Prince_Kumar_19" target='_blank'>
                      <FaTwitter />
                    </a>
                  </span>
                  <span
                    className="w-14 h-14 bg-black bg-opacity-25 text-grey-200 text-xl inline-flex
                      items-center justify-center rounded-md shadow-shadowOne hover:
                      hover: --y-translate1 transition-all hover:text-designColor cursor-pointer duration-300"
                  >
                    <a href="https://www.linkedin.com/in/prince-kumar-sharma-873549202/" target='_blank'>
                      <FaLinkedin />
                    </a>
                  </span>
                  <span
                    className="w-14 h-14 bg-black bg-opacity-25 text-grey-200 text-xl inline-flex
                      items-center justify-center rounded-md shadow-shadowOne hover:
                      hover: --y-translate1 transition-all hover:text-designColor cursor-pointer duration-300"
                  >
                    <a href="https://www.youtube.com/channel/UCDdP4xGWU70ptnd8tMD5-bw" target='_blank'>
                      <FaYoutube />
                    </a>
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
