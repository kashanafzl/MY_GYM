import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../../Assets/img/logo.svg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
            <li><a href="/">About Us</a></li>
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
      </div>
    </div>
  );
}
