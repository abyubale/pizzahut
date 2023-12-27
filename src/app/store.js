import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "../components/AddSubItem/addSubSlice";
import appHeaderReducer from "../components/AppHeader/appHeaderSlice";
export const store = configureStore({
  reducer: {
    addsub: cartReducers,
    apidata: appHeaderReducer,
  },
});
