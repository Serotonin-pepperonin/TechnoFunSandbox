import { configureStore } from "@reduxjs/toolkit";
import ecosystemIconsReducer from "./ecosystemIconsSlice";

export const store = configureStore({
  reducer: {
    ecosystemIcons: ecosystemIconsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch