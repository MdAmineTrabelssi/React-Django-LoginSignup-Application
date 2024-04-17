import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'
import User from '../Components/User/User'
import AuthContext from '../Context/AuthContext'

function UserProfile() {

    const _user = useContext(AuthContext)
    const navigate = useNavigate();
        useEffect(() => {
            if (_user.user){
                navigate("/homepage/userprofile")
            }
      }, [_user, navigate])

  return (
    <div>
      <NavBar user/>
      <User />
      <Footer />
    </div>
  )
}

export default UserProfile