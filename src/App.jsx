import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './utils/useAuth';
import { Suspense, lazy } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { TableInputProvider } from './utils/useTable';


// Import PrivateRoute first
import PrivateRoute from './utils/PrivateRoute';

const SignIn = lazy(() => import('./components/Signin'));
const Home = lazy(() => import('./pages/Home'));

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
            <Route
            
              path='/'
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path='/signin' element={<SignIn />} />
          </Routes>
        </TableInputProvider>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
