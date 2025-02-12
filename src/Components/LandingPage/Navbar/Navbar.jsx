import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../../Assets/img/logo.svg';

// import { useNavigate } from "react-router-dom";


export default function Navbar() {

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
            <li><a href="/">Contact Us</a></li>
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

      {/* Main Content */}
      <div className="maincontentdiv">
        <h1>Unlock Your <br /><span>Best Self</span></h1>
        <p>
          Gym training is a structured and disciplined approach to physical <br />
          exercise that focuses on strength, endurance, and overall fitness <br />
          improvement.
        </p>
        <button>Let’s Join Now</button>

        <div className="paretnexdiv">
        <div className='exdiv'>
            <h3>20+</h3>
            <p>Year of experience</p>
        </div>

        <div className='exdiv'>
            <h3>14+</h3>
            <p>Member Join</p>
        </div>

        <div className='exdiv'>
            <h3>15+</h3>
            <p>Join Team</p>
        </div>
        </div>
      </div>
    </div>
  );
}
