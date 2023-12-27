import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAccounts: [],
};

export const signupFormSlice = createSlice({
  name: "signupFormSlice",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.userAccounts = [...state.userAccounts, action.payload];
    },
  },
});

export const { addData } = signupFormSlice.actions;

export default signupFormSlice.reducer;
