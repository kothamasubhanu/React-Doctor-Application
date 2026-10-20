import React,{useContext} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import AdminContext from '../context/AdminContext'

export default function Navbar() {
  //const token=localStorage.getItem("token")
  const {token,logout}=useContext(AdminContext)
  const navigate=useNavigate()
  // function handleLogout(){
  //   localStorage.removeItem("token")
  //   navigate("/login")
  // }
  return (
    <div>
      <Link to="/">Home</Link>
      {
        token ?(
          <>
          <Link to="/add-doctor">Add Doctor</Link>
          <Link onClick={logout}>Logout</Link>
          </>
        ):(
          <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>

          </>

        )
      }
      
      
    </div>
  )
}

// rfc - structure