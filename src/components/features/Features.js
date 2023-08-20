import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile,FaGlobe,FaBars } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from '../Card';

const Features = () => {
  return (
    <section id='features' className='w-full py-20 border-b-[1px] border-b-black'>
      <Title title="Features" des="What I Do"/>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
        <Card 
          title="Business Strategy"
          des="I should be hired for this role because of my relevant skills, experience, and passion for the industry. I’ve researched the company and can add value to its growth."
          icon={<FaBars />}
        />
        <Card 
          title="Web Development"
          des="I should be hired for this role because of my relevant skills, experience, and passion for the industry. I’ve researched the company and can add value to its growth."
          icon={<AiFillAppstore />}
        />
        <Card 
          title="SEO Optimization"
          des="I should be hired for this role because of my relevant skills, experience, and passion for the industry. I’ve researched the company and can add value to its growth."
          icon={<SiProgress />}
        />
        <Card 
          title="Mobile Development"
          des="I should be hired for this role because of my relevant skills, experience, and passion for the industry. I’ve researched the company and can add value to its growth."
          icon={<FaMobile />}
        />
        <Card 
          title="UX Design"
          des="I should be hired for this role because of my relevant skills, experience, and passion for the industry. I’ve researched the company and can add value to its growth."
          icon={<SiAntdesign />}
        />
        <Card 
          title="Hosting Websites"
          des="I should be hired for this role because of my relevant skills, experience, and passion for the industry. I’ve researched the company and can add value to its growth."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  )
}

export default Features