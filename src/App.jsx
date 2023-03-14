import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './utils/useAuth';
import { Suspense, lazy } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

const SignIn = lazy(() => import('./components/Signin'));

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
        <Routes>
          <Route path='/' element={<SignIn />} />
        </Routes>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
