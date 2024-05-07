import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  authorized: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  login() {},
  signup() {},
  logout() {},
});
export const { login, signup, logout } = authSlice.actions;
export default authSlice.reducer;
