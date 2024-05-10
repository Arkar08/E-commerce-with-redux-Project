import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../feature/SlideSlice";
import filterReducer from "../feature/FilterProducts";
import productReducer from "../feature/Products";
import authReducer from "../feature/auth";
import cartProductReducer from "../feature/cartProduct";

const store = configureStore({
  reducer: {
    slide: slideReducer,
    filter: filterReducer,
    product: productReducer,
    auth: authReducer,
    cart: cartProductReducer,
  },
});

export default store;
