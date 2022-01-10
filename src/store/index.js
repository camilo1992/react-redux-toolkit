import { configureStore } from "@reduxjs/toolkit";
import { sliceAuth } from "./auth-slice";
import { sliceCounter } from "./counter-slice";

const store = configureStore({
  reducer: { counter: sliceCounter.reducer, auth: sliceAuth.reducer },
});

export default store;
