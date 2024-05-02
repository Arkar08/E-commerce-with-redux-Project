import React from "react";
import logo from "../../assets/images/logo.png";

const FrontFooter = () => {
  const year = new Date().getFullYear();
  console.log(year);
  return (
    <div className="flex items-center justify-around bg-black h-[50px] w-[80%] mx-auto rounded-md mt-4">
      <img src={logo} alt="footerLogo" className="w-[40px]" />
      <div>
        <h2 className="text-md text-white">
          Copyright@ {year} page by Marko Web
        </h2>
      </div>
    </div>
  );
};

export default FrontFooter;
