import { createSlice } from "@reduxjs/toolkit";

export const indexCardsLearnSlice = createSlice({
  name: "indexCardsLearn",
  initialState: {
    indexCardsLearn: null,
    header: null,
    color: "default",
  },
  reducers: {
    setIndexCardsLearn: (state, action) => {
      state.indexCardsLearn = action.payload.cards;
      state.header = action.payload.header;
    },
    removeIndexCardsLearn: (state) => {
      state.indexCardsLearn = null;
      state.header = null;
    },
    setIndexCardsColor: (state, action) => {
      state.color = action.payload;
    },
    removeIndexCardsColor: (state) => {
      state.color = "default";
    },
  },
});

export const {
  setIndexCardsLearn,
  removeIndexCardsLearn,
  setIndexCardsColor,
  removeIndexCardsColor,
} = indexCardsLearnSlice.actions;

export const selectIndexCardsLearn = (state) =>
  state.indexCardsLearn.indexCardsLearn;

export const selectIndexCardsLearnHeader = (state) =>
  state.indexCardsLearn.header;

export const selectIndexCardsColor = (state) => state.indexCardsLearn.color;

export default indexCardsLearnSlice.reducer;
