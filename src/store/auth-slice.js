import { createSlice } from "@reduxjs/toolkit";

const initialAuthentication = {
  isAuthenticated: false,
};
export const sliceAuth = createSlice({
  name: "authentication",
  initialState: initialAuthentication,
  reducers: {
    isLoggedIn(state) {
      state.isAuthenticated = true;
    },
    isLoggedOut(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = sliceAuth.actions;
