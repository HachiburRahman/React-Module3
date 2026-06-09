/* eslint-disable no-undef */
import React, { useRef, useState } from "react";
// import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [eye, setEye] = useState(false);
  const emailRef=useRef('')

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordSixRegex = /^.{6,}$/;
  const passwordLaterRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
  const passwordSpecialCharacterRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;

  const handleEyePassword = (e) => {
    e.preventDefault();
    setEye(!eye);
  };

  const hanldeForgetPassword=(e)=>{
      e.preventDefault();
       const emailadd=emailRef.current.value;

       sendPasswordResetEmail(auth, emailadd)
       .then(()=>{
        console.log(emailadd)
       })

  }

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms =e.target.terms.checked;
    console.log("Clicked", email, password,terms);
   
    setError("");
    setSuccess(false);
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    } else if (!passwordSixRegex.test(password)) {
      setError("Password must be at least 6 characters long.");
      return;
    } else if (!passwordLaterRegex.test(password)) {
      setError(
        "Password must be contain at least one uppercase and one lowercase letter.",
      );
      return;
    } else if (!passwordSpecialCharacterRegex.test(password)) {
      setError("Password must include at least one special character.");
      return;
    }
    else if(!terms){
      setError('Please accept our terms and conditions')
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
        e.target.reset();
        

        //verification email
        sendEmailVerification(result.user);
    alert("Verification email sent. Please check your inbox.");

      

      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                  ref={emailRef}
                />
                <div className="relative">
                  <div>
                    <label className="label">Password</label>
                    <input
                      type={eye ? "text" : "password"}
                      className="input"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                  <button
                    className="btn btn-xs absolute top-7 left-71"
                    onClick={handleEyePassword}
                  >
                    {eye ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div className="mb-2">
                  <a className="link link-hover" onClick={hanldeForgetPassword}>Forgot password?</a>
                </div>
                <label className="label">
                  <input type="checkbox"  className="checkbox" name="terms" />
                  Accept Our Terms and Conditions
                </label>
                <button className="btn btn-neutral mt-4">Register</button>
                <p className="text-red-500">{error}</p>
                {success && (
                  <p className="text-green-500">Registration successful!</p>
                )}
              </fieldset>
            </form>
             <p>Already have an account? Please <Link className="text-blue-400 underline" to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
