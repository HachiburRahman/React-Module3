/* eslint-disable no-unused-vars */
import React, { use, useRef, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const Register = () => {
  const [successful, setSuccessful] = useState(false);
  const [errorr, setError] = useState("");
  const { createUser } = use(AuthContext);
  const emailRef=useRef();
  const passwordRef=useRef();
  //  console.log(createUser)
  const handleRegister = (e) => {
    e.preventDefault();
    // const name=e.target.name.value;
    setError('');
    setSuccessful(false);
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    const email=emailRef.current.value;
    const password=passwordRef.current.value;
    console.log(email,password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccessful(true);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl mt-10">
      <h1 className="text-3xl font-bold text-center">Register Now</h1>
      <div className="card-body">
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Name"
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
              ref={emailRef}
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
              ref={passwordRef}
            />
            <div>
              <p className="link link-hover">
                Already Have An Account? Please{" "}
                <Link className="underline hover:text-blue-400">Login</Link>
              </p>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        {successful && (
          <p className="text-green-400">Registration Successfull</p>
        )}
        <p className="text-red-400">{errorr}</p>
      </div>
    </div>
  );
};

export default Register;
