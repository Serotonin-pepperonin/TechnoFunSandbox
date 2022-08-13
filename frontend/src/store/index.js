import { configureStore } from "@reduxjs/toolkit";
import ecosystemIconsReducer from "./ecosystemIconsSlice";

export const store = configureStore({
  reducer: {
    ecosystemIcons: ecosystemIconsReducer
  },
});
