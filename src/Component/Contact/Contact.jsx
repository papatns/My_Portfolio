import React from "react";
import "./Contact.css";
import Theme from "../../assets/theme_pattern.svg"
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="c-main" id="contact">
      <div className="contact-title">
        <h1>Contact Me</h1>
        <img src={Theme} alt="About me" />
      </div>
      <div className="c-container">
        <div className="c-subContainer">
          <div className="left-container">
            <div className="box1">
                <CiLinkedin className="c-icon"/>
                <h3>Connect Me</h3>
                <p>Rishabh Shukla</p>
                
                <a href="https://www.linkedin.com/in/rishabh-shukla-43a6101a4/" rel="link">Get Connected</a>
            </div>
            <div className="box1">
                <FaInstagram className="c-icon"/>
                <h3>Follow Me</h3>
                <p>hirishabhshukla</p>
                
                <a href="https://www.instagram.com/hirishabhshukla/" rel="link">Follow now</a>
            </div>
            <div className="box1">
                <FaGithub className="c-icon"/>
                <h3>Follow Me</h3>
                <p>papatns</p>
                <a href="https://github.com/papatns" rel="link">Follow now</a>
            </div>
          </div>
          <div className="right-container">
            <input type="text" id="YName" placeholder="Your Name"/>
            <input type="email" id="YEmail" placeholder="Email Id"/>
            <input type="text" id="YSubject" placeholder="Subject"/>
            <input type="text" id="YMessage" placeholder="Message"/>
            <button><p>Send Message</p></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
