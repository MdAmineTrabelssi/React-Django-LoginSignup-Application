import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import PrivateRoutes from "./Utils/PrivateRouteS";
import AuthContext, {AuthProvider } from './Context/AuthContext'
import FrontPage from "./Pages/Front";
import HomePage from './Pages/Home';
import LoginPage from "./Pages/Login"
import SignupPage from "./Pages/Signup.js";
import UserProfile from "./Pages/User";
import About_us from "./Pages/About_us.js";
import { useContext } from "react";



function App() {
  return (
    <div className="App ">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/about_us" element={<About_us />}/>

          <Route path="/signup" element={<SignupPage />}/>
          <Route element={<PrivateRoutes />} >
            <Route element={<FrontPage />} path="/homepage" />

          </Route>
          <Route path="/homepage/userprofile" element={<UserProfile />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
