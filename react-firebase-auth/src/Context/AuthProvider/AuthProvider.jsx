/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //   console.log(currentUser);
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const googleProvider=new GoogleAuthProvider();
  const googleSignIn=()=>{
    return signInWithPopup(auth,googleProvider)
  }

  const logOutUser=()=>{
     return signOut(auth)
  }

  const userInfo = {
    createUser,
    loginUser,
    user,
    logOutUser,
    loading,
    googleSignIn
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
