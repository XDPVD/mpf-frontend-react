import React, { useState, useEffect } from "react";
import { useStyles } from "./_styles";
import { Button } from "@material-ui/core";
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { endP } from '@settings/config';
import { fetchData } from '@utils/fetchData';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import UsersList from "@components/CourseUsers/UsersList";
function ViewEvaluateDialog(props) {
  const classes = useStyles();
  const {courseId}=props;
  const [course, setCourse] = useState({});
  const [selectedUserId, setSelectedUserId] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log('viewEvaluateDialog', props);
  function justUsers(course){
    const inscriptions= course.inscriptions;
    const users = inscriptions?.map((inscriptions) => inscriptions.user);
    return users    
  }  
  const onSubmit = (data, e) => {
    e.preventDefault();
    if (data.score) {
        e.target[0].value = '';
        e.target[0].placeholder = data.score;
    }
};
  useEffect(() => {
    // eau un  madas cadasdasd eeasdasda
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
      {selectedUserId}
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container>
        <Grid item xs={4}>
          <UsersList courseId={props.courseId} users={justUsers(course)} setSelectedUserId={setSelectedUserId} />
        </Grid>
        <Grid item xs={8}>
          
            <Grid item xs={12}>
              <Grid container xs={12}>
                <Grid item xs={4} justifyContent="center">
                  <Typography variant="subtitle2" gutterBottom>
                    Estado: Sin revisar
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Alumno: Carlos Diego Tripita Galarza
                  </Typography>  
                </Grid>
                
                <Grid container item xs={4} justifyContent="center" alignItems="center">
                  <Grid xs={12}>
                    <TextField
                    label="Calificación"
                    type="number" 
                    {...register('score', { pattern: /\d+/ })}
                    placeholder={"0/20"}>
                    </TextField>
                  </Grid>
                </Grid>
                <Grid item xs={3} justifyContent="center" alignItems="center">
                  <Button variant="contained" color="primary" type="submit">
                    Guardar calificaci&oacute;n
                  </Button>
                </Grid>
              </Grid>
              <hr/>
              <Grid>
              <a href="https://www.w3schools.com">Visit W3Schools</a>
              </Grid>
            </Grid>
          
        </Grid>
      </Grid>
      </form>
    </div>
  );
}

export default ViewEvaluateDialog;
