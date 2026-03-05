import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import BentoGrid from './Components/BentoGrid'
import AboutMe from './Components/AboutMe'
import Techs from './Components/Techs'
import Projects from './Components/Projects'
import ContactMe from './Components/ContactMe'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='min-h-screen bg-white text-neutral-900 dark:bg-[#161513] dark:text-white animate-fadeIn'>
      <Navbar/>
      <Home/>
      <BentoGrid/>
      <AboutMe/>
      <Techs/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App