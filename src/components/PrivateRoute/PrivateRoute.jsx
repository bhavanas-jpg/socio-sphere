import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
 const {token} = useSelector(store =>store.auth);
 const location = useLocation();
 const navigate = useNavigate();



  return (
    token ? children : <Navigate to="/login" state={{from: location }} replace />
  )
}

export default PrivateRoute