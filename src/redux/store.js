import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./Slice/menuSlice";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
