import { configureStore } from "@reduxjs/toolkit";
import ecosystemIconsReducer from "./ecosystemIconsSlice";
// @ts-ignore
import GuessGameReduser from './guessGameSlice.ts'

export const store = configureStore({
  reducer: {
    ecosystemIcons: ecosystemIconsReducer,
    guessGame: GuessGameReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch