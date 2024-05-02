/* eslint-disable react/prop-types */
import React from "react";

const FrontCard = ({ store }) => {
  return (
    <div className="w-[350px] border rounded-md shadow-lg">
      <img
        src={store.img}
        alt="frontImg"
        className="w-[80%] p-2 rounded-md h-[300px] mx-auto shadow-lg object-cover object-center"
      />
      <h2 className="text-xl text-center font-semibold mt-2">{store.name}</h2>
      <h3 className="text-center text-wrap px-4 text-md">{store.text}</h3>
      <div className="flex justify-between items-center mt-2 px-4">
        <div className="flex">
          <h2 className="text-xl">Size</h2>
          <h3 className="px-2 text-xl text-red-600">{store.size[0]}</h3>
        </div>
        <div className="flex">
          <h2 className="text-xl">Color</h2>
          <h3 className="px-2 text-xl">{store.color[0]}</h3>
        </div>
      </div>
      <div className="flex items-center justify-center m-4">
        <button className="p-2 bg-black text-white text-xl rounded-md border-none outline-none hover:bg-red-600 hover:text-black">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FrontCard;