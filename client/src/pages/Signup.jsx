import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [formData, setFromData] = useState({});
  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data.msg);
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" action="">
        <input
          className="bg-slate-100 rounded-lg p-3"
          type="text"
          id="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          className="bg-slate-100 rounded-lg p-3"
          type="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="bg-slate-100 rounded-lg p-3"
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button className="bg-slate-700 uppercase text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-80 ">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5 ">
        <p>Have an Account?</p>

        <Link to={"/sign-in"}>
          <span onChange={handleChange} className="text-blue-500">
            Sign in
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
