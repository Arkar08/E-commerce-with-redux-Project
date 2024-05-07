import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  price: 0,
  totalamount: 0,
  qty: 1,
};
const cartProduct = createSlice({
  name: "cartProduct",
  initialState,
  addProduct() {},
  removeProduct() {},
});

export const { addProduct, removeProduct } = cartProduct.actions;
export default cartProduct.reducer;
