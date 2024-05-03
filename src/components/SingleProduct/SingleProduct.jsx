/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  const oneProduct = useSelector((state) => state.product.products);
  return (
    <>
      <div className="relative">
        <div className="lg:absolute top-8 left-8 md:m-4 m-4">
          <Link to="/">
            <button className="bg-black text-white p-2 rounded-md border-none outline-none">
              Back
            </button>
          </Link>
        </div>
        {oneProduct &&
          oneProduct.map((product) => {
            return (
              <div
                key={product.id}
                className="lg:flex md:flex justify-center items-center px-2 w-full h-[650px] sm:flex-none"
              >
                <div className="lg:w-[30%] h-[80%] px-4  md:w-[90%]">
                  <img
                    src={product.img}
                    alt="singleImage"
                    className="w-full h-full rounded-lg shadow-lg object-fill object-center"
                  />
                </div>
                <div className="lg:w-[30%] md:w-[100%] px-4">
                  <h1 className="text-2xl font-semibold text-center p-2">
                    {product.name}
                  </h1>
                  <h2 className="font-bold text-xs space-x-0">
                    {product.text}
                  </h2>
                  <div className="flex flex-col mt-2">
                    <label htmlFor="size" className="text-md">
                      Pick a Size{" "}
                    </label>
                    <select
                      id="size"
                      className="h-[40px] px-2 my-2 border rounded-md w-[90%]"
                    >
                      {product.size.map((s, index) => {
                        return (
                          <option key={index} value={s}>
                            {s}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="color" className="text-md">
                      Pick a color{" "}
                    </label>
                    <select
                      id="color"
                      className="h-[40px] px-2 my-2 border rounded-md w-[90%]"
                    >
                      {product.color.map((c, index) => {
                        return (
                          <option key={index} value={c}>
                            {c}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="flex items-center justify-center m-4">
                    <button className="p-2 border text-black shadow-md text-xl rounded-md outline-none hover:bg-red-600 hover:text-black">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default SingleProduct;
