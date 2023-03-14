import React from 'react';
import { useAuth } from './useAuth';
import { Navigate, useLocation } from 'react-router';
import NAV_ITEMS from '../constants/navigation';
import { Backdrop, CircularProgress } from '@mui/material';

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  if (auth?.loading)
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    );

  return auth?.user ? (
    children
  ) : (
    <Navigate
      to={{ pathname: NAV_ITEMS.SIGNIN.to, state: { from: location } }}
    />
  );
};

export default PrivateRoute;
