/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../../redux/feature/cartProduct";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const oneProduct = useSelector((state) => state.product.products);
  const oneSize = oneProduct[0].size ? oneProduct[0].size[0] : "";
  const oneColor = oneProduct[0].color ? oneProduct[0].color[0] : "";
  const [size, setSize] = useState(oneSize);
  const [color, setColor] = useState(oneColor);
  const cartProduct = useSelector((state) => state.cart.product);
  console.log(cartProduct);
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
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                    >
                      {product.size.map((s, index) => {
                        return <option key={index}>{s}</option>;
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
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                    >
                      {product.color.map((c, index) => {
                        return <option key={index}>{c}</option>;
                      })}
                    </select>
                  </div>
                  <div className="flex items-center justify-center m-4">
                    <button
                      className="p-2 border text-black shadow-md text-xl rounded-md outline-none hover:bg-red-600 hover:text-black"
                      onClick={() =>
                        dispatch(
                          addProduct({
                            size,
                            color,
                            id: product.id,
                            price: product.price,
                            name: product.name,
                            qty: 1,
                            img: product.img,
                            totalAmount: product.price,
                          })
                        )
                      }
                    >
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
