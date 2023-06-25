import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { handleSignup } from './authSlice'

const SignUp = ({setTogglePage}) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    avatarURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSspzDIplyS6mahlqwPOpmblamV2hqb8cRc4ZNzfVlqGA&usqp=CAU&ec=48600113"
  })
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const location = useLocation();
 const {token} = useSelector(store => store.auth);


  return (
    <>
    <form 
    onSubmit={(e)=>{
      e.preventDefault();
      dispatch(handleSignup({
        firstName : formValues.firstName,
        lastName : formValues.lastName,
        username : formValues.username,
        password : formValues.password,
        avatarURL: formValues.avatarURL
      }));
      navigate(location?.state?.from?.pathname)
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
     className='btn btn-primary login-btn'
     >Sign Up</button>
     <span
     className="link__text"
     onClick={()=>setTogglePage(true)}
      >Back to Login</span>

    </form>
    </>
  )
}

export default SignUp