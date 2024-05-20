import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  price: 0,
  totalamount: 0,
  qty: 0,
};
const cartProduct = createSlice({
  name: "cartProduct",
  initialState,
  reducers: {
    addProduct(state, action) {
      const selectProduct = action.payload;
      try {
        const choice = state.product.find(
          (product) =>
            product.id === selectProduct.id &&
            product.size === selectProduct.size &&
            product.color === selectProduct.color
        );
        if (choice) {
          choice.qty++;
          choice.totalamount += selectProduct.price;
          state.totalamount += selectProduct.price;
          state.price += selectProduct.price;
        } else {
          state.product.push({
            id: selectProduct.id,
            size: selectProduct.size,
            color: selectProduct.color,
            qty: 1,
            price: selectProduct.price,
            name: selectProduct.name,
            img: selectProduct.img,
          });
          state.totalamount += selectProduct.price;
          state.price++;
        }
        console.log(state.totalamount);
      } catch (error) {
        return error;
      }
    },
    removeProduct() {},
  },
});

export const { addProduct, removeProduct } = cartProduct.actions;
export default cartProduct.reducer;
