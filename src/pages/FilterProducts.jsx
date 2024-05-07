/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import FilterProductsCard from "../components/FilterProducts/FilterProductsCard";
import { Link } from "react-router-dom";

const FilterProducts = () => {
  const buttons = ["male", "female"];
  const { type } = useParams();
  const products = useSelector((state) => state.filter.filter);
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
              <button className="bg-white text-black p-2 rounded-md shadow-md border-none outline-none cursor-pointer text-xl hover:bg-green-500">
                {button}
              </button>
            </div>
          );
        })}
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
