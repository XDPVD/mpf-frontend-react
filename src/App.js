import React from 'react'; 

import logo from './logo.svg';
import Login from './components/Login';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import LateralBar from "./components/LateralBar";
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <LateralBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/cursos">
            Cursos
          </Route>
          <Route path="/calendario">
            Calendario
          </Route>
          <Route path="/grupos">
            Grupos
          </Route>
          <Route path="/configuracion">
            Configuracion
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
