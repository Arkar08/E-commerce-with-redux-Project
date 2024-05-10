import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: localStorage.getItem("auth") || {
    name: "",
    email: "",
    password: "",
  },
  authorUser: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const userAuth = action.payload;
      const getItem = JSON.stringify(userAuth);
      const getUser = localStorage.setItem("auth", getItem);
      if (getUser) {
        state.authorUser = true;
        state.users = userAuth;
        console.log(userAuth);
      } else {
        console.log("plz sign up first");
      }
    },
    signup(state, action) {
      const userAuth = action.payload;
      state.authorUser = true;
      state.users = userAuth;
      console.log(userAuth);
      const saveItem = JSON.stringify(userAuth);
      localStorage.setItem("auth", saveItem);
    },
    logout(state) {
      state.authorUser = false;
      localStorage.removeItem("auth");
    },
  },
});
export const { login, signup, logout } = authSlice.actions;
export default authSlice.reducer;
