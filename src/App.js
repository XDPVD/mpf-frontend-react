import React from "react";
import "./App.css";

import LoginPage from "./pages/LoginPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import CoursesPage from "./pages/CoursesPage";

import LateralBar from "./components/LateralBar";
import Header from "./components/Header";

import UpperBanner from "./components/UpperBanner";

// Components

function App() {


    const ContainerPageStyle = {
        width: "100vw",
        height: "80%",
        display: "flex",
        flexFlow: "column",
        padding: "0px 25px 0px 85px"
    };

    return ( <
            div className = "App" >

            <
            Router >
            <
            Header / > {
                (
                    () => {

                        if (false) {
                            return ( < > Home Page < />) ;
                            }
                            else {
                                return ( < > < LateralBar / > < UpperBanner / > < />);
                                }

                            }
                        )()
                    }

                    <
                    div style = { ContainerPageStyle } >
                    <
                    Switch >

                    <
                    Route exact path = "/" >
                    <
                    HomePage / >
                    <
                    /Route>

                    <
                    Route exact path = "/login" >
                    <
                    LoginPage / >
                    <
                    /Route>

                    <
                    Route path = "/register" >
                    <
                    RegisterPage / >
                    <
                    /Route>

                    <
                    Route path = "/cursos" >
                    <
                    CoursesPage / >
                    <
                    /Route>

                    <
                    Route path = "/calendario" >
                    Calendario <
                    /Route>

                    <
                    Route path = "/grupos" >
                    Grupo <
                    /Route>

                    <
                    Route path = "/configuracion" >
                    Configuración <
                    /Route>

                    <
                    /Switch> < /
                    div > <
                    /Router> < /
                    div >
                );
            }

            export default App;