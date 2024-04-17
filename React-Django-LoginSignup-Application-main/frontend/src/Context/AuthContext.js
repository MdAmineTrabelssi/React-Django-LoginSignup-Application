import axios from "axios";
import jwt_decode from "jwt-decode";
import { createContext, useState } from "react";
import Swal from "sweetalert2";
import { baseUrl } from "../Constants/Constants";

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {
    
    const [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')): null)
    const [user, setUser] = useState(localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')): null)

    const loginUser = (e) => {
        e.preventDefault()
        if (e.target.username.value.length == 0 ){
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Invalid Data',
            showConfirmButton: false,
            timer: 1500
          })
        }
        else{
        const response = 
                axios.post(`${baseUrl}token/`,
                    JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value}),
                    {
                    headers: {
                        'Content-Type': 'application/json'
                      }
                  })
                  .then(function (response) {
                    console.log("jwt-response",jwt_decode(response.data.access).user_id);
                    setAuthTokens(response.data)
                    setUser(jwt_decode(response.data.access))
                    localStorage.setItem('authTokens', JSON.stringify(response.data))
                    localStorage.setItem('user_id', jwt_decode(response.data.access).user_id)
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
    }
  }

    // Log out
    const logOutUser = () => {
      setAuthTokens(null)
      setUser(null)
      localStorage.removeItem('authTokens')
      localStorage.removeItem('user_id')
    }

    const contextData = {
      user:user,
      loginUser:loginUser,
      logOutUser: logOutUser,
    }

    return (
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>       
    )
}