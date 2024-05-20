/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeProduct } from "../../redux/feature/cartProduct";

const Cart = () => {
  const cartProduct = useSelector((state) => state.cart.product);
  const totalamount = useSelector((state) => state.cart.totalamount);
  const dispatch = useDispatch();
  return (
    <>
      <div className=" px-12 pt-4">
        <Link to="/">
          <button className="bg-red-500 p-2 rounded-md text-white">Back</button>
        </Link>
      </div>
      <div className="p-4  w-[90%] mx-auto mt-4 h-[88vh]">
        <h1 className="text-3xl font-bold text-center">Bags</h1>
        {cartProduct.length === 0 ? (
          <h1 className="text-4xl mt-4 text-red-500 text-center">
            Your bag is empty.
          </h1>
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
                      className="w-[120px] h-[120px] object-cover object-center"
                    />
                  </div>
                  <div>
                    <h1 className="text-xl">
                      Name: <span className="ml-2">{cart.name}</span>
                    </h1>
                    <h1 className="text-xl">
                      Single Price:{" "}
                      <span className="text-red-500 ml-2">${cart.price}</span>
                    </h1>
                    <h1 className="text-xl">
                      Total Price:{" "}
                      <span className="text-red-500 ml-2">
                        ${cart.totalAmount}
                      </span>
                    </h1>
                    <h1 className="text-xl">
                      Size: <span className="ml-2">{cart.size}</span>
                    </h1>
                    <h1 className="text-xl">
                      Qty: <span className="text-red-500 ml-2">{cart.qty}</span>
                    </h1>
                    <div className="flex items-center">
                      <h2 className="text-xl">Color:</h2>
                      <div
                        className="w-[20px] h-[20px] rounded-full ml-2"
                        style={{ background: cart.color }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="text-white bg-red-500 p-2 rounded-md shadow-md"
                      onClick={() => dispatch(removeProduct(cart))}
                    >
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
