/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/feature/auth";
import { Link } from "react-router-dom";

const Nav = () => {
  const dispatch = useDispatch();
  const cartproduct = useSelector((state) => state.cart.product);

  return (
    <div className="bg-white w-full h-[80px] flex justify-between items-center px-[100px] border-b-4">
      <img src={logo} alt="logo" className="w-[70px]" />
      <div className="flex ">
        <div className="flex items-center justify-center cursor-pointer">
          <FaHeart size={22} />
          <h2 className="text-xl mr-4 font-semibold pl-1">Whish List</h2>
        </div>
        <Link to="/cart">
          <div className="flex items-center justify-center cursor-pointer  text-center">
            <div className="relative">
              <span className="absolute bottom-4 left-4 text-2xl text-red-500 p-1 rounded-full">
                {cartproduct.length}
              </span>
              <FaCartShopping size={22} />
            </div>
            <h2 className="text-xl mr-4 font-semibold pl-1 select-none">
              Shopping bag
            </h2>
          </div>
        </Link>
        <div className="flex items-center justify-center cursor-pointer  text-center">
          <MdOutlineLogout size={22} />
          <h2
            className="text-xl font-semibold"
            onClick={() => dispatch(logout())}
          >
            Log out
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Nav;
