import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import CourseCard from "./CourseCard";
import Grid from "@material-ui/core/Grid";

import { fetchData } from "@utils/fetchData";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    "overflow-y": "auto",
  },
}));

export default function CoursesList() {
  const classes = useStyles();

  const [cursos, setCursos] = useState();
  useEffect(() => {
    fetchData("/course", cursos, setCursos);
  }, []);

  //TODO
  // Arreglar el marginBottom de cada fila de cursos (estrecharlo)

  return (
    <>
      <Grid className={classes.root} container>
        {cursos &&
          cursos.map((curso) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={curso.id}>
              <CourseCard elem={curso} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}
