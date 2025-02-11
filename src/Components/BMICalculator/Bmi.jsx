import React, { useState } from "react";

import "../SignUp/SignUp.css";

import "../Login/Login.css";
import signimg from "../../Assets/img/give.svg";


import logo from "../../Assets/img/logo.svg";


export default function Bmi() {




  return (
    <div>
      <div className="signupdiv">
        <div className="signimgdiv">
          <img className="logoimgmain" src={logo} alt="" />
          <img src={signimg} alt="" />
        </div>

        <div className="signcontentdiv">
          <h1>Calculate Your BMI</h1>
          <p>Jump into the World of Property Management!</p>

          <div className="contentmaindiv">
            <label>Weight:</label>
            <div className="inputandicondiv">
             
              <input type="text"  />
            </div>
          </div>

          <div className="contentmaindiv">
            <label>Height:</label>
            <div className="inputandicondiv">
             
              <input 
                type="text"
           
              />
            </div>



      

            <button >Submit</button> {/* Add onClick event */}


           
          </div>
        </div>
      </div>
    </div>
  );
}
