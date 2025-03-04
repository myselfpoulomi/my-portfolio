import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import Techs from './Components/Techs'
import Projects from './Components/Projects'
import ContactMe from './Components/ContactMe'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='bg-[#161513]'>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Techs/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App