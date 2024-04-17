import Footer from "../Components/Footer/Footer";
import Login from "../Components/Login/Login";
import NavBar from "../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import AuthContext from "../Context/AuthContext";

function LoginPage() {
    const _user = useContext(AuthContext)
    const navigate = useNavigate();
        useEffect(() => {
            if (_user.user){
                navigate("/homepage")
            }
      }, [_user,navigate])
      
    //   if (_user.user){
    //       navigate("/homepage")
    //   }

    return (
        <div>
            <NavBar />
            <Login />
            <Footer />            
        </div>
    )
}

export default LoginPage