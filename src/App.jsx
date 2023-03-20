import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './utils/useAuth';
import { Suspense, lazy } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import NAV_ITEMS from './constants/navigation';
import { TableInputProvider } from './utils/useTable';
import { Navigate } from 'react-router';

const SignIn = lazy(() => import('./components/Signin'));
const Home = lazy(() => import('./pages/Home'));
const PrivateRoute = lazy(() => import('./utils/PrivateRoute'));

function App() {
  return (
    <Suspense
      fallback={
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color='inherit' />
        </Backdrop>
      }
    >
      <AuthProvider>
        <TableInputProvider>
          <Routes>
            <Route path='/' element={<Navigate to={NAV_ITEMS.HOME.to} />} />
            <Route
            
              path={NAV_ITEMS.HOME.to}
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path={NAV_ITEMS.SIGNIN.to} element={<SignIn />} />
          </Routes>
        </TableInputProvider>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
