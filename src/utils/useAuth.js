import React, { createContext, useContext } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../service/firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useProvideAuth = () => {
  const [user, setUser] = React.useState(null);
  const [total, setTotal] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        setUser(userCredential.user);
        setLoading(false);
        return userCredential.user;
      }
    );
  };
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        setUser(userCredential.user);
        setLoading(false);
        return userCredential.user;
      }
    );
  };

  const signout = async () => {
    await signOut(auth).then(() => {
      setUser(null);
      setLoading(false);
    });
  };

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userCredential) => {
      if (userCredential) {
        setUser(userCredential.user); // set userCredential.user instead of userCredential
        setLoading(false);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return { user, signin, signup, signout, loading, total, setTotal };
};
