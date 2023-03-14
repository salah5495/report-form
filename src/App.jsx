import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './utils/useAuth';
import { Suspense, lazy } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import NAV_ITEMS from './constants/navigation';

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
        <Routes>
          <Route path={NAV_ITEMS.HOME.to} element={<Home />} />
          <Route path={NAV_ITEMS.SIGNIN.to} element={<SignIn />} />
        </Routes>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
