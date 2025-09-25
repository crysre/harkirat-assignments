import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'

function App() {

  return (
    <  >
      <Navbar/>
      <section className='max-w-7xl mx-auto pt-20 px-6' >
        <HeroSection/>
        <Features/>
      </section>
    </>
  )
}

export default App
