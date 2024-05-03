import React from "react";

const NavFooter = () => {
  return (
    <div className="bg-black text-white lg:flex justify-around items-center w-full h-[30px] md:hidden sm:hidden">
      <div>
        <h2 className="text-md font-semibold">50% Off</h2>
      </div>
      <div>
        <h2 className="text-md font-semibold">Free shiping and returns</h2>
      </div>
      <div>
        <h2 className="text-md font-semibold">Different payment method</h2>
      </div>
    </div>
  );
};

export default NavFooter;
