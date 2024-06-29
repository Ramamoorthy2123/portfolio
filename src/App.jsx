import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
// import Project from './Components/Project/Project'
import Main from './Components/Main/Main'
import Skills from './Components/Skills/Skills'
import Experiance from './Components/Experiance/Experiance'
import Footer from './Components/Footer/Footer'

function App() {
 

  return (
    <>
    <Navbar />
    <Main />
    <Skills />
    
    <Experiance />
    <Footer/>
    </>
  )
}

export default App
