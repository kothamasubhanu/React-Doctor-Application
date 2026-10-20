import { Navigate } from "react-router-dom"
import { useContext } from "react"
import AdminContext from "../context/AdminContext"

export default function ProtectedRoutes({children}) {
    //const token=localStorage.getItem("token")
    const {token}=useContext(AdminContext)
  return (
    <div>
        {
            token? (
                <>{children}</>
            ):(
                <Navigate to="/login" replace/>
            )
        }
      
    </div>
  )
}
