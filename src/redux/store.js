import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./Slice/menuSlice";
import modalSlice from "./Slice/modalSlice";

const rootReducers = {
  menu : menuSlice,
  modal : modalSlice
}

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
