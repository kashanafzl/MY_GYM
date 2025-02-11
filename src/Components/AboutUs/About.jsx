import React, { useState, useEffect } from 'react';
import '../LandingPage/Navbar/Navbar.css';
import './About.css';
import logo from '../../Assets/img/logo.svg';
import p1 from '../../Assets/img/play1.svg';
import p2 from '../../Assets/img/play2.svg';
import p3 from '../../Assets/img/play3.svg';
import Footer from '../LandingPage/Footer/Footer';

// Circular Progress Bar Component
const CircularProgressBar = ({ percentage }) => {
    return (
        <div className="progress-container">
            <svg className="progress-ring" width="120" height="120">
                <circle className="progress-ring-circle"
                    stroke="#E60023"  // Changed to red
                    strokeWidth="15"
                    fill="transparent"
                    r="50"
                    cx="60"
                    cy="60"
                    strokeDasharray={314}
                    strokeDashoffset={314 - (314 * percentage) / 100}
                />
            </svg>
            <div className="progress-text">{percentage}%</div>
        </div>
    );
};

// Navbar Component
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => (prev < 100 ? prev + 10 : 100));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

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

                    <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className="maincontentdiv" style={{ textAlign: 'center' }}>
                    <h1>About Us</h1>
                    <p>
                        In quisque nunc dictumst etiam pellentesque et. Vel malesuada diam lorem tellus.
                        Amet mauris feugiat ipsum natoque odio donec. Sit at lacus consequat justo odio condimentum dui.
                    </p>
                </div>
            </div>

            <div className='aboutimg'>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus interdum nunc, et eleifend neque sagittis et.</p>
                <button>Get Started</button>

                <div className='playdiv'>
                    <img src={p1} alt="" />
                    <img src={p2} alt="" />
                    <img src={p3} alt="" />
                </div>
            </div>

            {/* Progress Bar Section */}
            <div className='welcomdiv'>
                <h2>Our Progress</h2>
             
             <div className="welcomeflexdiv">
             <CircularProgressBar percentage={progress} />
                <CircularProgressBar percentage={progress} />
                <CircularProgressBar percentage={progress} />
             </div>

            </div>

            

            <div>
              <h1>We’re welcome you to join us!</h1>
             </div>

             <Footer/>

        </>
    );
}
