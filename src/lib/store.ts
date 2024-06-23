import { configureStore } from "@reduxjs/toolkit";
import apiData from "./slices/apiData";

const store = configureStore({
  reducer: {
    apiData: apiData,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;