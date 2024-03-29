import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useSelector} from 'react-redux';

const PrivateRoute = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.authentication);
  return isLoggedIn ? <Outlet /> : <Navigate to="/Home" />;
};

export default PrivateRoute;
