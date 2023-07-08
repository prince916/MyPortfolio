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
        <ul className="w-full grid grid-cols-4">
          <li 
            onClick={() => 
            setEducationData(true) &
            setSkillData(false) &
            setExperienceData(false) &
            setAchievementsData(false)
          } 
          className="w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] rounded-none border-none">
            Education
          </li>
          <li 
            onClick={() => 
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementsData(false)
          } 
          className="w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] rounded-none border-none">
            Skills
          </li>
          <li onClick={() => 
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementsData(false)
          } 
          className="w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] rounded-none border-none">
            Experience
          </li>
          <li 
            onClick={() => 
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementsData(true)
          } 
          className="w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] rounded-none border-none">
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
      {/* <Education /> */}
      {/* <Skills /> */}
      {/* <Experience /> */}
      {/* <Achievements /> */}
    </section>
  );
};

export default Resume;
