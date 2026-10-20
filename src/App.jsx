import React from 'react'
import Navbar from './components/Navbar'
import Doctorcard from './components/Doctorcard'
import Adddoctor from './components/Adddoctor'
import Home from './components/Home'
import { Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoutes from './components/ProtectedRoutes'
export default function App() {
  return (
  
      <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add-doctor" element={
            <ProtectedRoutes><Adddoctor/></ProtectedRoutes>
          }/>
          <Route path="/login" element={<Login/>}/>


        </Routes>
      </>

  )
}
