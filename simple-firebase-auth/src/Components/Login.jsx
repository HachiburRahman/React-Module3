import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../firebase.init';
const provider = new GoogleAuthProvider();
const Login = () => {
    const [user,setUser]=useState(null)

    const handleSignIn=()=>{
        signInWithPopup(auth, provider)
        .then((result)=>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const handleSignOut=()=>{
        signOut(auth).then(() => {
  // Sign-out successful.
  setUser(null)
}).catch((error) => {
  // An error happened.
  console.log(error)
});
    }
    return (
        <div>
            <p>This is Login</p>
            
            
            {
                user?<button onClick={handleSignOut}>SignOut</button>:<button onClick={handleSignIn}>SignIn With Google</button>
            }
            {
                user && <div>
                      <p>{user.displayName}</p>
                      <p>{user.email}</p>
                      <img src={user.photoURL} alt="" />
                     </div>
            }
        </div>
    );
};

export default Login;