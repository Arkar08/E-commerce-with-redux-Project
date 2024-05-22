/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FilterProductsCard from "../components/FilterProducts/FilterProductsCard";
import { Link } from "react-router-dom";
import {
  clearFilter,
  filterColor,
  filterGender,
  filterSize,
} from "../redux/feature/FilterProducts";

const FilterProducts = () => {
  const buttons = ["male", "female"];
  const colors = [
    "black",
    "gray",
    "green",
    "red",
    "brown",
    "yellow",
    "orange",
    "blue",
    "purple",
  ];
  const sizes = ["M", "L", "XL", "S"];
  const { type } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.filter.filter);
  const [active, setActive] = useState(true);
  return (
    <div>
      <div className="p-8 flex items-center">
        <Link to="/">
          <h3 className="text-2xl text-blue-500 px-2 cursor-pointer hover:underline">
            Home
          </h3>
        </Link>
        <h2 className="text-2xl text-gray-500">{type}</h2>
      </div>

      <div className="flex px-6">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="m-2">
              <button
                className="bg-white text-black p-2 rounded-md shadow-md border-none outline-none cursor-pointer text-xl hover:bg-green-500"
                onClick={() => dispatch(filterGender(button))}
              >
                {button}
              </button>
            </div>
          );
        })}
        <div className="m-2">
          <select
            name="color"
            id="color"
            className="border-none p-2 bg-white text-black rounded-md shadow-md outline-none cursor-pointer text-xl"
            onChange={(e) => dispatch(filterColor(e.target.value))}
          >
            <option value="color" className="p-2">
              Select a color
            </option>
            {colors.map((c, index) => {
              return (
                <option value={c} key={index} style={{ color: c }}>
                  {c}
                </option>
              );
            })}
          </select>
          ;
        </div>
        <div className="m-2">
          <select
            name="size"
            id="size"
            className="border-none p-2 bg-white text-black rounded-md shadow-md outline-none cursor-pointer text-xl"
            onChange={(e) => dispatch(filterSize(e.target.value))}
            disabled={type === "Shoes" && active}
          >
            <option value="color" className="p-2">
              Select a Size
            </option>
            {sizes.map((s, index) => {
              return (
                <option value={s} key={index}>
                  {s}
                </option>
              );
            })}
          </select>
          ;
        </div>
        <div className="m-2">
          <button
            className="bg-white text-black p-2 rounded-md shadow-md border-none outline-none cursor-pointer text-xl hover:bg-green-500"
            onClick={() => dispatch(clearFilter())}
          >
            Clear Filter
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-6 px-6 mt-4">
        {products.map((product) => {
          return <FilterProductsCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default FilterProducts;
