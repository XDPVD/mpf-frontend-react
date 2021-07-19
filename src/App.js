import React, { useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "@layout/Header";
import LateralBar from "@layout/LateralBar";
import UpperBanner from "@layout/UpperBanner";
import * as config from "@settings/config";
import Courses from "@pages/Courses";
import Home from "@pages/Home";
import Login from "@pages/Login";

import theme from "@styles/theme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

import { UsuarioProvider } from "./base/context/usuario-context";

import { createBrowserHistory } from "history";
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';

import { useStyles } from "@styles/Styles";
// Components

export default function appWithContext() {return (<> <CookiesProvider><UsuarioProvider>
  <App></App>
</UsuarioProvider></CookiesProvider></>)}

function App() {
  const classes = useStyles();

  const [cookies, ] = useCookies(['name','userToken']);
  
  const history = createBrowserHistory();

  useEffect(() => {
    console.log(cookies.name);
  });

  return (
    <div className="App">
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Header />
          <UpperBanner />

          {!cookies.name ? (
            <>
              <Login />
            </>
          ) : (
            <>
              <LateralBar />
              <div className={classes.root}>
                <Switch>
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

                  <Route path={config.urls.config}>Configuracion</Route>
                  <Route path={config.urls.grupos}>Grupo</Route>

                  <Route path={config.urls.config}>Configuración</Route>
                </Switch>
              </div>
            </>
          )}
        </ThemeProvider>
      </Router>
    </div>
  );
}
