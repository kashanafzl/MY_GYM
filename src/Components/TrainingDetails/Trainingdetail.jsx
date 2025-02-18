import React, { useState } from "react";
import "../SignUp/SignUp.css";
import "./Trainingdetail.css";
import signimg from "../../Assets/img/give.svg";
import logo from "../../Assets/img/logo.png";

export default function Trainingdetail() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  return (
    <div>
      <div className="signupdiv">
        <div className="signimgdiv">
          <img className="logoimgmain" src={logo} alt="" />
          <img src={signimg} alt="" />
        </div>

        <div className="signcontentdiv">
          <h1>Training Details.</h1>
          <p>Jump into the World of Property Management!</p>

          <div className="contentmaindiv">
            <label>Name:</label>
            <div className="inputandicondiv">
              <input type="text" placeholder="Enter your name" />
            </div>
          </div>

          <div className="contentmaindiv">
            <label>Experience:</label>
            <div className="inputandicondiv">
              <input type="number" placeholder="Enter your experience" />
            </div>
          </div>

          <div className="contentmaindiv">
            <label>Description:</label>
            <div className="inputandicondiv">
              <textarea rows={5} placeholder="Enter description"></textarea>
            </div>
          </div>

          {/* Custom File Upload */}
          <div className="contentmaindiv">
            <label>Upload File:</label>
            <div className="custom-file-upload">
              <input 
                type="file" 
                id="fileInput" 
                onChange={handleFileChange} 
                hidden // Hide default file input
              />
              <label htmlFor="fileInput" className="upload-btn">📁 Choose File</label>
              <span className="file-name">{fileName || ""}</span>
            </div>
          </div>

          <button className="submit-btn">Submit</button>
        </div>
      </div>
    </div>
  );
}
