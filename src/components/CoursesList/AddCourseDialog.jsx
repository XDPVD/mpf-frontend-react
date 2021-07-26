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
import FormDialog from "@common/FormDialog";
import { useUser } from "src/base/context/userContext";

import { isValid } from 'src/base/utils/validations';

export default function AddCourseDialog({ open, setOpen, setOpenSB }) {
  const classes = useStyles();

  const [curso, setCurso] = useState({ name: "", description: "" });

  const handleInputChange = (event) => {
    setCurso({ ...curso, [event.target.name]: event.target.value });
  };

  const { id_course } = useParams();

  const actions = useUser()[1];

  async function enviarDatos(event) {
    event.preventDefault();
    
    if(curso.name === ""){
      alert('ERROR: Por favor, el nombre del curso es un campo obligatorio, por favor ingrese algun nombre');
      return;
    }

    if(!isValid(curso.name)){
      alert('ERROR: No se permite caracteres especiales en el titulo, por favor, ingrese otro titulo');
      return;
    }

    if(curso.description.length > 30){
      alert('ADVERTENCIA: La descripcion del curso NO debe exceder de 30 (TREINTA) caracteres');
      alert('Brinde otra descripcion mas corta')
      return;
    }



    setOpen(false);
    await postData(endP({ id_course }).createCourse, curso, actions.getHeader());
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
