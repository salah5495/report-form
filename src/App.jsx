import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/Signin';
import { AuthProvider } from './utils/useAuth';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<SignIn />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
