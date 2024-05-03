import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import Skills from './Component/Skills/Skills'
import Experience from './Component/Experience/Experience.jsx'
import Project from './Component/Projects/Project.jsx'
import Contact from './Component/Contact/Contact.jsx'
import Footer from './Component/Footer/footer.jsx'


const App = () => {
  return (
    <div id='root'>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App