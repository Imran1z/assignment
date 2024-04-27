import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = () => {

  return currentUser?<Outlet/>:<Navigate to={'/signin'}/>
  
}

export default PrivateRoute