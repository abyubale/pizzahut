import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "../components/AddSubItem/AddSubSlice";
import appHeaderReducer from "../components/AppHeader/AppHeaderSlice";
export const store = configureStore({
  reducer: {
    addsub: cartReducers,
    apidata: appHeaderReducer,
  },
});
