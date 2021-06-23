import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  card: {
    backgroundColor: "#f5f5f5",
    height: "200px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function CourseCard({ elem }) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant='h4' color='textSecondary' gutterBottom>
            {elem.name}
          </Typography>
          <Typography className={classes.pos} color='textSecondary'>
            {elem.creator.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/cursos/${elem.id}`}>Ver</Link>
        </CardActions>
      </Card>
    </div>
  );
}
