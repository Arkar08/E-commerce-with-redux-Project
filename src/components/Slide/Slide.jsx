/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dotSlide, nextSlide, prevSlide } from "../../redux/feature/SlideSlice";
import { sliderData } from "../../assets/data/dummyData";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const Slide = () => {
  const dispatch = useDispatch();
  const slideIndex = useSelector((state) => state.slide.value);
  return (
    <>
      <div className="relative pb-4 w-full">
        {sliderData.map((item) => {
          return (
            <div
              key={item.id}
              className={
                parseInt(item.id) === slideIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
            >
              {parseInt(item.id) === slideIndex && (
                <img
                  src={item.img}
                  alt="slide-Image"
                  className="h-[600px] w-full"
                />
              )}
              <div>
                <p className="text-4xl text-red-600 absolute top-[30%] left-[20%]">
                  {parseInt(item.id) === slideIndex && item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center w-full absolute top-[50%] px-12">
        <button
          onClick={() => dispatch(prevSlide(slideIndex - 1))}
          className="bg-white p-2 rounded-full text-center hover:bg-green-500"
        >
          <BiSolidLeftArrow />
        </button>
        <button
          onClick={() => dispatch(nextSlide(slideIndex + 1))}
          className="bg-white p-2 rounded-full text-center hover:bg-green-500"
        >
          <BiSolidRightArrow />
        </button>
      </div>
      <div className="absolute bottom-8 left-[50%] flex">
        {sliderData.map((dot, index) => {
          return (
            <div key={dot.id} className="px-1">
              <div
                className={
                  parseInt(dot.id) === slideIndex
                    ? "bg-green-400 w-[15px] h-[15px] rounded-full cursor-pointer"
                    : "bg-white w-[15px] h-[15px] rounded-full cursor-pointer"
                }
                onClick={() => dispatch(dotSlide(index))}
              ></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Slide;
