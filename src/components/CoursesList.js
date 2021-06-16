import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Course from "./Course";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

export default function CoursesList() {
  const classes = useStyles();
  const data = [
    { name: "Math" },
    { name: "Chemistry" },
    { name: "English" }
  ];

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {data.map((elem) => (
          <Grid item xs={12} sm={6} md={4} key={data.indexOf(elem)}>
            <Course elem={elem}></Course>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
