import "./App.css";
import React from "react";

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

import {
    AppContainer as Container
} from "./styles/Styles";

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

            <Route path="/ourlab">
              <LabPage />
            </Route>

          </Switch>
        </Container>
      </Router>
    </div>

    );
}

export default App
;
