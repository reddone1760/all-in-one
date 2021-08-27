import { createGlobalStyle } from "styled-components";

export const Themes = {
  DARK: {
    bg0: "#303437",
    bg1: "#555555",
    bg2: "#484c51",
    bg4: "#444444",
    bg5: "#666666",
    hover0: "#d6d6d6",
    hover1: "#666666",
    hover2: "#444444",
    text1: "#d1d5db",
    text2: "#e5e7eb",
    text3: "#1f2937",

    default: "#666666",
    red: "rgba(248, 113, 113)",
    blue: "rgba(147, 197, 253)",
    green: "rgba(110, 231, 183)",
    yellow: "rgba(253, 230, 138)",
    pink: "#F9A8D4",
    purple: "#D8B4FE",

    // special: {
    redLight: "#7b89c9",
    orange: "#f08700",
    greenLight: "#23b26d",
    // },
  },

  LIGHT: {
    bg0: "#f5f5f5",
    bg1: "#dfdfdf",
    bg2: "#dadada",
    bg4: "#efefef",
    bg5: "#cacaca",
    hover0: "#d6d6d6",
    hover1: "#cacaca",
    hover2: "#f5f5f5",
    text1: "#4b5563",
    text2: "#374151",
    text3: "#1f2937",

    default: "#ededed",
    red: "rgba(252, 165, 165)",
    blue: "rgba(147, 197, 253)",
    green: "rgba(110, 231, 183)",
    yellow: "rgba(253, 230, 138)",
    pink: "#F9A8D4",
    purple: "#D8B4FE",

    // special: {
    redLight: "#7b89c9",
    orange: "#f08700",
    greenLight: "#23b26d",
    // },
  },
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    
    scrollbar-width: auto;
    scrollbar-color: rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.3);
    ::-webkit-scrollbar {
      width: 12px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.3);
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.25);
    }
  }`;
