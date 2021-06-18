import React from "react";
import Course from "../pages/Course";
import CssBaseline from "@material-ui/core/CssBaseline";
import Login from "./Login";
import theme from "./themes/theme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Login />
        <CssBaseline />
        <Course />
      </ThemeProvider>
    </>
  );
}

export default App;
