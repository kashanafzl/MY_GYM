import React, { useState } from 'react';
import '../LandingPage/Navbar/Navbar.css';
import logo from '../../Assets/img/logo.svg';
import './Contact.css';
import contactus from '../../Assets/img/contact.png';
import Footer from '../LandingPage/Footer/Footer';

export default function Contactus() {
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

        <div className='contactusdiv'>
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className='contactusdiv'>
        <h2>Contact Us</h2>

        <div className="maincontactandtext">
          <div className='imgco'>
            <img src={contactus} alt="Contact" />
          </div>

          <div className='cinputdiv'>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Email' />
            <textarea placeholder='Message'></textarea>
            <button>Send Message</button>
          </div>
        </div>

        <div className='linediv'>
          <h1>FAQ'S</h1>
        </div>
      </div>

      <Footer/>
    </>
  );
}
