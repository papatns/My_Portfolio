import React from 'react'
import "./Experince.css"
import Theme from "../../assets/theme_pattern.svg"
import { FaLaptopCode } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { SiInfosys } from "react-icons/si";
import { MdEngineering } from "react-icons/md";

const Experience = () => {
  return (
    <div>
        <div className='experience-title' id='Myjourney'>
            <h1>My Experience</h1>
            <img src={Theme} alt="About me"/>
        </div>
        <div className='experience-container'>
            <div className='experience-subcontainer'>
                
                <div className='company-experience'>
                    <div className='header'>
                        <SiInfosys className='exicon'/>
                        <p>Infosys Limited</p>
                    </div>
                <div className='subheader'>
                    <FaLaptopCode className='lapicon'/>
                    <div>Developer(SEP2021-CURRENT)</div>
                </div>
                <div className='content'>
                    <p>~ Currently working as Frontend Developer at Infosys Limited for 2.5years</p>
                    <p>~ Responsible for developing all devices responsive UI</p>
                    <p>~ Developing using React.js, Next.js and Tailwind CSS</p>
                    <p>~ Effectively consuming APIs in Frontend and optimizing page load time</p>
                    <p>~ Developing components following coding standards and maintain code quality</p>
                </div>
            </div>
            </div>          
            
        <div className='college-experience'>
            <div className='college-header'>
                <FaGraduationCap className='gradlogo'/> 
                   <div>Graduation</div>
                </div>
                <div className='college-subheader'>
                    <MdEngineering className='englogo'/>
                    <div>Engineering(SEP2017-SEP2021)</div>
                </div>
                <div className='college-content'>
                    <p>~ From Raj Kumar Goel Institute of Technology, Ghaziabad</p>
                    <p>~ Graduated in Computer Science</p>
                    <p>~ Completed with 78.0 %</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience