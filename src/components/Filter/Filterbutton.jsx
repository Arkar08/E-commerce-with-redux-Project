/* eslint-disable no-undef */
import React from "react";
import FilterHeader from "./FilterHeader";
import FilterImage from "./FilterImage";
import FilterFooter from "./FilterFooter";

const Filterbutton = () => {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T - shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  return (
    <>
      <div className="flex justify-center items-center">
        {buttons.map((b, index) => {
          return (
            <div key={index} className="m-2">
              <button
                type="button"
                className="bg-black-400 p-2 rounded-md shadow-md border-none outline-none cursor-pointer text-xl"
              >
                {b}
              </button>
            </div>
          );
        })}
      </div>
      <FilterHeader />
      <FilterImage />
      <FilterFooter />
    </>
  );
};

export default Filterbutton;
