import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  switchCounter: true,
};

export const sliceCounter = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.switchCounter = !state.switchCounter;
    },
  },
});

export const counterActions = sliceCounter.actions;
