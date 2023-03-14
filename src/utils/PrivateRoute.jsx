import React from 'react';
import { useAuth } from './useAuth';
import { Navigate, useLocation } from 'react-router';
import NAV_ITEMS from '../constants/navigation';

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return auth?.user ? (
    children
  ) : (
    <Navigate
      to={{ pathname: NAV_ITEMS.SIGNIN.to, state: { from: location } }}
    />
  );
};

export default PrivateRoute;
