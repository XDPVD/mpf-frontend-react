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

import { UserProvider } from "./base/context/userContext";
import { CookiesProvider } from 'react-cookie';
import { useStyles } from "@styles/Styles";
import { useUser } from "./base/context/userContext";
// Components

export default function appWithContext() {
  return (
  <CookiesProvider>
    <UserProvider>
      <App></App>
    </UserProvider>
  </CookiesProvider>
)
}

function App() {
  const classes = useStyles();
  
  const [user, actions] = useUser();

  useEffect(() => {
    const checkCookies = async () =>{
      let [userCookie, tokenCookie] = actions.getCookies();

      if (userCookie || tokenCookie) {
        actions.removeUser();
        await actions.saveUser(userCookie);
        await actions.saveToken(tokenCookie);
      }
    }
    
    console.log('recargando la pagina');

    if(!user) checkCookies();
  },[user, actions])

  useEffect(() => {
    console.log("current user: ",user);
  })

  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <Header />
          <UpperBanner />

          { !user ? (<Login />) : (
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
                  <Route path={config.urls.config}>
                    Configuracion
                  </Route>
                  <Route path={config.urls.grupos}>
                    Grupo
                  </Route>
                </Switch>
              </div>
            </>
          )}
        </ThemeProvider>
      </Router>
    </div>
  );
}
