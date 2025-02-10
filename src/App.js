import React from 'react'

import './App.css'


// Rounting 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Components/Login/Login'
import Home from './Components/Home';
import SignUp from './Components/SignUp/SignUp';
import About from './Components/AboutUs/About';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/about' element={<About />} />
  
        </Routes>
      </Router>
    </div>
  )
}
