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
    filterGender(state, action) {
      const filterMale = action.payload;
      try {
        const filters = state.filter.filter((s) => {
          return s.gender === filterMale;
        });
        state.filter = filters;
        const saveItem = JSON.stringify(filters);
        localStorage.setItem("filter", saveItem);
      } catch (error) {
        return error;
      }
    },
    filterColor(state, action) {
      try {
        const colors = state.filter.filter((s) => {
          return s.color.includes(action.payload);
        });
        state.filter = colors;
        const saveItem = JSON.stringify(colors);
        localStorage.setItem("filter", saveItem);
      } catch (error) {
        return error;
      }
    },
    filterSize(state, action) {
      try {
        const sizes = state.filter.filter((s) => {
          return s.size.includes(action.payload);
        });
        state.filter = sizes;
        const saveItem = JSON.stringify(sizes);
        localStorage.setItem("filter", saveItem);
      } catch (error) {
        return error;
      }
    },
    clearFilter(state, action) {
      try {
        state.filter =
          JSON.parse(localStorage.getItem("products")) || storeData;
      } catch (error) {
        return error;
      }
    },
  },
});

export const {
  filterProducts,
  filterGender,
  filterColor,
  filterSize,
  clearFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
