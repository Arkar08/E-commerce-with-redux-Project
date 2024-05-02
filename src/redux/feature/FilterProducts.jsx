import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

const initialState = {
  filter: JSON.parse(localStorage.getItem("products")) || storeData,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterProducts(state, action) {
      try {
        const filte = storeData.filter((s) => {
          return s.type === action.payload;
        });
        state.filter = filte;
        console.log(filte);
        const saveItem = JSON.stringify(filte);
        localStorage.setItem("products", saveItem);
      } catch (error) {
        return error;
      }
    },
  },
});

export const { filterProducts } = filterSlice.actions;
export default filterSlice.reducer;
