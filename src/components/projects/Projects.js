import React from 'react';
import Title from '../layouts/Title'
import { Myself, SnakeGame, project2, project3, music, social, Ecommerce, face } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={social}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus quidem!"
          src={Ecommerce}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={project3}
        />
        <ProjectsCard
          title="FACE DETECTION BRAIN"
          des="This App detects faces in any image or picture.
          You can find it working if you paste any link of image and click detect then this app
          will form a RECTANGLE BOX around the face according to its size."
          src={face}
        />
        <ProjectsCard
          title="Music App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={music}
        />
        <ProjectsCard
          title="SnakeGame"
          des="This is a Simple Snake Game which you have already played in your childhood days.
          But this is a little bit updated version. Your should definitely check it out.
          You will enjoy it."
          src={SnakeGame}
        />
      </div>
    </section>
  );
}

export default Projects