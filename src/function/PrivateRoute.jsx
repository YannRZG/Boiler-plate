import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { checkAuth } from './Auth';

const PrivateRoute = () => {
  const location = useLocation();

  return checkAuth() ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoute;
