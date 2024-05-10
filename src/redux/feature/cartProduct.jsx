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
  reducers: {
    addProduct(state, action) {
      const choiceproduct = action.payload;
      console.log(choiceproduct);
    },
    removeProduct() {},
  },
});

export const { addProduct, removeProduct } = cartProduct.actions;
export default cartProduct.reducer;
