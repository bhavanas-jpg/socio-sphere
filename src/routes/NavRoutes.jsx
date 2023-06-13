import React from 'react'
import { Routes, Route } from 'react-router';
import Login from "../pages/Auth/Login"
import SignUp from "../pages/Auth/SignUp"
import Home from '../pages/Home/Home';
import Explore from '../pages/Explore/Explore';
import BookMark from '../pages/Bookmarks/BookMarks';
import Profile from '../pages/Profile/Profile';

const NavRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/explore" element={<Explore />}/>
        <Route path="/bookmark" element={<BookMark />} />
        <Route path="/profile" element={<Profile />} />
        
      
    </Routes>
  )
}

export default NavRoutes;