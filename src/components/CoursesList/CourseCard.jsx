import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  card: {
    backgroundColor: "#f5f5f5",
    height: "200px",
    margin: "0",
    width: "100%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
  link: {
    width: "100%",
    textDecoration: "none",
  },
}));

export default function CourseCard({ elem }) {
  const classes = useStyles();
  console.log(elem);
  return (
    <Button style={{ width: "100%" }} disableRipple>
      <Link className={classes.link} to={`/cursos/${elem.id}/dash`}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant='h4' gutterBottom>
              {elem.name}
            </Typography>
            <Typography className={classes.pos}>{elem.description}</Typography>
          </CardContent>
        </Card>
      </Link>
    </Button>
  );
}
