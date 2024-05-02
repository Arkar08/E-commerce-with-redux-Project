import React from "react";
import logo from "../../assets/images/logo.png";
const Nav = () => {
  return (
    <div className="bg-white w-full h-[80px] flex justify-between items-center px-[100px] border-b-4">
      <img src={logo} alt="logo" className="w-[70px]" />
      <div className="flex">
        <div>
          <h2 className="text-xl mr-4 cursor-pointer font-semibold">
            Whish List
          </h2>
        </div>
        <div>
          <h2 className="text-xl mr-4 cursor-pointer font-semibold">
            Shopping bag
          </h2>
        </div>
        <div>
          <h2 className="text-xl cursor-pointer font-semibold">Log out</h2>
        </div>
      </div>
    </div>
  );
};

export default Nav;
