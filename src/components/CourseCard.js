import React from "react";
import {
    makeStyles
} from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
    Link
} from "react-router-dom";

const
    useStyles =
    makeStyles(
        (
            theme) =>
        ({
            root: {
                minWidth: 275,
            },
            card: {
                backgroundColor: theme
                    .palette
                    .grey[
                        300
                        ],
            },
            bullet: {
                display: "inline-block",
                margin: "0 2px",
                transform: "scale(0.8)",
            },
            title: {
                fontSize: 36,
            },
            pos: {
                marginBottom: 12,
            },
        })
        );

export default function CourseCard(
    props
    ) {
    const
        classes =
        useStyles();

    return (
        <div>
        <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {props.elem.titulo}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.elem.nombreCreador}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/cursos/${props.elem.curso_id}`} >Ver</Link>
        </CardActions>
      </Card>
    </div>
    );
}