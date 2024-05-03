import React from 'react'
import './About.css'
import Theme from "../../assets/theme_pattern.svg"
import About_Image from "../../assets/about_image.jpg"

const About = () => {
  return (
    <div className='about'>
        <div className='about-title' id='Aboutme'>
            <h1>About me</h1>
            <img src={Theme} alt="About me"/>
        </div>
        <div className='about-structure'>
            <img src={About_Image} alt="About me"/>
            <div className='about-content'>
                <p>I am an experienced Frontend Developer with over a 2.5years of professional expertise in the field.
                Throughout my career, I had the privilege of collaborating with prestigious organization, contributing
                to their success and growth.</p>
                {/* <br/> */}
                <div>My passion for frontend development is not only reflected in my extensive experience but also in the 
                enthusiasm and dedication I bring to each project</div>
            </div>
        </div>
        <div className='about-summary'>
            <div className="summary-section">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <span className='vertical-line'></span>
            <div className="summary-section">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <span className='vertical-line'></span>
            <div className="summary-section">
                <h1>5+</h1>
                <p>EXPERTISE IN SKILLS</p>
            </div>
        </div>
    </div>
  )
}

export default About