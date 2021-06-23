import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import CourseCard from "./CourseCard";
import Grid from "@material-ui/core/Grid";

import axios from "../../base/settings/axios";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    flex: 4,
    "overflow-y": "scroll",
  },
}));

export default function CoursesList() {
  const classes = useStyles();

  const [cursos, setCursos] = useState();
  useEffect(() => {
    axios
      .get("/course")
      .then((res) => {
        const resCursos = res.data;
        setCursos(resCursos);
        console.log(cursos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //TODO
  // Arreglar el marginBottom de cada fila de cursos (estrecharlo)

  return (
    <>
      <Grid
        className={classes.root}
        container
        spacing={4}
        direction='row'
        justify='flex-start'
      >
        {cursos &&
          cursos.map((curso) => (
            <Grid item xs={12} sm={6} md={4} key={curso.id}>
              <CourseCard elem={curso} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}
