import React from 'react'

import BtnGroup from "../components/BtnGroup";
import CoursesList from "../components/CoursesList";
import NewCourseForm from "../components/NewCourseForm";

import CoursePage from './CoursePage';

import { useRouteMatch } from 'react-router-dom';

// Modal component
import Modal from "react-modal";
import { CSSTransition } from "react-transition-group";

import { Route } from "react-router-dom";

Modal.setAppElement("#root");

function CoursesPage() {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    const {path} = useRouteMatch();

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
            <Route exact path ={`${path}`} >    
                <BtnGroup openModal={openModal} />

                <Modal
                    isOpen={modalIsOpen}
                    style={modalStyle}
                    closeTimeoutMS={250}
                >

                    <NewCourseForm
                        closeModal={closeModal}
                        className={modalStyle.content}
                    >
                            <CSSTransition timeout={100} />
                    </NewCourseForm>

                </Modal>

                <CoursesList />
            </Route>
            <Route path={`${path}/:courseId`}>
                <CoursePage />
            </Route>
        </>
    )
}

export default CoursesPage
