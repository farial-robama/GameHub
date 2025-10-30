import React, { createContext, useState } from "react";
import { useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import LoadingSpinner from "../Components/LoadingSpinner";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = async (email, password) => {
  setLoading(true);
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } finally {
    setLoading(false);
  }
};

 const googleLogin = async () => {
  setLoading(true);
  try {
    const res = await signInWithPopup(auth, googleProvider);
    return res;
  } finally {
    setLoading(false);
  }
};

  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  const logOut = async () => {
  setLoading(true);
  try {
    await signOut(auth);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    signIn,
    googleLogin,
    logOut,
    loading,
    setLoading,
    updateUser,
  };

  // if (loading) {
  //   return <LoadingSpinner></LoadingSpinner>
  // }
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
