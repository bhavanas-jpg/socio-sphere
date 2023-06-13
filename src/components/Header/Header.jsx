import React from 'react';
import "./header.css"
import "../../index.css"
import { useSelector } from 'react-redux';

const Header = () => {
    const {user} = useSelector(store=>store.auth);
     console.log(user);
  return (
    <header>
        <nav>
            <div className="container">
                <h2 className="logo">SocioSphere</h2>
                <div className="search-bar">
                <i class="uil uil-search"></i>
                <input type="search" placeholder="Search for creators, inspirations and projects" /> 
                </div>
                <div className="create">
         <label className="btn btn-primary" for="create-post">Create</label>
         <div className="profile-picture">
            <img src={user.avatarURL} alt="profile-picture" />
         </div>
         </div>
            </div>
        </nav>
    </header>
  )
}

export default Header