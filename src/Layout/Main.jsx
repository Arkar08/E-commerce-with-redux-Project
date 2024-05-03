/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Filterbutton from "../components/Filter/Filterbutton";
import FrontImage from "../components/FrontImage/FrontImage";
import Slide from "../components/Slide/Slide";
const Main = () => {
  return (
    <>
      <Navbar />
      <Slide />
      <Filterbutton />
      <FrontImage />
    </>
  );
};

export default Main;
