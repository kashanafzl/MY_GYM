import React, { useState } from 'react';
import '../LandingPage/Navbar/Navbar.css';
import logo from '../../Assets/img/logo.png';
import './Contact.css';
import contactus from '../../Assets/img/contact.png';
import Footer from '../LandingPage/Footer/Footer';

export default function Contactus() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null); // State for FAQ accordion

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
       
      
          {/* FAQ Section */}
          <div className="faq-section">


          <h1>FAQ'S</h1>


            {faqData.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  {faq.question}
                  <span>{openIndex === index ? "−" : "+"}</span>
                </div>
                <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

// FAQ Data
const faqData = [
  {
    question: "How can I contact customer support?",
    answer: "You can reach out to our support team via email at  You can reach out to our support team via email at support@example.com or through our contact form. You can reach out to our support team via email at support@example.com or through our contact form.support@example.com or through our contact form.",
  },
  {
    question: "What are your business hours?",
    answer: "You can reach out to our support team via email at support@example.com or through our contact form.You can reach out to our support team via email at support@example.com or through our contact form.",
  },

  {
    question: "What are your business hours?",
    answer: "You can reach out to our support team via email at support@example.com or through our contact form.You can reach out to our support team via email at support@example.com or through our contact form.",
  },

  {
    question: "What are your business hours?",
    answer: "You can reach out to our support team via email at support@example.com or through our contact form.You can reach out to our support team via email at support@example.com or through our contact form..",
  },

  {
    question: "Do you offer refunds?",
    answer: "YYou can reach out to our support team via email at support@example.com or through our contact form.",
  },
];

