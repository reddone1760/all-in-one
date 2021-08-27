import { createSlice } from "@reduxjs/toolkit";
import storage from "local-storage-fallback";

const theme = storage.getItem("theme");
const initalTheme = theme || "light";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: initalTheme,
  },
  reducers: {
    changeTheme: (state, action) => {
      if (!action.payload) {
        state.theme = state.theme === "light" ? "dark" : "light";
      } else {
        state.theme = action.payload.theme;
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export const selectTheme = (state) => state.theme.theme;

export default themeSlice.reducer;
