import React from 'react'
import Navbar from './Components/navbar'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'

function App() {
  return (
    <div className='bg-[#161513]'>
      <Navbar/>
      <Home/>
      <AboutMe/>
    </div>
  )
}

export default App