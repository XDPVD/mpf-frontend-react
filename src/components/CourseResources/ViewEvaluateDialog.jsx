import React, { useState, useEffect } from "react";
import { useStyles } from "./_styles";
import { Button } from "@material-ui/core";
import { endP } from '@settings/config';
import { fetchData } from '@utils/fetchData';
import UsersList from "@components/CourseUsers/UsersList";
function ViewEvaluateDialog(props) {
  const classes = useStyles();
  const {courseId}=props;
  const [course, setCourse] = useState({});

  console.log('viewEvaluateDialog', props);
  function justUsers(course){
    const inscriptions= course.inscriptions;
    const users = inscriptions?.map((inscriptions) => inscriptions.user);
    return users    
  }

  useEffect(() => {
    // Funciones para llamar al curso
    async function getData() {
        await fetchData(
            endP({ courseId }).getCourse,
            setCourse
        );
    }
    getData(); 
  }, []);


  return (
    <div className={classes.ventana}>
      <div className={classes.titleWrapper}>
        <label className={classes.tile}>{props.post.title}</label>
        <Button
          className={classes.btnClose}
          size='large'
          variant='contained'
          color='secondary'
          onClick={() => props.closeCallback()}
        >
          x
        </Button>
      </div>
      <hr />
      <p align='left'>{props.post.description}</p>
      <hr />
      <UsersList courseId={props.courseId} users={justUsers(course)} />
    </div>
  );
}

export default ViewEvaluateDialog;
