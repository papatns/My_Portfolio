import React from 'react'
import './Hero.css'
import Profile from '../../assets/Profile2.jpg'
import MyCV from "../../assets/Rishabh_resume.pdf"

const Hero = () => {
  return (
    <div className='Hero' id='Intro'>
        <img className="Profile" src={Profile} alt='profile-photo' />
        <h1><span>I'm Rishabh Shukla,</span> frontend developer based in India</h1>
        <p>I am a frontend developer from Gurugram, India with 2.5 years of experience</p>
        <div className="btn">
            <button>
              <a href={MyCV} download = "Rishabh_resume">
                <h5>Download CV</h5>
              </a>
            </button>
            <button>
              <a href="#contact">
                <h5>Let's Talk</h5>
              </a>
            </button>
          </div>
    </div>
  )
}

export default Hero