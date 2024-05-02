import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../feature/SlideSlice";
import filterReducer from "../feature/FilterProducts";

const store = configureStore({
  reducer: {
    slide: slideReducer,
    filter: filterReducer,
  },
});

export default store;
