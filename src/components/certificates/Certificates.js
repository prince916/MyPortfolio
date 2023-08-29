import React from "react";
import Title from "../layouts/Title";
import { HiArrowRight } from "react-icons/hi";

const Certificates = ({ des }) => {
  return (
    <section
      id="certificates"
      className="w-full pt-10 pb-20 flex items-center border-b-[1px] font-titleFont border-b-black"
    >
      <div className="w-full flex flex-col gap-4px lgl:gap-8">
        <div className="flex justify-center items-center text-center">
          <Title title="Certificates" des="My Achivements" />
        </div>
        <div className="h-80 overflow-y-hidden">
          <div
            className="flex h-full flex-col gap-8 translate-y-20 
          group-hover:translate-y-4 transition-transform duration-500"
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
                TechOne
              </h2>
              <div className="flex flex-col gap-8">
                <p className="text-sm">{des}</p>
                <span className="text-2xl text-designColor">
                  <HiArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
