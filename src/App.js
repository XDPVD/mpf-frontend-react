import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/_layout/Header";
import LateralBar from "./components/_layout/LateralBar";
import UpperBanner from "./components/_layout/UpperBanner";
import * as config from "./base/settings/config";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Lab from "./pages/Lab";
import Login from "./pages/Login";
import { AppContainer as Container } from "./styles/styles";

import theme from "./styles/theme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        {/* TODO: delete?? */}
        <Header />
        {(() => {
          if (false) {
            return <>Home </>;
          } else {
            return (
              <>
                <LateralBar /> <UpperBanner />
              </>
            );
          }
        })()}

        <Container>
          <Switch>
            {/* TODO: make an array for routes */}
            <Route exact path={config.urls.home}>
              <Home />
            </Route>

            <Route exact path={config.urls.login}>
              <Login />
            </Route>

            <Route path={config.urls.cursos}>
              <Courses />
            </Route>

            <Route path={config.urls.calendario}>Calendario</Route>

            <Route path={config.urls.grupos}>Grupo</Route>

            <Route path={config.urls.config}>Configuración</Route>
            {/* TODO: Think about changing this into something better */}
            <Route path='/ourlab'>
              <Lab />
            </Route>
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
