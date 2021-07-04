import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import BtnGroup from "@components/CoursesList/BtnGroup";
import CoursesList from "@components/CoursesList/CoursesList";
import AddCourseDialog from "@components/CoursesList/AddCourseDialog";
import JoinCourseDialog from "@components/CoursesList/JoinCourseDialog";

import Course from "./Course";

import { useRouteMatch } from "react-router-dom";
import * as config from "@settings/config";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

// Modal component

import { Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "15px 10px",
    display: "flex",
    justifyContent: "flex-end",
  },
  btn: {
    margin: "0 5px",
  },
}));

function Courses() {
  const [openAdd, setOpenAdd] = useState(false);
  const [openJoin, setOpenJoin] = useState(false);

  const { path } = useRouteMatch();
  const classes = useStyles();
  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleClickOpenJoin = () => {
    setOpenJoin(true);
  };

  return (
    <>
      <Route exact path={config.urls.cursos}>
        <Container maxWidth='xl' className={classes.wrapper}>
          <Button
            className={classes.btn}
            variant='contained'
            color='secondary'
            onClick={handleClickOpenAdd}
          >
            Crear
          </Button>
          <Button
            className={classes.btn}
            variant='contained'
            color='secondary'
            onClick={handleClickOpenJoin}
          >
            Unirse
          </Button>
        </Container>

        <CoursesList />
      </Route>
      <Route path={`${config.urls.cursos}/:courseId`}>
        <Course />
      </Route>

      <AddCourseDialog open={openAdd} setOpen={setOpenAdd} />
      <JoinCourseDialog open={openJoin} setOpen={setOpenJoin} />
    </>
  );
}

export default Courses;
