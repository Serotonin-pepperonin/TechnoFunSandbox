import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAnswer: false
};

const guessGameSlice = createSlice({
  name: "guessGame",
  initialState,
  reducers: {
    setIsAnswer(state){
        state.isAnswer = !state.isAnswer;
    },
  },
});

export const {
  setIsAnswer
} = guessGameSlice.actions;

export default guessGameSlice.reducer;
