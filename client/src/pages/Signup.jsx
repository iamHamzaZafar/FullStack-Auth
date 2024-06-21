import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4" action="">
        <input
          className="bg-slate-100 rounded-lg p-3"
          type="text"
          id="username"
          placeholder="Username"
        />
        <input
          className="bg-slate-100 rounded-lg p-3"
          type="email"
          id="email"
          placeholder="Email"
        />
        <input
          className="bg-slate-100 rounded-lg p-3"
          type="password"
          id="password"
          placeholder="Password"
        />
        <button className="bg-slate-700 uppercase text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-80 ">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5 ">
        <p>Have an Account?</p>

        <Link to={"/sign-in"}>
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
