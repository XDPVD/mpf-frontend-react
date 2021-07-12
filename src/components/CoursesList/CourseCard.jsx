import React from "react";
import { useStyles } from "./_styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function CourseCard({ elem }) {
  const classes = useStyles();
  console.log(elem);
  return (
    <Button style={{ width: "100%" }} disableRipple>
      <Link className={classes.courseLink} to={`/cursos/${elem.id}/dash`}>
        <Card className={classes.courseCard}>
          <CardContent>
            <Typography variant='h4' gutterBottom>
              {elem.name}
            </Typography>
            <Typography className={classes.courseDesc}>
              {elem.description}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Button>
  );
}
