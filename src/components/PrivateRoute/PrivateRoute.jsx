import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
 const {token} = useSelector(store =>store.auth);
 const location = useLocation();

  return (
    token ? children : <Navigate to="/login" state={{from: location}} replace />
  )
}

export default PrivateRoute