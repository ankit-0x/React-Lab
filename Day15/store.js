import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./slice1";

const store = configureStore({
    reducer:{
        slice1:slice1Reducer
    }
})

export default store;

//slice name: reducer
//slice2 : slice2Reducer
//slice3 : slice3Reducer
