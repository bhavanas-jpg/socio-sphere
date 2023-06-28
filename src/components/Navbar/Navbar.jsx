import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import "./navbar.css"
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from '../../pages/Auth/authSlice';



const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, token } = useSelector(store => store.auth);

    return (
        <section className="left">
            <aside className="sidebar">
                <ul>
                    <li className="menu-item ">
                        <NavLink to="/"
                            className="menu-title "><i class="uil uil-home"></i>
                           <span>Home</span> </NavLink>
                    </li>
                    <li className="menu-item ">
                        <NavLink to="/explore"
                            className="menu-title"><i class="uil uil-compass"></i>
                          <span>Explore</span>  
                        </NavLink>
                    </li>
                    <li className="menu-item ">
                        <NavLink to="/bookmark" className="menu-title">
                            <i class="uil uil-bookmark"></i>
                            <span>BookMarks</span>
                        </NavLink>
                    </li>
                    <li className="menu-item"
                        onClick={() => navigate(`/profile/${user?.username}`)}
                    >
                        <NavLink to={`/profile/${user?.username}`} className="menu-title">
                            <i class="uil uil-user"></i>
                            <span> Profile</span> 
                           </NavLink>
                    </li>
                    <li className="menu-item"
                        onClick={() => {
                            dispatch(handleLogout());
                        }}
                    >
                        <NavLink to="/login" className="menu-title">
                            <i class="uil  uil-sign-out-alt"></i>
                            <span>Log out</span> 
                            </NavLink>
                    </li>
                </ul>
            </aside>
        </section>
    )
}

export default Navbar