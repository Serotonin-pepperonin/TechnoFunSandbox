import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPhoneActive: false,
  isWatchActive: false,
  isTabActive: false,
  isBudsActive: false,
  isTvActive: false,
};

const ecosystemIconsSlice = createSlice({
  name: "ecosystemIcons",
  initialState,
  reducers: {
    setPhoneActive(state) {
      state.isPhoneActive = !state.isPhoneActive;
    },
    setWatchActive(state) {
      state.isWatchActive = !state.isWatchActive;
    },
    setTabActive(state) {
      state.isTabActive = !state.isTabActive;
    },
    setBudsActive(state) {
      state.isBudsActive = !state.isBudsActive;
    },
    setTvActive(state) {
      state.isTvActive = !state.isTvActive;
    },
  },
});

export const {
  setPhoneActive,
  setWatchActive,
  setTabActive,
  setBudsActive,
  setTvActive,
} = ecosystemIconsSlice.actions;

export default ecosystemIconsSlice.reducer;
