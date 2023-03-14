import React, { createContext } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);
  const auth = getAuth();

  const signin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          setUser(userCredential.user);
        }
      );
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };
  const signup = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          setUser(userCredential.user);
        }
      );
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const signout = () => {
    setUser(null);
  };

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth, user]);

  return { user, error, signin, signup, signout };
};

export default useAuth;
