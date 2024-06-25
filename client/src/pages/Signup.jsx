import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [resMessage, setResMessage] = useState(false);
  const [res, setResponce] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFromData] = useState({});
  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/signup`,
        formData
      );
      setResponce(response.data);
      console.log(response.data);
    } catch (error) {
      // console.error(
      //   "Error:",
      //   error.response ? error.response.data : error.message
      // );
      setResponce(
        error.response ? error.response.data : { msg: error.message }
      );
    }
    setLoading(false);
    setResMessage(true);
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
        <button
          className={`bg-slate-700 uppercase text-white p-3 rounded-lg hover:opacity-90 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {/* Sign Up */}
          {loading ? "Loading...." : "Sign Up"}
        </button>
      </form>
      {resMessage && res && (
        <div
          className={`text-center mt-2 ${
            res.existingUser ? "text-red-500" : "text-green-500"
          }`}
        >
          <h1>{res.msg}</h1>
        </div>
      )}

      <div className="flex gap-2 mt-5 ">
        <p>Have an Account?</p>

        <Link to={"/sign-in"}>
          <span onChange={handleChange} className="text-blue-500">
            Sign in
          </span>
        </Link>
      </div>
    </div>
    // needs to add some functionality
  );
};

export default Signup;
