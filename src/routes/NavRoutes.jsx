import React from 'react'
import { Routes, Route } from 'react-router';
import Login from "../pages/Auth/Login"
import SignUp from "../pages/Auth/SignUp"
import Home from '../pages/Home/Home';

const NavRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      
    </Routes>
  )
}

export default NavRoutes;