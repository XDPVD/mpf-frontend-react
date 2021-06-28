import React from "react";

import BtnGroup from "@components/CoursesList/BtnGroup";
import CoursesList from "@components/CoursesList/CoursesList";
import AddCourseDialog from "@components/CoursesList/AddCourseDialog";

import Course from "./Course";

import { useRouteMatch } from "react-router-dom";
import * as config from "@settings/config";

// Modal component
import Modal from "react-modal";
import { CSSTransition } from "react-transition-group";

import { Route } from "react-router-dom";

Modal.setAppElement("#root");

function Courses() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const { path } = useRouteMatch();

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
    <>
      <Route exact path={config.urls.cursos}>
        <BtnGroup openModal={openModal} />

        <Modal isOpen={modalIsOpen} style={modalStyle} closeTimeoutMS={250}>
          <AddCourseDialog
            closeModal={closeModal}
            className={modalStyle.content}
          >
            <CSSTransition timeout={100} />
          </AddCourseDialog>
        </Modal>

        <CoursesList />
      </Route>
      <Route path={`${config.urls.cursos}/:courseId`}>
        <Course />
      </Route>
    </>
  );
}

export default Courses;
