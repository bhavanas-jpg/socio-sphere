import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { handleSignup } from './authSlice'

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: ""
  })
 const dispatch = useDispatch();
 const navigate = useNavigate();

  return (
    <>
    <form 
    onSubmit={(e)=>{
      e.preventDefault();
      dispatch(handleSignup({
        firstName : formValues.firstName,
        lastName : formValues.lastName,
        username : formValues.username,
        password : formValues.password
      }));
      navigate("/");
    }}
    className="auth-form">
      <h1>Sign Up</h1>
     <input 
     type="text" 
     placeholder='Enter First Name'
     required
     onChange={(e)=>setFormValues(prev=>({...prev, firstName:e.target.value}))}
     />
     <input 
     type="text" 
     placeholder='Enter Last Name'
     required
     onChange={(e)=>setFormValues(prev => ({...prev, lastName:e.target.value}))}
     />
     <input
      type="text"
      placeholder='Enter User Name'
      required
      onChange={(e)=>setFormValues(prev => ({...prev, username: e.target.value}))}
       />
     <input
      type="password" 
      placeholder='Enter Password'
      required
      onChange={(e)=>setFormValues(prev => ({...prev, password: e.target.value}))}
      />
     <input 
     type="password" 
     placeholder='Confirm Password'
     required
     onChange={(e)=>setFormValues(prev => ({...prev, confirmPassword: e.target.value}))}
     />
     <button 
     type="submit"
     className='btn btn-primary'
     >Sign Up</button>
     <Link to="/login">back to login</Link>

    </form>
    </>
  )
}

export default SignUp