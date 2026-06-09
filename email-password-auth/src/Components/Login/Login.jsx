import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase.init";
import { Link } from "react-router";

const Login = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("login click", email, password);

    setLoginSuccess(false);
    setLoginError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        
        if(!result.user.emailVerified)
        {
          alert("Please verify your email")
          return;
        }
        e.target.reset();
        setLoginSuccess(true);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl m-auto mt-5">
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p>
          New to our Website? Please{" "}
          <Link className="text-blue-400 underline" to="/register">
            Register
          </Link>
        </p>
        {loginSuccess && <p className="text-green-500">Successfully Login</p>}
        <p className="text-red-500">{loginError}</p>
      </div>
    </div>
  );
};

export default Login;
