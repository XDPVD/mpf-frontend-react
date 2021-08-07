import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./_styles";

import FileTray from "@components/_common/FileTray";

import { useHistory, useLocation, useParams } from "react-router-dom";

import { postPub } from "@utils/postData";
import SelectTipo from "./SelectTipo";
import GroupField from "@components/CourseResources/GroupField";
import PostButton from "./PostButton";
import SelectOption from "./SelectOption";

import FormDialog from "@common/FormDialog";
import { useUser } from "@context/userContext";
import { resourceIsValid } from "@utils/useValidation";
import { dateObjToString } from "@utils/convertDate";

function AddResourceDialog(props) {
  const classes = useStyles();

  const { courseId } = useParams();

  const [grupal, setGrupal] = useState(false);

  const [tipo, setTipo] = useState("A");

  const [open, setOpen] = useState(true);

  const [nota, setNota] = useState({
    nota: 20,
  });

  const actions = useUser()[1];

  const history = useHistory();
  const location = useLocation();

  const initialResource = {
    tipo: "A",
    titulo: "",
    descripcion: "",
    notaMax: 20,
    fechaEntrega: new Date(new Date().getTime() + 3600000),
    grupal: grupal,
    id_curso: Number(courseId),
  };
  const [recurso, setRecurso] = useState(initialResource);
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDesc, setErrorDesc] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [helperTitle, setHelperTitle] = useState("");
  const [helperDesc, setHelperDesc] = useState("");
  const [helperDate, setHelperDate] = useState("");
  
  const setters = {
    setErrorTitle: setErrorTitle,
    setErrorDesc: setErrorDesc,
    setErrorDate: setErrorDate,
    setHelperTitle: setHelperTitle,
    setHelperDesc: setHelperDesc,
    setHelperDate: setHelperDate,
  };

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
    if (event.target.name === "titulo") {
      setErrorTitle(false);
      setHelperTitle("");
    } else {
      setErrorDesc(false);
      setHelperDesc("");
    }
    resourceIsValid(recurso, setters);
  };

  const handleDateChange = (event) => {
    setRecurso({ ...recurso, fechaEntrega: new Date(event.target.value) });
    console.log(recurso.fechaEntrega);
    setErrorDate(false);
    setHelperDate("");
  };

  const simpleSubmit = async () => {
    if (resourceIsValid(recurso, setters)) {
      await postPub(recurso, actions.getHeader());
      props.setOpenAdd(false);
      console.log(location.pathname);
      history.push(location.pathname, { from: location.pathname });
    
    }
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
      maxlength: 30,
      helper: helperTitle,
      error: errorTitle,
    },
    {
      label: "Descripción",
      name: "descripcion",
      placeholder: "Ingrese una descripcion...",
      rows: 4,
      maxlength: 500,
      helper: helperDesc,
      error: errorDesc,
    },
  ];

  const openDialog = () => {
    setRecurso(initialResource);
    props.setOpenAdd();
  };

  return (
    <FormDialog
      setOpen={openDialog}
      open={props.openAdd}
      size='md'
      title='Nuevo Recurso'
    >
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
            {/* Map título y descripción */}
            {textFields.map((elem) => {
              return (
                <TextField
                  error={elem.error}
                  name={elem.name}
                  className={classes.tituloForm}
                  fullWidth={true}
                  id='standard-basic'
                  label={`${elem.label} (Máx. caracteres: ${elem.maxlength})`}
                  multiline={elem.rows > 1 ? true : false}
                  rows={elem.rows}
                  placeholder={elem.placeholder}
                  onChange={handleTextInputChange}
                  inputProps={{ maxlength: elem.maxlength }}
                  helperText={elem.helper}
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
                defaultValue={
                  `${dateObjToString(recurso.fechaEntrega)[0]}T${dateObjToString(recurso.fechaEntrega)[1]}`
                }
                format='yyyy-MM-ddThh:mm'
                className={classes.horaEntrega}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleDateChange}
                helperText={helperDate}
                error={errorDate}
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
                recurso={recurso}
                setters={setters}
                createIdFunction={async () =>{
                    console.log('async upload');
                    await postPub(recurso, actions.getHeader())
                } 
                }
                closeFunction={() => {
                  props.setOpenAdd(false);
                  history.go(0)
                }}
              />
            </div>
          </>
        ) : (
          <PostButton onClick={simpleSubmit} />
        )}
      </form>
    </FormDialog>
  );
}

export default AddResourceDialog;
