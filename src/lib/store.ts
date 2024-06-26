import { configureStore } from "@reduxjs/toolkit";
import states from "./slices/states";

const store = configureStore({
  reducer: {
    states: states,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;