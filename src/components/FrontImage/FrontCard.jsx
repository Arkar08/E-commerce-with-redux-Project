/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/feature/cartProduct";

const FrontCard = ({ store }) => {
  const dispatch = useDispatch();
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
          <h2 className="text-xl">Size:</h2>
          <h3 className="px-2 text-xl text-red-600">{store.size[0]}</h3>
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-xl px-2">Color:</h2>
          <div
            className="w-[20px] h-[20px] rounded-full"
            style={{ background: store.color[0] }}
          ></div>
        </div>
      </div>
      <div className="flex items-center justify-center m-4">
        <button
          className="p-2 bg-black text-white text-xl rounded-md border-none outline-none hover:bg-red-600 hover:text-black"
          onClick={() =>
            dispatch(
              addProduct({
                id: store.id,
                qty: 1,
                name: store.name,
                color: store.color[0],
                size: store.size[0],
                price: store.price,
                img: store.img,
              })
            )
          }
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FrontCard;
