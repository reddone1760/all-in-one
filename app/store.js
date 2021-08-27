import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import indexCardsLearnReducer from "./features/indexCardsLearnSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    indexCardsLearn: indexCardsLearnReducer,
  },
});
