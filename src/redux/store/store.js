import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../feature/SlideSlice";
import filterReducer from "../feature/FilterProducts";
import productReducer from "../feature/Products";

const store = configureStore({
  reducer: {
    slide: slideReducer,
    filter: filterReducer,
    product: productReducer,
  },
});

export default store;
