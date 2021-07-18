import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { DialogTitle, DialogContent, Typography, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from "./_styles";

import FileTray from "@components/FileTray";

import { useParams } from "react-router-dom";

import { postPub } from "@utils/postData";
import SelectTipo from "./SelectTipo";
import GroupField from "@components/CourseResources/GroupField";
import PostButton from "./PostButton";
import SelectOption from "./SelectOption";
import useUserInfo from "@utils/useUserInfo";
import FormDialog from "@common/FormDialog";

function AddResourceDialog(props) {
  const classes = useStyles();
  const { courseId } = useParams();

  const [grupal, setGrupal] = useState(false);

  const [tipo, setTipo] = useState("A");

  const [open, setOpen] = useState(true);

  const [nota, setNota] = useState({
    nota: 20,
  });

  const [, headers] = useUserInfo();

  const [recurso, setRecurso] = useState({
    tipo: "A",
    titulo: "",
    descripcion: "",
    notaMax: 20,
    fechaEntrega: new Date(),
    grupal: grupal,
    id_curso: Number(courseId),
  });

  const handleChangeNota = (event) => {
    setNota(Number(event.target.value));
    setRecurso({ ...recurso, notaMax: Number(event.target.value) });
  };

  const handleChangeGrupal = (event) => {
    let result = event.target.value === "true";

    setGrupal(result);
    setRecurso({ ...recurso, grupal: result });
  };

  const handleChange = (event) => {
    setTipo(event.target.value);
    setRecurso({ ...recurso, tipo: event.target.value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenList = () => {
    setOpen(true);
  };

  const handleTextInputChange = (event) => {
    setRecurso({ ...recurso, [event.target.name]: event.target.value });
  };

  const handleDateChange = (event) => {
    console.log(event.target.value);

    setRecurso({ ...recurso, fechaEntrega: new Date(event.target.value) });
  };

  const simpleSubmit = async () => {
    await postPub(recurso, headers);
    props.setOpenAdd(false);
    window.location.reload();
  };

  const menuItems = [
    {
      value: "A",
      title: "Anuncio",
    },
    {
      value: "M",
      title: "Material",
    },
    {
      value: "T",
      title: "Tarea",
    },
    {
      value: "E",
      title: "Examen",
    },
  ];

  const textFields = [
    {
      label: "Título",
      name: "titulo",
      placeholder: "Ingrese un título...",
      rows: 1,
    },
    {
      label: "Descripción",
      name: "descripcion",
      placeholder: "Ingrese una descripcion...",
      rows: 4,
    },
  ];
  return (
    <FormDialog
      setOpen={props.setOpenAdd}
      open={props.openAdd}
      size='md'
      title='Nuevo Recurso'
    >
      <DialogContent>
        <form noValidate>
            <div>
              <SelectTipo
                open={open}
                handleClose={handleClose}
                handleOpenList={handleOpenList}
                tipo={tipo}
                handleChange={handleChange}
                menuItems={menuItems}
              />
            </div>
            <br />
            <div>
              <form noValidate autoComplete='off'>
                {textFields.map((elem) => {
                  return (
                    <TextField
                      key={elem.titulo}
                      name={elem.name}
                      className={classes.tituloForm}
                      fullWidth={true}
                      id='standard-basic'
                      label={elem.label}
                      multiline={elem.rows > 1 ? true : false}
                      rows={elem.rows}
                      placeholder={elem.placeholder}
                      onChange={handleTextInputChange}
                    />
                  );
                })}
              </form>
            </div>

            <div>
            {(tipo === "T" || tipo === "E") && (
              <>
                <SelectOption
                  valueSelected={nota.nota}
                  handleOnChange={handleChangeNota}
                />

                <TextField
                  name='fechaEntrega'
                  id='datetime-local'
                  label='Fecha de entrega'
                  type='datetime-local'
                  format='yyyy-MM-ddThh:mm'
                  defaultValue={new Date().toString()}
                  className={classes.horaEntrega}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleDateChange}
                />
              </>
            )}
            {tipo === "T" && (
              <GroupField
                handleChangeGrupal={handleChangeGrupal}
                grupal={grupal}
              />
            )}
          </div>

          {tipo !== "A" ? (
            <>
              <div style={{ marginTop: "20px", maxHeight: "400px" }}>
                <FileTray
                  modeCreate={true}
                  mode={"p"}
                  createIdFunction={async () => await postPub(recurso, headers)}
                  closeFunction={() => {
                    props.setOpenAdd(false);
                  }}
                />
              </div>
            </>
          ) : (
            <PostButton onClick={simpleSubmit} />
          )}
        </form>
      </DialogContent>

    </FormDialog>
    
      
  );
}

export default AddResourceDialog;
