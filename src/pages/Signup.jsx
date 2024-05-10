/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../redux/feature/auth";

const Signup = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(values));
    navigate("/");
  };
  return (
    <div className="bg-gray-300 w-full h-screen flex items-center justify-center mx-auto">
      <form className="w-[350px] border shadow-lg rounded-md shadow-black">
        <h1 className="text-center text-3xl font-bold p-4 uppercase space-x-0">
          Sign up
        </h1>
        <div className="flex flex-col w-[90%] mx-auto">
          <label className="py-2 text-xl font-semibold">Name:</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={values.name}
            className="p-2 rounded-md border-none outline-none"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-[90%] mx-auto">
          <label className="py-2 text-xl font-semibold">Email:</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={values.email}
            className="p-2 rounded-md border-none outline-none"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-[90%] mx-auto">
          <label className="py-2 text-xl font-semibold">Password:</label>
          <input
            type="password"
            placeholder="Password"
            className="p-2 rounded-md border-none outline-none"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center items-center m-2">
          <h2 className="text-black">
            Already have an account ?{" "}
            <Link className="hover:underline hover:text-blue-600" to="/">
              Login
            </Link>
          </h2>
        </div>
        <div className="flex justify-center items-center m-4">
          <button
            type="button"
            placeholder="Submit"
            className="p-2 bg-black rounded-md text-xl text-white cursor-pointer w-[50%]"
            onClick={handleSubmit}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
