import React from 'react'
import './Footer.css'

import logo from '../../../Assets/img/logo.png'

export default function Footer() {
  return (
    <div>
        <div className="footerdiv">
            <img src={logo} alt="" />


            <ul className='fflex'>
                <li><a href="/">Home</a></li>
                <li><a href="/">Service</a></li>
                <li><a href="/">Trainers</a></li>
                <li><a href="/">Testimonial</a></li>
                <li><a href="/">Contact us</a></li>
            </ul>
        </div>

        <hr />

        <div className='footerline'>
            <h3>Privacy
            Terms and condition</h3>
            <h4>Ⓒ 2023 All rights reserved. IronGym Company</h4>
        </div>

    </div>
  )
}
