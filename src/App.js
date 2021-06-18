import React from "react";
import "./App.css";



import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as config from "./config/config"

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import CoursesPage from "./pages/CoursesPage";

import {

  AppContainer as Container

} from "./styles/Styles";

import LateralBar from "./components/LateralBar";
import Header from "./components/Header";
import UpperBanner from "./components/UpperBanner";

// Components



function App() {




  return (
    <div className="App">

      <Router>
        <Header />
        {
          (
            () => {
            
              if(false){
                return (<>Home Page</>) ;
              }
              else{
                return (<><LateralBar /> <UpperBanner /></>);
              }

            }
          )()
        }

        <Container>
          <Switch>

            <Route exact path={config.urls.home}>
              <HomePage />
            </Route>

            <Route exact path={config.urls.login}>
              <LoginPage />
            </Route>

            <Route path={config.urls.register}>
              <RegisterPage />
            </Route>

            <Route path={config.urls.cursos}>
              <CoursesPage />
            </Route>

            <Route path={config.urls.calendario}>
              Calendario
            </Route>

            <Route path={config.urls.grupos}>
              Grupo
            </Route>

            <Route path={config.urls.config}>
              Configuración
            </Route>

          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;

