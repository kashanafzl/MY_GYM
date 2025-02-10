import React, { useState } from 'react';
import '../LandingPage/Navbar/Navbar';
import './About.css'
import logo from '../../Assets/img/logo.svg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
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
      <div style={{textAlign : 'center'}} className="maincontentdiv">
        <h1>About Us</h1>
        <p>
        In quisque nunc dictumst etiam pellentesque et. Vel malesuada diam lorem tellus. Amet mauris feugiat ipsum natoque odio donec. Sit at lacus consequat justo odio condimentum dui. Faucibus id blandit feugiat mi tellus sit etiam donec aliquam. Dictumst egestas ut facilisi vel.
        </p>
        {/* <button>Let’s Join Now</button> */}
      </div>



    </div>

    

<div className='aboutimg'>

</div>



</>
  );
}
