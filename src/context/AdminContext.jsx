import { createContext } from "react";
import { useNavigate } from "react-router-dom";
const AdminContext = createContext()
export default AdminContext
export function AdminProvider({ children }) {
    const navigate = useNavigate();
    const token = localStorage.getItem("token")
    function logout() {
        localStorage.removeItem("token")
    }
    return (
        <AdminContext.Provider value={{ token, logout }}>
            {children}
        </AdminContext.Provider>
    )
}