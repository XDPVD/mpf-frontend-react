import React from "react";
import Course from "../pages/Course";
import CssBaseline from "@material-ui/core/CssBaseline";
import Login from "./Login";
import AnadirCurso from "./AnadirCurso";
function App() {
  return (
    <>
      <Login />
      <CssBaseline />
      <Course />
      <AnadirCurso />
    </>
  );
}

export default App;
