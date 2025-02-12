import React from 'react'

import './App.css'


// Rounting 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Components/Login/Login'
import Home from './Components/Home';
import SignUp from './Components/SignUp/SignUp';
import About from './Components/AboutUs/About';
import Trainingdetail from './Components/TrainingDetails/Trainingdetail';
import Bmi from './Components/BMICalculator/Bmi';
import Contact from './Components/LandingPage/Contact/Contact';
import Contactus from './Components/ContactUs/Contactus';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/about' element={<About />} />
          <Route path='/trainingdetail' element={<Trainingdetail />} />
          <Route path='/bmicalculator' element={<Bmi />} />
          <Route path='/contactus' element={<Contactus />} />
  
        </Routes>
      </Router>
    </div>
  )
}
