import { createStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer";
// import reducer from "../../Store/CounterSlice";

const store = createStore(Reducer);

export default store;