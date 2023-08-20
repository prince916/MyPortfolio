import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Experience from "./Experience";

const Resume = () => {
  const [educationData,setEducationData] = useState(true);
  const [skillData,setSkillData] = useState(false);
  const [experienceData,setExperienceData] = useState(false);
  const [achievementsData,setAchievementsData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Fresher" des="My Resume" />
      </div>
      <div className="w-full flex gap-20">
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li 
            onClick={() => 
            setEducationData(true) &
            setSkillData(false) &
            setExperienceData(false) &
            setAchievementsData(false)
            } 
            className= {`${
            educationData ? "border-designColor rounded-lg" : "border-transparent"
            }  w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] rounded-none`} >
            Education
          </li>
          <li 
            onClick={() => 
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementsData(false)
            } 
          className= {`${
            skillData ? "border-designColor rounded-lg" : "border-transparent"
            }  w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] rounded-none`}>
            Skills
          </li>
          <li onClick={() => 
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementsData(false)
            } 
          className= {`${
            experienceData ? "border-designColor rounded-lg" : "border-transparent"
            }  w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] rpunded-none`}>
            Experience
          </li>
          <li 
            onClick={() => 
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementsData(true)
            } 
          className= {`${
            achievementsData ? "border-designColor rounded-lg" : "border-transparent"
            }  w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] rounded-none`}>
            Achievements
          </li>
        </ul>
      </div>

      {
        educationData && <Education />
      }
      {
        skillData && <Skills />
      }
      {
        experienceData && <Experience />
      }
      {
        achievementsData && <Achievements />
      }
    </section>
  );
};

export default Resume;
