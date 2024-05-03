import React from "react";
import { GrHtml5 } from "react-icons/gr";
import { TbBrandCss3 } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiAmazonaws } from "react-icons/si";
import "./Skills.css";
import Theme from "../../assets/theme_pattern.svg"

const Skills = () => {
  return (
    <div>
      <div className='Skills-title' id="Myskills">
            <h1>My Skills</h1>
            <img src={Theme} alt="About me"/>
      </div>
      <div className="SkillsContainer">
        <div className="Skills-card">
          <GrHtml5 className="icon" />
          <h1>HTML5</h1>
        </div>
        <div className="Skills-card">
          <TbBrandCss3 className="icon" />
          <h1>CSS</h1>
        </div>
        <div className="Skills-card">
          <BiLogoTailwindCss className="icon" />
          <h1>Tailwind CSS</h1>
        </div>
        <div className="Skills-card">
          <IoLogoJavascript className="icon" />
          <h1>Javascript</h1>
        </div>
        <div className="Skills-card">
          <FaReact className="icon" />
          <h1>React</h1>
        </div>
        <div className="Skills-card">
          <SiRedux className="icon" />
          <h1>Redux</h1>
        </div>
        <div className="Skills-card">
          <SiExpress className="icon" />
          <h1>ExpressJS</h1>
        </div>
        <div className="Skills-card">
          <SiMongodb className="icon" />
          <h1>Mongodb</h1>
        </div>
        <div className="Skills-card">
          <RiNextjsLine className="icon" />
          <h1>NextJS</h1>
        </div>
        <div className="Skills-card">
          <FaNodeJs className="icon" />
          <h1>NodeJS</h1>
        </div>
        <div className="Skills-card">
          <FaJava className="icon" />
          <h1>Java</h1>
        </div>
        <div className="Skills-card">
          <FaGithub className="icon" />
          <h1>GitHub</h1>
        </div>
        <div className="Skills-card">
          <SiAmazonaws className="icon" />
          <h1>Amazonaws</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
