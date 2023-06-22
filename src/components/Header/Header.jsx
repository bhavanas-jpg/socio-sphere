import React from 'react';
import "./header.css"
import "../../index.css"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const {user} = useSelector(store=>store.auth);
    const navigate = useNavigate();
    
  return (
    <header>
        <nav>
            <div className="container">
              <div className="logo__container"
              onClick={()=>navigate("/")}
              >
              <img src="https://im2.ezgif.com/tmp/ezgif-2-c0387b6cd2.gif" 
                  className="logo__image"
                  alt="logo-image" />
                  <h3 className="logo">SocioSphere</h3>
              </div>
                
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