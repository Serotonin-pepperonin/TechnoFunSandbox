import { configureStore } from "@reduxjs/toolkit";
import ecosystemIconsReducer from "./ecosystemIconsSlice";

export default configureStore({
  reducer: ecosystemIconsReducer,
});
