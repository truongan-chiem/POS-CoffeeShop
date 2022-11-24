import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./Slice/accountSlice";
import menuSlice from "./Slice/menuSlice";
import modalSlice from "./Slice/modalSlice";

const rootReducers = {
  menu : menuSlice,
  modal : modalSlice,
  account : accountSlice
}

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
