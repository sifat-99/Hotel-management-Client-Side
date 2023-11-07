import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import app from "../../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  console.log(user);
  const signInWithGoogle = (GoogleAuthProvider) => {
    setLoading(true);
    return signInWithPopup(auth, GoogleAuthProvider);
  };

  const createUser = async (email, password, name, image) => {
    setLoading(true);
    const createdUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const UpdateUser = createdUser.user;
    await updateProfile(UpdateUser, {
      displayName: name,
      photoURL: image,
    });
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return auth.signOut();
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const LoggedUser = {email: userEmail}
      setUser(currentUser);
      setLoading(false);
      if(currentUser){
        
        axios.post('http://localhost:5001/jwt',LoggedUser, {withCredentials: true})
        .then(res => console.log(res.data))
      }
      else{
        axios.post('http://localhost:5001/logout',LoggedUser, {withCredentials: true})
        .then(res => console.log(res.data))
      }
    });
    return () => {
      unSubscribe();
    };
  }, [user?.email]);

  const AuthInfo = {
    user,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
