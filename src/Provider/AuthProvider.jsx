import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile, signOut, onAuthStateChanged, } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';


export const AuthContext = createContext(null)
const AuthProvider = ( {children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser,updateData)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return() => {
            unsubscribe()
        }
    },[])

    const authData = {
        user,setUser,createUser,signIn,logOut,loading,setLoading,updateUser,
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;