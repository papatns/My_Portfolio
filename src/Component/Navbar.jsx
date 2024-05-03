import React from 'react'
import "./Navbar.css"
import { AiFillHome } from "react-icons/ai";
import { FaUserCircle } from 'react-icons/fa';
import { GiJourney,GiSkills } from 'react-icons/gi';

import { AiFillCode } from 'react-icons/ai';
import { IoMdChatbubbles } from 'react-icons/io';

const Navbar = () => {
  return (
    <div className="nav-bar">
        <ol>
          <li>
            <a href="#Intro"> <AiFillHome className='n-logo'/></a>
            <a href="#Aboutme"><FaUserCircle className='n-logo'/></a>
            <a href="#Myskills"><GiSkills className='n-logo'/></a>

            <a href="#Myjourney"><GiJourney className='n-logo'/></a>
            <a href="#MyProjects"><AiFillCode className='n-logo'/></a>
            <a href="#contact"><IoMdChatbubbles className='n-logo'/></a>
          </li>
        </ol>
      </div>
  )
}

export default Navbar