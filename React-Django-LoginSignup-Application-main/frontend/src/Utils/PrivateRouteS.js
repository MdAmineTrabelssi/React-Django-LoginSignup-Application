import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../Context/AuthContext"

const PrivateRoutes = () => {
    const _user = useContext(AuthContext)
    return(
        _user.user ? <Outlet />: <Navigate to="/login" /> 
    )
}
export default PrivateRoutes