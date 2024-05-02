import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../feature/SlideSlice";

const store = configureStore({
  reducer: {
    slide: slideReducer,
  },
});

export default store;
