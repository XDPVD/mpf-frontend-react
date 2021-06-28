import React, { useState } from "react";
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

import instance from "@settings/axios";

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

export default function AddCourseDialog(props) {
  const classes = useStyles();

  const [curso, setCurso] = useState({ name: "" , description: "" });

  const handleInputChange = (event) => {
    setCurso({ ...curso ,[event.target.name] : event.target.value });
  };

  async function enviarDatos(event) {
    event.preventDefault();

    let res = await instance({
      'method':'POST',
      'url': '/course/',
      'data': curso
    });
  }
  return (
    <div>
      <Card className={classes.root}>
        <form onSubmit={enviarDatos}>
          <CardContent>
            <div className={classes.content}>
              <Typography variant='h4'>CREAR CLASE:</Typography>
              <CloseIcon
                className={classes.closeIcon}
                onClick={props.closeModal}
              ></CloseIcon>
            </div>
            <div>
              <FormGroup>
                <FormControl>
                  <InputLabel htmlFor='clase'>
                    Nombre de la clase (obligatorio)
                  </InputLabel>
                  <Input
                    name='name'
                    id='clase'
                    aria-describedby='my-helper-text'
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor='asunto'>Asunto</InputLabel>
                  <Input id='asunto' name='description' aria-describedby='my-helper-text' onChange={handleInputChange} />
                </FormControl>
              </FormGroup>
            </div>
          </CardContent>
          <CardActions className={classes.btngroup}>
            <Button
              variant='contained'
              size='small'
              className={classes.btn}
              onClick={props.closeModal}
            >
              Cancelar
            </Button>
            <Button
              type='submit'
              variant='contained'
              size='small'
              className={classes.btn}
            >
              Crear
            </Button>
          </CardActions>
        </form>
      </Card>
    </div>
  );
}
