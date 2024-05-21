import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Nav1 from './components/Nav1'
import NavButton from './components/NavBottom'
import CenterRetting from './components/CenterRetting'
import MagicStic from './components/MagicStic'
import BoxSection from './components/BoxSection'
import CenterDiv from './components/CenterDiv'
import ThreeDiv from './components/ThreeDiv'
import Footer from './components/Footer'
 import './App.css'
 
function App() {
  
  return (


    <div className={`bg-slate-900  `}>
      <div className='fixed top-0 w-[100vw] '><Nav /></div>
      <Nav1 />
      <NavButton />
      <CenterRetting />
      <MagicStic />
      <BoxSection />
      <CenterDiv />
      <ThreeDiv />
      <Footer />
    </div>
  )
}

export default App
