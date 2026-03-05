import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartSlicer";
import menuReducer from "./menuSlice";
import restReducer from "./restSlice";

export const store = configureStore({
  reducer: {
    cartslice: CartReducer,
    menu: menuReducer,
    rest: restReducer
  },
});