import { configureStore } from "@reduxjs/toolkit";
import dairyReducer from "./dairySlice";

const store = configureStore({
  reducer: {
    dairy: dairyReducer,
  },
 
});

export default store;
