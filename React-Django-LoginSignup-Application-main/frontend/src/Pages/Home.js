import React, { useContext, useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import HomeBanner from "../Components/HomeBanner/HomeBanner"
import AuthContext from "../Context/AuthContext";
import Braille  from "../Components/Braille/Braiile";
import { useNavigate } from "react-router-dom";
// import Posts from "../Components/Posts/Posts"

function HomePage() {
    const _user = useContext(AuthContext)
  const navigate = useNavigate()
        useEffect(() => {
            if (_user.user){
                navigate("/homepage")
            }
      }, [_user,navigate])

    return (
        <div>
            <NavBar />
            <HomeBanner /> 
            <Braille/>
            <Footer></Footer>
        </div>
    )
}
export default HomePage