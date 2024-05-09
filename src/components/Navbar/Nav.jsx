/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../assets/images/logo.png";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/feature/auth";

const Nav = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white w-full h-[80px] flex justify-between items-center px-[100px] border-b-4">
      <img src={logo} alt="logo" className="w-[70px]" />
      <div className="flex ">
        <div className="flex items-center justify-center cursor-pointer">
          <FaHeart size={25} />
          <h2 className="text-xl mr-4 font-semibold pl-1">Whish List</h2>
        </div>
        <div className="flex items-center justify-center cursor-pointer  text-center">
          <FaCartShopping size={25} />
          <h2 className="text-xl mr-4 font-semibold pl-1">Shopping bag</h2>
        </div>
        <div className="flex items-center justify-center cursor-pointer  text-center">
          <MdOutlineLogout size={25} />
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
