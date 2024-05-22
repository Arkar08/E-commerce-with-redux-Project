import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

const initialState = {
  products: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    singleproduct(state, action) {
      try {
        const single = storeData.filter((data) => {
          return data.id === action.payload;
        });
        console.log(single);
        state.products = single;
        const saveItem = JSON.stringify(single);
        localStorage.setItem("singleproducts", saveItem);
      } catch (error) {
        return error;
      }
    },
  },
});

export const { singleproduct } = productSlice.actions;
export default productSlice.reducer;
