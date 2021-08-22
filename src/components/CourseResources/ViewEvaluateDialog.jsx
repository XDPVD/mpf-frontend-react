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
import {postData} from "@utils/postData";
function ViewEvaluateDialog(props) {
  const classes = useStyles();
  const {courseId,headers,post}=props;
  const [course, setCourse] = useState({});
  const [userSubmissions, setUserSubmissions] = useState({});
  const [selectedUser, setSelectedUser] = useState({});
  const [review,setReview]= useState("");
  const [score,setScore]= useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log('viewEvaluateDialog', props);
  function justUsers(course){
    const inscriptions= course.inscriptions;
    const users = inscriptions?.map((inscriptions) => inscriptions.user);
    return users;   
  }
  
  const compareUsers=()=>{
    for (const key in userSubmissions) {
      if(userSubmissions[key].user.id==selectedUser.id){
        return userSubmissions[key];
      }
    }
    return "No envio";
  }; 
  const onSubmit = (data, e) => {
    //No saques el data :V por si a alguien se le ocurre
    e.preventDefault();
    const temp=e.target[0].value;
    postData(
      endP({ userId:selectedUser.id,publication_id:post.id,nota:temp}).calificateSubmission,
      { userId:selectedUser.id,publication_id:post.id,nota:temp},
      headers
    );
    if (temp) {
        e.target[0].value = '';
        e.target[0].placeholder = `${temp}/${props.post.evaluation.score_max}`;
    }
    console.log(userSubmissions);
  };
  useEffect(() => {
    // eau un  madas cadasdasd eeasdasda
    async function getData() {
        await fetchData(
            endP({ courseId }).getCourse,
            setCourse
        );
        await fetchData(
          endP({ publication_id:post.id }).getSubmissions,
          setUserSubmissions
        );
    }
    getData(); 
  }, []);
  useEffect(() => {
    // eau un  madas caddadssadasdasd eeasdasda
    const result=compareUsers();
    if(result=="No envio"){
      setReview("No envio");
      setScore(0);
    }
    else{
      setReview("Envio");
      setScore(result.calification);
      
    }
  }, [selectedUser]);

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
      <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container>
        <Grid item xs={4}>
          <UsersList courseId={props.courseId} users={justUsers(course)} setSelectedUser={setSelectedUser} />
        </Grid>
        <Grid item xs={8}>
          
            <Grid item xs={12}>
              {Object.keys(selectedUser).length === 0 ? (
                <>Seleccione un alumno dentro de la lista</>
              ):(
              <>
              
              <Grid container xs={12}>
                <Grid item xs={4} justifyContent="center">
                  <Typography variant="subtitle2" gutterBottom>
                    Estado: {review}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Alumno: {selectedUser.name}
                  </Typography>  
                </Grid>
                
                <Grid container item xs={4} justifyContent="center" alignItems="center">
                  <Grid xs={12}>
                    <TextField
                    label="Calificación"
                    type="number" 
                    {...register('score', { pattern: /\d+/ })}
                    placeholder={`${score}/${props.post.evaluation.score_max}`}>
                    </TextField>
                  </Grid>
                </Grid>
                <Grid item xs={3} justifyContent="center" alignItems="center">
                  <Button variant="contained" color="primary" type="submit">
                    Guardar calificaci&oacute;n
                  </Button>
                </Grid>
              </Grid>
              </>)}
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
