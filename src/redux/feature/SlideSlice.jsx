/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../../assets/data/dummyData";

const initialState = {
  value: 0,
  length: sliderData.length,
};
const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    nextSlide(state, action) {
      state.value = action.payload > state.length - 1 ? 0 : action.payload;
    },
    prevSlide(state, action) {
      state.value = action.payload < 0 ? state.length - 1 : action.payload;
    },
    dotSlide(state, action) {
      state.value = action.payload;
    },
  },
});

export const { nextSlide, prevSlide, dotSlide } = slideSlice.actions;
export default slideSlice.reducer;
