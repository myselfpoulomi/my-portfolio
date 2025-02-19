import React from 'react'
import Navbar from './Components/navbar'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import Techs from './Components/Techs'

function App() {
  return (
    <div className='bg-[#161513]'>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Techs/>
    </div>
  )
}

export default App