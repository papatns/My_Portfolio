import React from "react";
import "./Project.css";
import SubProject from "./SubProject/SubProject";
import Image1 from "../../assets/ml.png";
import Image2 from "../../assets/portfolio.png";
import Image3 from "../../assets/weather.jpg";
import Theme from "../../assets/theme_pattern.svg"

const Project = () => {
  return (
    <div>
        <div className='Project-title' id="MyProjects">
            <h1>My Projects</h1>
            <img src={Theme} alt="About me"/>
        </div>
      <div className="Project-Main">
        <SubProject
          header="Evento"
          proImg1={Image1}
          button1="VIEW CODE"
          button2="VIEW DEMO"
        />
        <SubProject
          header="Portfolio"
          proImg1={Image2}
          button1="VIEW CODE"
          button2="VIEW DEMO"
        />
        <SubProject
          header="Weather Report"
          proImg1={Image3}
          button1="VIEW CODE"
          button2="VIEW DEMO"
        />
      </div>
    </div>
  );
};

export default Project;
