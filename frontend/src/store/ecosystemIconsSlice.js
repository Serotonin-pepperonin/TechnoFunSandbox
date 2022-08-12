import { createSlice } from "@reduxjs/toolkit";

const ecosystemIconsSlice = createSlice({
  name: "ecosystemIcons",
  initialState: {
    isPhoneActive: false,
    isWatchActive: false,
    isTabActive: false,
    isBudsActive: false,
    isTvActive: false,
  },
  reducers: {
    setPhoneActive(state, action) {
      state.isPhoneActive = action.payload;
    },
    setWatchActive(state, action) {
      state.isWatchActive = action.payload;
    },
    setTabActive(state, action) {
      state.isTabActive = action.payload;
    },
    setBudsActive(state, action) {
      state.isBudsActive = action.payload;
    },
    setTvActive(state, action) {
      state.isTvActive = action.payload;
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
