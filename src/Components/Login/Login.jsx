import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../SignUp/SignUp.css";

import "./Login.css";
import signimg from "../../Assets/img/give.svg";
import googleimg from "../../Assets/img/google.svg";

import logo from "../../Assets/img/logo.svg";

import { MdOutlineMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Add authentication logic if needed
    navigate("/signup"); // Redirect to the dashboard or another page
  };

  return (
    <div>
      <div className="signupdiv">
        <div className="signimgdiv">
          <img className="logoimgmain" src={logo} alt="" />
          <img src={signimg} alt="" />
        </div>

        <div className="signcontentdiv">
          <h1>Sign-In.</h1>
          <p>Jump into the World of Property Management!</p>

          <div className="contentmaindiv">
            <label>Email:</label>
            <div className="inputandicondiv">
              <MdOutlineMail />
              <input type="text" placeholder="Enter your Email " />
            </div>
          </div>

          <div className="contentmaindiv">
            <label>Password:</label>
            <div className="inputandicondiv">
              <FaLock />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter your Password"
              />
            </div>

            <div className="fogetanddiv">
              <div className="checkboxandinput">
                <input 
                  type="checkbox" 
                  onChange={togglePassword} 
                  checked={showPassword} 
                />
                <span>{showPassword ? "Hide Password" : "Show Password"}</span>
              </div>

              <div>
                <p>Forgot Password?</p>
              </div>
            </div>

            <button >Login</button> {/* Add onClick event */}

            <h6>or</h6>

            <button className="googlebtn">
              <img src={googleimg} alt="" /> Sign Up with Google
            </button>

            <p>Don't have an account? <span onClick={handleLogin} >Sign Up</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
