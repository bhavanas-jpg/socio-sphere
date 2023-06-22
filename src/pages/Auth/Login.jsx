import React, { useState } from 'react';
import "./auth.css"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleLogin } from './authSlice';
import ReactPlayer from 'react-player';
import "../../components/Header/header.css"

const Login = () => {
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logo = "/assets/logo-image.gif"

  const testLogin = {
    username: "bhavana",
    password: "bhavanaS123"
  }

  return (
    <>
      <section >
        <div id="video-background">
          <video autoPlay muted loop>
            <source src="https://res.cloudinary.com/drjisfpis/video/upload/v1687458695/socioSphere/pexels-los-muertos-crew-7616840-1920x1080-24fps_wd0czf.mp4" type="video/mp4" />
          </video>
        </div>
        <main className="login__container">
          <div className="content">
            <h1>Welcome to  Sociosphere</h1>
            <p>Engage,
              <br/> Connect, 
              <br/>and Flourish in the Sociosphere</p>
          </div>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(handleLogin({
                  username: formValues.username,
                  password: formValues.password
                }))
                navigate("/")
              }
              }
              className='auth-form'>
              <h1>SocioSphere
              <img src={logo}
                  className="logo__image"
                  alt="logo-image" />
              </h1>
              <input
                required
                type="text"
                placeholder="Enter User Name"
                value={formValues.username}
                onChange={(e) => setFormValues(prev => ({ ...prev, username: e.target.value }))}
              />
              <input type="password"
                required
                placeholder='Enter Password'
                value={formValues.password}
                onChange={(e) => setFormValues(prev => ({ ...prev, password: e.target.value }))}
              />
              <button
                className='btn btn-primary'
                type="submit"
              >Log in</button>
              <button
                type="submit"
                className='btn btn-primary'
                onClick={() => setFormValues({ username: testLogin.username, password: testLogin.password })}
              >Login As Guest</button>
              <p>Don't have an account?
                <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </main>

      </section>
    </>
  )
}

export default Login