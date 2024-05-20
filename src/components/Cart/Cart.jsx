/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartProduct = useSelector((state) => state.cart.product);
  const totalamount = useSelector((state) => state.cart.totalamount);
  console.log(totalamount);
  return (
    <>
      <div className=" px-12 pt-4">
        <Link to="/">
          <button className="bg-red-500 p-2 rounded-md">Back</button>
        </Link>
      </div>
      <div className="p-4  w-[90%] mx-auto mt-4 h-[88vh]">
        <h1 className="text-3xl font-bold text-center">Carts</h1>
        {cartProduct.length === 0 ? (
          <h1 className="text-2xl mt-4 text-red-500">No Product has found</h1>
        ) : (
          <div className="overflow-y-scroll h-[450px] mt-4">
            {cartProduct.map((cart) => {
              return (
                <div
                  className="flex justify-between items-center  px-12 border rounded-md m-2"
                  key={cart.id}
                >
                  <div>
                    <img
                      src={cart.img}
                      alt="cart_image"
                      className="w-[100px] h-[100px] object-cover object-center"
                    />
                  </div>
                  <div>
                    <h1 className="text-xl">
                      Name: <span>{cart.name}</span>
                    </h1>
                    <h1 className="text-xl">
                      Price: <span>${cart.price}</span>
                    </h1>
                    <h1 className="text-xl">
                      Size: <span>{cart.size}</span>
                    </h1>
                    <h1 className="text-xl">
                      Qty: <span className="text-red-500">{cart.qty}</span>
                    </h1>
                  </div>
                  <div>
                    <button className="text-white bg-red-500 p-2 rounded-md shadow-md">
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className="border-t-4 flex justify-between items-center px-12 mt-8">
          <h1 className="text-3xl">Total Amount</h1>
          <h1 className="text-3xl text-red-500">${totalamount}</h1>
        </div>
      </div>
    </>
  );
};

export default Cart;
