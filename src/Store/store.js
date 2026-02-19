
import { configureStore } from "@reduxjs/toolkit";
import we from "./CounterSlice";
import userq from "./userSlice";


export  const store = configureStore({
  reducer: {
     countery: we,
     users1: userq,
  },
});

export default store;

