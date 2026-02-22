import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slicer";

const store = configureStore({
  reducer: {
    slice1: cartReducer,
  },
});

export default store;
