/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import FilterHeader from "./FilterHeader";
import FilterImage from "./FilterImage";
import FilterFooter from "./FilterFooter";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../redux/feature/FilterProducts";
import { Link } from "react-router-dom";

const Filterbutton = () => {
  const types = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex justify-center items-center">
        {types &&
          types.map((b, index) => {
            return (
              <div key={index} className="m-2">
                <Link to={`products/${b}`}>
                  <button
                    type="button"
                    className="bg-white text-black p-2 rounded-md shadow-md border-none outline-none cursor-pointer text-xl hover:bg-green-500"
                    onClick={() => dispatch(filterProducts(b))}
                  >
                    {b}
                  </button>
                </Link>
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
