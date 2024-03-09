import React from "react";
import { withoutBG } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[400px] h-[380px] lgl:w-[600px] lgl:h-[580px] z-10"
        src={withoutBG}
        alt="MypicImage"
      />
      <div className="absolute w-[250px] h-[300px] lgl:w-[400px] lgl:h-[300px] bg-gradient-to from-[#le2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
