import React from 'react'
import Navbar from './LandingPage/Navbar/Navbar'
import Why from './LandingPage/Whychooseus/Why'
import Experience from './LandingPage/Experience/Experience'
import Trainer from './LandingPage/Trainer/Trainer'
import Client from './LandingPage/Clientsay/Client'
import Contact from './LandingPage/Contact/Contact'
import Footer from './LandingPage/Footer/Footer'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Why/>
        <Experience/>
        <Trainer/>
        <Client/>
        <Contact/>
        <Footer/>
    </div>
  )
}
