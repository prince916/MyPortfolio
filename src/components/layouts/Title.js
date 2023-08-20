import React from "react";

const Title = ({ title,des }) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-bold text-sm uppercase text-designColor font-titleFont tracking-wide">
        {title}
      </h3>
      <h1 className="text-bold capitalize font-titleFont text-3xl md:text-4xl text-white">
        {des}
      </h1>
    </div>
  );
};

export default Title;
