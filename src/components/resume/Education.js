import React from "react";
import { ResumeCard } from "./ResumeCard";


const Education = () => {
  return (
    <div className="w-full flex gap-20">
      <div>
        <div className="py-10 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">
            2010-Present
          </p>
          <h2 className="text-4xl font-bold">Education Quality</h2>
        </div>
        <div
          className="mt-14 w-full h-[1000px] border-l-[6px] border-black
          border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="B.Tech in Computer Science"
            subTitle="Calcutta Institute of Engineering and Management"
            result="--"
            des="I am currently studing in 4th year it will take a few months more in compliting my Bachelor's degree. If i taught about my college that it is an average semi government college and overall the faculty, environment is good."
          />
          <ResumeCard
            title="Higher Secondary"
            subTitle="Shree Jain Vidyalaya"
            result="82%"
            des="I passed my H.S in the year 2020 with a good score. If i taught about my school that was the best school and overall the faculty, environment is good."
          />
          <ResumeCard
            title="Secondary School"
            subTitle="Shree Jain Vidyalaya"
            result="76%"
            des="I passed my H.S in the year 2018 with a good score. If i taught about my school that was the best school and overall the faculty, environment is good."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">
            2021-Present
          </p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div
          className="mt-14 w-full h-[1000px] border-l-[6px] border-black
            border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="Front-End Developer"
            subTitle="Professional Websites"
            result=">15"
            des="I am currently studing in 4th year it will take a few months more in compliting my Bachelor's degree. If i taught about my college that it is an average semi government college and overall the faculty, environment is good."
          />
          <ResumeCard
            title="UI/UX Designer"
            subTitle="Professional Designs"
            result=">7"
            des="I am currently studing in 4th year it will take a few months more in compliting my Bachelor's degree. If i taught about my college that it is an average semi government college and overall the faculty, environment is good."
          />
          <ResumeCard
            title="Competitive Programmer"
            subTitle="My self"
            result=">1500"
            des="I am currently studing in 4th year it will take a few months more in compliting my Bachelor's degree. If i taught about my college that it is an average semi government college and overall the faculty, environment is good."
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
