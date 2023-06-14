import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import "./navbar.css"
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from '../../pages/Auth/authSlice';
import { userProfile } from '../../pages/Home/usersSlice';


const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, token } = useSelector(store => store.auth);

    console.log(user);
    return (
        <section className="left">
            <aside className="sidebar">
                <ul>
                    <li className="menu-item ">
                        <NavLink to="/" className="menu-title"><i class="uil uil-home"></i>Home</NavLink>
                    </li>
                    <li className="menu-item ">
                        <NavLink to="/explore" className="menu-title"><i class="uil uil-compass"></i>Explore</NavLink>
                    </li>
                    <li className="menu-item ">
                        <NavLink to="/bookmark" className="menu-title"><i class="uil uil-bookmark"></i>BookMarks</NavLink>
                    </li>
                    <li className="menu-item"
                    onClick={()=>dispatch(userProfile(user?.username))}
                    >
                        <NavLink to="/profile" className="menu-title"><i class="uil uil-user"></i>Profile</NavLink>
                    </li>
                    <li className="menu-item"
                        onClick={() => {
                            dispatch(handleLogout());
                            navigate("/login")
                        }}
                    >
                        <NavLink className="menu-title"><i class="uil uil-Logout"></i>Log out</NavLink>
                    </li>
                </ul>
            </aside>
        </section>
    )
}

export default Navbar