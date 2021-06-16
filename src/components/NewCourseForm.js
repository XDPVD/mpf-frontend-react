import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// Card
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

// Icons
import CloseIcon from "@material-ui/icons/Close";

// Form
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0),
    boxShadow: "none",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
  },
  closeIcon: {
    width: 30,
    height: 30,
    cursor: "pointer",
  },
  btngroup: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  btn: {
    margin: "5px",
  },
}));

export default function NewCourseForm(props) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <div className={classes.content}>
            <Typography variant="h4">CREAR CLASE:</Typography>
            <CloseIcon
              className={classes.closeIcon}
              onClick={props.closeModal}
            ></CloseIcon>
          </div>
          <div>
            <FormGroup>
              <FormControl>
                <InputLabel htmlFor="clase">
                  Nombre de la clase (obligatorio)
                </InputLabel>
                <Input id="clase" aria-describedby="my-helper-text" />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="asunto">Asunto</InputLabel>
                <Input id="asunto" aria-describedby="my-helper-text" />
              </FormControl>
            </FormGroup>
          </div>
        </CardContent>
        <CardActions className={classes.btngroup}>
          <Button
            variant="contained"
            size="small"
            className={classes.btn}
            onClick={props.closeModal}
          >
            Cancelar
          </Button>
          <Button variant="contained" size="small" className={classes.btn}>
            Crear
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
