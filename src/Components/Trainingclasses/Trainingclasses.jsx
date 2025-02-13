import React, { useState } from 'react';
import '../LandingPage/Navbar/Navbar.css';
import logo from '../../Assets/img/logo.svg';
import './Trainingclasses.css'
// import { useNavigate } from "react-router-dom";


export default function Trainingclasses() {

    // const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // const aboutpage = () => {
  //   // Add authentication logic if needed
  //   navigate("/about"); // Redirect to the dashboard or another page
  // };


  return (
    <div className="bgdiv">
      <div className="navbardiv">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <ul className="uflex">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/">Class Booking</a></li>
            <li><a href="/Contactus">Contact Us</a></li>
          </ul>
        </div>

        <div className="nav-button">
          <button>Started Now</button>
        </div>

        {/* Hamburger Menu */}
        <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

<div className='trainingclassesmaindiv'>
    <h1>Training Classes</h1>
    <p>In quisque nunc dictumst etiam pellentesque et. Vel malesuada diam lorem tellus. Amet mauris feugiat ipsum natoque odio donec. Sit at lacus consequat justo odio condimentum dui. Faucibus id blandit feugiat mi tellus sit etiam donec aliquam. Dictumst egestas ut facilisi vel.</p>
</div>
    </div>
  );
}
