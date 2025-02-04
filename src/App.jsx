import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar />
     <Hero />
    <About />
    <Services />
    <Footer /> 
    </>
  )
}

export default App
