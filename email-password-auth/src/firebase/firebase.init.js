// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA72M-cHYg5nMKfFnLN1s1rumaWfr6_kYg",
  authDomain: "email-password-auth-1b431.firebaseapp.com",
  projectId: "email-password-auth-1b431",
  storageBucket: "email-password-auth-1b431.firebasestorage.app",
  messagingSenderId: "913274473656",
  appId: "1:913274473656:web:2198cf4d3c6ce9dd60384d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);