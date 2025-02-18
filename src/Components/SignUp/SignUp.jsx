import React, { useState } from "react";
import "./SignUp.css";


import { useNavigate } from "react-router-dom"; // Import useNavigate

import signimg from "../../Assets/img/give.svg";
import googleimg from '../../Assets/img/google.svg';

import logo from '../../Assets/img/logo.png';

import { MdOutlineMail } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { FaLock } from "react-icons/fa";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize navigate
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };


  const handlesign = () => {
    // Add authentication logic if needed
    navigate("/login"); // Redirect to the dashboard or another page
  };

  return (
    <div>
      <div className="signupdiv">
        <div className="signimgdiv">
          <img className="logoimgmain" src={logo} alt="" />
          <img src={signimg} alt="" />
        </div>

        <div className="signcontentdiv">
          <h1>Sign-up.</h1>
          <p>Jump into the World of Property Management!</p>

          <div className="contentmaindiv">
            <label>Name:</label>
            <div className="inputandicondiv">
              <CiUser />
              <input type="text" placeholder="Enter your name " />
            </div>
          </div>

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

            <div className="checkboxandinput">
              <input 
                type="checkbox" 
                onChange={togglePassword} 
                checked={showPassword} 
              />
              <span>{showPassword ? "Hide Password" : "Show Password"}</span>
            </div>

            <button>CREATE ACCOUNT</button>

            <h6>or</h6>

            <button className="googlebtn">
              <img src={googleimg} alt="" /> Sign Up with Google
            </button>

            <p>Already Have An Account? <span onClick={handlesign}>Login</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
