import React from "react";
import { Mypic2 } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-1/2 flex justify-center items-center relative">
      <img
        className="w-[620px] h-[600px] z-10"
        src={Mypic2}
        alt="Mypic"
      />
      <div className="absolute w-[400px] h-[300px] bg-gradient-to from-[#le2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
