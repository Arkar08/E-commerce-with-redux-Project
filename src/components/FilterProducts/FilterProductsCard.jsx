/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";

const FilterProductsCard = ({ product }) => {
  return (
    <div className="w-[320px] border rounded-md shadow-lg border-none outline-none cursor-pointer">
      <div className=" p-2 rounded-md shadow-lg w-[80%] mx-auto">
        <img
          src={product.img}
          alt="productImg"
          className="w-[80%] h-[250px] mx-auto object-cover object-center"
        />
      </div>

      <h2 className="text-xl text-center font-semibold mt-2">{product.name}</h2>
      <h3 className="text-center text-wrap px-4">{product.text}</h3>
      <div className="flex justify-between items-center mt-4 px-4 border-t-2">
        <div>
          <h2 className="text-xl">{product.price}</h2>
        </div>
        <div className="flex">
          <h2 className="text-xl">Color:</h2>
          <h3 className="px-2 text-xl">{product.color[0]}</h3>
        </div>
      </div>
    </div>
  );
};

export default FilterProductsCard;
