// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFwmYoGOjfdrmDEPWrolNU8P2xYE7Khb4",
  authDomain: "simple-firebase-auth-638c4.firebaseapp.com",
  projectId: "simple-firebase-auth-638c4",
  storageBucket: "simple-firebase-auth-638c4.firebasestorage.app",
  messagingSenderId: "766180295668",
  appId: "1:766180295668:web:df7f7b93fbdc4c9f526fa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);