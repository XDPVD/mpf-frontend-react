import React from "react";
import { useStyles } from "./_styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

// msan. Cras tempor arcu sed vehicula cursus. Ali
export default function CourseCard({ course }) {
  const classes = useStyles();
  return (
    <Button style={{ width: "100%" }} disableRipple>
      <Link className={classes.courseLink} to={`/cursos/${course.id}/dash`}>
        <Card className={classes.courseCard}>
          <CardContent>
            <Typography variant='h4' gutterBottom>
              {course.name}
            </Typography>
            <Typography className={classes.courseDesc}>
              {course.description}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Button>
  );
}
