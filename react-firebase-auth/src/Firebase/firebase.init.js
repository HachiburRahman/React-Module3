// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl5HWLay9jnXQWPfN7FkSqXUMTw-0InRA",
  authDomain: "react-firebase-auth-f719e.firebaseapp.com",
  projectId: "react-firebase-auth-f719e",
  storageBucket: "react-firebase-auth-f719e.firebasestorage.app",
  messagingSenderId: "966478191022",
  appId: "1:966478191022:web:532c8d10cd7bd6d894d03f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);