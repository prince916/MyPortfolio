import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaCode } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "../Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Competitive Coding"
          des="I am deeply passionate about competitive coding, finding joy in solving complex algorithmic problems and constantly honing my skills."
          icon={<FaCode />}
        />
        <Card
          title="Web Development"
          des="I am passionate about web development, driven by the endless possibilities it offers to create engaging and user-friendly experiences on the internet."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Problem Solving"
          des="I have a strong passion for solving problems and see every challenge as a chance to improve. I'm always looking for new challenges to sharpen my problem-solving abilities."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="I am currently immersed in learning app development as a key component of my portfolio. My goal is to expand my skill set and showcase my ability to create user-friendly mobile applications."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="I am deeply passionate about UX design, driven by the desire to create meaningful and intuitive user experiences."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="I am passionate about hosting, driven by the opportunity to create memorable and seamless experiences for guests.."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
