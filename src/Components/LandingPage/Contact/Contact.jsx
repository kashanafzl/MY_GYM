import React from 'react'
import './Contact.css'

import contactimg from '../../../Assets/img/body.svg'

export default function Contact() {
  return (
    <div>
        <div className="contactmaindiv">

           <div className='contactimg'>
           <img src={contactimg} alt="" />
           </div>

            <div className='contencontact'>
            <h1>Let’s start gym  <br />
             <span>training now</span> </h1>
             <p>get 50% off the first three classes you sign up for this month any GYM <br />
              membership</p>
             <input type="text" placeholder='Enter You Name...'  />
             <input id='number' type="number" placeholder='Numbers Phone...'  />
             <div>
                <input id='email' type="Email"  placeholder='Your Email Address...'/>
             </div>

             <div>
                <button>Let join now</button>
             </div>
            </div>

        </div>
    </div>
  )
}
