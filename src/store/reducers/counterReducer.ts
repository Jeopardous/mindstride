import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {  CounterState } from '../types';

const initialState: CounterState = {
  count: 0,
};

const counterReducer=createSlice({
name:"counter",
initialState,
reducers:{
    increment: (state,action:PayloadAction<number>) => {
        state.count += action.payload;;
      },
    decrement: (state,action:PayloadAction<number>) => {
        state.count -= action.payload;;
    },
}
})
export default counterReducer;