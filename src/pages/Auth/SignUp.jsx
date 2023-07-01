import React, { useEffect, useState } from "react";
import { FaEye } from 'react-icons/fa';
import { HiEyeOff } from 'react-icons/hi';
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { handleSignup } from "./authSlice";

const SignUp = ({ setTogglePage }) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    avatarURL:
      "https://images.pexels.com/lib/avatars/purple.png?w=50&h=50&fit=crop",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useSelector((store) => store.auth);


  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleConfirmPasswordToggler = () => {
    setConfirmPassword(!confirmPassword);
  };
  const handlePasswordChange = (e) => {
    setPasswordMatch(e.target.value === formValues.confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setPasswordMatch(e.target.value === formValues.password);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            handleSignup({
              firstName: formValues.firstName,
              lastName: formValues.lastName,
              username: formValues.username,
              password: formValues.password,
              avatarURL: formValues.avatarURL,
            })
          );
          navigate(location?.state?.from?.pathname);
        }}
        className="auth-form"
      >
        <h1>Sign Up</h1>
        <input
          type="text"
          placeholder="Enter First Name"
          required
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, firstName: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          required
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, lastName: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Enter User Name"
          required
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, username: e.target.value }))
          }
        />
        <div className="password__input">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          required
          onChange={(e) =>{
            setFormValues((prev) => ({ ...prev, password: e.target.value }))
            handlePasswordChange(e);
          }
           
          }
        />
          <span
          onClick={handlePasswordToggle}
          >{showPassword ? <FaEye className="password__icon"/> : <HiEyeOff className="password__icon"/>}</span>
          </div>

       <div className="password__input">
       <input
          type={confirmPassword ? "text" : "password"}
          placeholder="Confirm Password"
          required
          onChange={(e) =>
            {
              setFormValues((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }));
              handleConfirmPasswordChange(e);
            }
          }
        />
        <span
         onClick={handleConfirmPasswordToggler}
        >{confirmPassword ? <FaEye className="password__icon"/> : <HiEyeOff className="password__icon"/>}</span>
        {!passwordMatch && (
              <p className="password-error-msg">Passwords not matched</p>
            )}
        </div>
       
        <button type="submit" className="btn btn-primary login-btn">
          Sign Up
        </button>
        <span className="link__text" onClick={() => setTogglePage(true)}>
          Back to Login
        </span>
      </form>
    </>
  );
};

export default SignUp;
