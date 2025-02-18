import React, { useState } from 'react';
import '../LandingPage/Navbar/Navbar.css';
import logo from '../../Assets/img/logo.png';
import './Trainingclasses.css'
// import { useNavigate } from "react-router-dom";

import jackimg from '../../Assets/img/jack.png'
import Footer from '../LandingPage/Footer/Footer';

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


<div className="bgdivthree">

<div className="mainflextrainingdiv">
<div className='traincontent'>
    <h1>Our Trainers</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus interdum nunc, et eleifend neque sagittis et. Donec dignissim quam eu aliquet fermentum. Suspendisse potenti. Cras commodo ante mauris, at vulputate risus mattis a. Suspendisse potenti. </p>
  
    <button>Get Stated</button>
  </div>

  <div className='jackimg'>
    <img src={jackimg} alt="" />
  </div>
</div>

</div>


<div className='memberdiv'>
  <h1>Membership Pricing</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

  <div className='btntraindiv'>
    <button>WithOut Training</button>
    <button>With Training</button>
  </div>


<div className="mainprice">
  

<div className='trainprice'>
  <h5>Day</h5>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus interdum nunc, et eleifend neque sagittis et. Donec dignissim quam eu aliquet fermentum</p>
  <hr />
  <h3>RS. 1000</h3>
  <button>Get Stated</button>
</div>
<div className='trainprice'>
  <h5>Week</h5>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus interdum nunc, et eleifend neque sagittis et. Donec dignissim quam eu aliquet fermentum</p>
  <hr />
  <h3>RS. 10000</h3>
  <button>Get Stated</button>
</div>
<div className='trainprice'>
  <h5>Month</h5>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus interdum nunc, et eleifend neque sagittis et. Donec dignissim quam eu aliquet fermentum</p>
  <hr />
  <h3>RS. 30000</h3>
  <button>Get Stated</button>
</div>


</div>




</div>


<div className="bgdiv4">

  <div className="divtrainingdiv">
  <h1>Member’s Success Story</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus interdum nunc, et eleifend neque sagittis et. </p>
    

    <div  className='jackimgmaindiv'>
    <img src={jackimg} alt="" />
  <img src={jackimg} alt="" />
  <img src={jackimg} alt="" />
    </div>

  </div>
  
</div>


<Footer/>

    </>
  );
}
