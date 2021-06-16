import React from "react";
import "./App.css";

import Login from "./components/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

import LateralBar from "./components/LateralBar";
import Header from "./components/Header";

import UpperBanner from "./components/UpperBanner";

// Components
import BtnGroup from "./components/BtnGroup";
import CoursesList from "./components/CoursesList";
import NewCourseForm from "./components/NewCourseForm";

// Modal component
import Modal from "react-modal";
import { CSSTransition } from "react-transition-group";
Modal.setAppElement("#root");

function App() {
  const divStyles = {
    marginLeft: "4.4%",
    width: "95.5%",
    padding: "20px"
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const modalStyle = {
    content: {
      position: "fixed",
      top: "25%",
      bottom: "auto",
      left: "25%",
      right: "25%",
      padding: "25px",
    },
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <UpperBanner />
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
            <div style={divStyles}>
              <BtnGroup openModal={openModal}></BtnGroup>
              <Modal
                isOpen={modalIsOpen}
                style={modalStyle}
                closeTimeoutMS={500}
              >
                <NewCourseForm
                  closeModal={closeModal}
                  className={modalStyle.content}
                >
                  <CSSTransition timeout={500}>
                    <div></div>
                  </CSSTransition>
                </NewCourseForm>
              </Modal>
              <CoursesList></CoursesList>
            </div>
          </Route>
          <Route path="/calendario">Calendario</Route>
          <Route path="/grupos">Grupos</Route>
          <Route path="/configuracion">Configuracion</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
