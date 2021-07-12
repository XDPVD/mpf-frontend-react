import React, { useState } from "react";
import { useStyles } from "./_styles";

import Button from "@material-ui/core/Button";

// Form
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import { postData } from "@utils/postData";
import { endP } from "@settings/config";
import { useParams } from "react-router-dom";
import useUserInfo from "@utils/useUserInfo";
import FormDialog from "@common/FormDialog";

export default function AddCourseDialog({ open, setOpen, setOpenSB }) {
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
        <FormDialog open={open} setOpen={setOpen} size='md' title='Crear curso'>
          <form onSubmit={enviarDatos}>
            <div>
              <FormGroup>
                <FormControl>
                  <InputLabel htmlFor='clase'>
                    Nombre de la clase (obligatorio)
                  </InputLabel>
                  <Input
                    className={classes.inputCreate}
                    name='name'
                    id='clase'
                    aria-describedby='my-helper-text'
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor='asunto'>Asunto</InputLabel>
                  <Input
                    className={classes.inputCreate}
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
                className={classes.btnCreate}
                color='primary'
              >
                Crear
              </Button>
            </div>
          </form>
        </FormDialog>
      </div>
    </div>
  );
}
