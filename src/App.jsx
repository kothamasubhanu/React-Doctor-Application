import React from 'react'
import Navbar from './components/Navbar'
import Doctorcard from './components/Doctorcard'
import Adddoctor from './components/Adddoctor'
import Home from './components/Home'
export default function App() {
  return (
    <div>
      <Navbar/>
      {/* <Adddoctor/> */}
      <Home/>
      {/* <Doctorcard name='anas' gender='male' specialization='heart'/>
      <Doctorcard name='mehar' gender='female' specialization='brain'/> */}
    </div>
  )
}
