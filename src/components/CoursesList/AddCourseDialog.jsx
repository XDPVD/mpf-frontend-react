import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

// Icons
import CloseIcon from "@material-ui/icons/Close";

// Form
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import { postData } from "@utils/postData";
import { endP } from "@settings/config";
import { useParams } from "react-router-dom";
import useUserInfo from "@utils/useUserInfo";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0),
    boxShadow: "none",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
  },
  btngroup: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  btn: {
    float: "right",
    padding: [[8, 30]],
  },
  closeIcon: {
    position: "absolute",
    right: 3,
    top: 8,
  },
  input: {
    marginBottom: "15px",
  },
}));

export default function AddCourseDialog({ open, setOpen, setOpenSB }, props) {
  const classes = useStyles();

  const [curso, setCurso] = useState({ name: "", description: "" });

  const handleInputChange = (event) => {
    setCurso({ ...curso, [event.target.name]: event.target.value });
  };

  const { id_course } = useParams();

  const [, headers] = useUserInfo();

  async function enviarDatos(event) {
    event.preventDefault();
    setOpen(false);
    await postData(endP({ id_course }).createCourse, curso, headers);
    setOpenSB(true);
  }

  return (
    <div>
      <div>
        <Dialog
          onClose={() => {
            setOpen(false);
          }}
          open={open}
          aria-labelledby='form-dialog-title'
          fullWidth
          maxWidth='md'
        >
          <DialogTitle id='form-dialog-title'>
            Crear Curso
            <IconButton
              className={classes.closeIcon}
              aria-label='close'
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent className={classes.dialog} dividers>
            <form onSubmit={enviarDatos}>
              <div>
                <FormGroup>
                  <FormControl>
                    <InputLabel htmlFor='clase'>
                      Nombre de la clase (obligatorio)
                    </InputLabel>
                    <Input
                      className={classes.input}
                      name='name'
                      id='clase'
                      aria-describedby='my-helper-text'
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor='asunto'>Asunto</InputLabel>
                    <Input
                      className={classes.input}
                      name='description'
                      id='asunto'
                      onChange={handleInputChange}
                      aria-describedby='my-helper-text'
                    />
                  </FormControl>
                </FormGroup>
                <Button
                  type='submit'
                  variant='contained'
                  size='small'
                  className={classes.btn}
                  color='primary'
                >
                  Crear
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
