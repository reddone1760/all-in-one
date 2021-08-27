import { useDispatch, useSelector } from "react-redux";
import { changeTheme, selectTheme } from "../app/features/themeSlice";
// import { useEffect } from "react";
// import storage from "local-storage-fallback";
import styled, { ThemeProvider } from "styled-components";
import { Themes, GlobalStyles } from "../styles/themes";

// Here is the hole Application.
// Here you can tirgger state ate the start of the page ( like the theme )

function App({ children }) {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === "light" ? Themes.LIGHT : Themes.DARK}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default App;
