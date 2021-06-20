import React from "react";
import {
    makeStyles
} from "@material-ui/core/styles";

import CourseCard from "./CourseCard";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        // padding: theme.spacing(2),
        // color: "black",
        background: 'lightgray',
        flex: 4,
        "overflow-y": "scroll",
    },
}));

export default function CoursesList() {
    const classes = useStyles();
    const data = [{
        name: "Math",
        id: 1
    }];



    return (
        <>
      <Grid
        className={classes.root}
        container
        spacing={4}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {data.map((elem) => (
          <Grid item xs={12} sm={6} md={4} key={data.indexOf(elem)}>
            <CourseCard elem={elem} />
          </Grid>
        ))}
      </Grid>
    </>
    );
}