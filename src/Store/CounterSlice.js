import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const CounterSlice=createSlice({
    name:"counter123",
    initialState,
    reducers:{
     increment  :(state)=>{
        state.value+=1
     },
     decrement:(state)=>{
        state.value-=1
     },
     incrementbyamount:(state,action)=>{
       state.value+=action.payload
     }
    }
})

export const{increment,decrement,incrementbyamount} = CounterSlice.actions
export default CounterSlice.reducer