<<<<<<< HEAD
import "./App.css";
import React, { useEffect, useState } from "react";
=======
import React from "react";
>>>>>>> 5f404f5704b9e4941fc93f87ce740b34aa874516

import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import Header from "./components/Header";
import LateralBar from "./components/LateralBar";
import UpperBanner from "./components/UpperBanner";
import * as config from "./config/config";
import CoursesPage from "./pages/CoursesPage";
import HomePage from "./pages/HomePage";
import LabPage from "./pages/LabPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AppContainer as Container } from "./styles/Styles";

import theme from "./styles/theme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

<<<<<<< HEAD
import {UsuarioProvider, useUsuario} from "./context/usuario-context"

import { createBrowserHistory } from 'history';

// Components
=======
>>>>>>> 5f404f5704b9e4941fc93f87ce740b34aa874516

export default () => (<UsuarioProvider>
  <App></App>
</UsuarioProvider>)

function App() {

  const {usuario} = useUsuario();

  const history = createBrowserHistory();

  const [cargar,setCargar] = useState(false);

  useEffect(() => {
    if(!usuario){
      history.push('/login');
    } 
  }, [usuario, history])

  return (
    <div className="App">
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Header />
          <UpperBanner />

          {
            (!usuario)?
              <><LoginPage /></>
            :
            <>
            <LateralBar />
            <Container>
            <Switch>

              <Route exact path={config.urls.home}>
                <HomePage />
              </Route>
              
              <Route path={config.urls.register}>
                <RegisterPage />
              </Route>

            <Route path={config.urls.cursos}>
              <CoursesPage />
            </Route>

            <Route path={config.urls.calendario}>Calendario</Route>

            <Route path={config.urls.grupos}>Grupo</Route>

            <Route path={config.urls.config}>Configuración</Route>
            {/* TODO: Think about changing this into something better */}
            <Route path="/ourlab">
              <LabPage />
            </Route>
            </Switch>
          </Container>
            </>
          }
        </ThemeProvider>
      </Router>
    </div>
  );
}
