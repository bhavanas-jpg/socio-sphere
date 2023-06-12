import React, { useState } from 'react';
import "./auth.css"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleLogin } from './authSlice';

const Login = () => {
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const dispatch = useDispatch();

  const testLogin = {
    username: "bhavana",
    password: "bhavanaS123"
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(handleLogin({
            username: formValues.username,
            password: formValues.password
          }))
        }
        }
        className='auth-form'>
        <h1>Welcome</h1>
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
    </>
  )
}

export default Login