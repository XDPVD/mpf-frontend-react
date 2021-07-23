import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "@layout/Header";
import LateralBar from "@layout/LateralBar";
import UpperBanner from "@layout/UpperBanner";
import * as config from "@settings/config";
import Courses from "@pages/Courses";
import Home from "@pages/Home";
import Login from "@pages/Login";
import { AppContainer as Container } from "@styles/Styles";

import theme from "@styles/theme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

import { UsuarioProvider, useUsuario } from "./base/context/usuario-context";

import { createBrowserHistory } from "history";
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';
import Configuration from "@pages/Configuration";
// Components

export default function appWithContext() {return (<> <CookiesProvider><UsuarioProvider>
  <App></App>
</UsuarioProvider></CookiesProvider></>)}

function App() {
  const { usuario } = useUsuario();
  const [cookies, setCookie] = useCookies(['name','userToken']);
  // TODO: Redirect /login
  const history = createBrowserHistory();

  const [cargar, setCargar] = useState(false);

  useEffect(() => {
    console.log(cookies.name);
  });

  

  return (
    <div className='App'>
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
              <Container>
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

                  <Route path={config.urls.config}>
                    <Configuration/>
                  </Route>
                  <Route path={config.urls.grupos}>Grupo</Route>

                </Switch>
              </Container>
            </>
          )}
        </ThemeProvider>
      </Router>
    </div>
  );
}
