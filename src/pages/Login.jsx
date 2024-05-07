/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="bg-gray-300 w-full h-screen flex items-center justify-center mx-auto">
        <form className="w-[350px] border shadow-lg rounded-md shadow-black">
          <h1 className="text-center text-3xl font-bold p-4 uppercase space-x-0">
            Login
          </h1>
          <div className="flex flex-col w-[90%] mx-auto">
            <label className="py-2 text-xl font-semibold">Email:</label>
            <input
              type="text"
              placeholder="Email"
              className="p-2 rounded-md border-none outline-none"
            />
          </div>
          <div className="flex flex-col w-[90%] mx-auto">
            <label className="py-2 text-xl font-semibold">Password:</label>
            <input
              type="password"
              placeholder="Password"
              className="p-2 rounded-md border-none outline-none"
            />
          </div>
          <div className="flex justify-between items-center m-2">
            <h2 className="hover:underline hover:text-blue-600 cursor-pointer">
              Forget Password ?
            </h2>
            <div className="flex items-center justify-center">
              <input type="checkbox" className="cursor-pointer" />
              <h2 className="px-1">Remember Me</h2>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <h2 className="text-black">
              Don't have an account ?{" "}
              <Link
                className="hover:underline hover:text-blue-600"
                to="/signup"
              >
                Signup
              </Link>
            </h2>
          </div>
          <div className="flex justify-center items-center m-4">
            <button
              type="button"
              placeholder="Submit"
              className="p-2 bg-black rounded-md text-xl text-white cursor-pointer w-[50%]"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
