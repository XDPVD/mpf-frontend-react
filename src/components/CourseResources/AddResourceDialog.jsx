import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import { postData } from "@utils/postData";

const useStyles = makeStyles((theme) => ({
  btn: {
    margin: "5px",
  },
  formNota: {
    marginTop: "10px",
    minWidth: 50,
  },
  horaEntrega: {
    marginTop: "10px",
    marginLeft: "10px",
  },
  formTipo: {
    minWidth: 120,
  },
  guardarButton: {
    marginTop: "10px",
  },
  grupal: {
    marginTop: "20px",
  },
  tituloForm: {
    marginTop: "20px",
  },
  closeIcon: {
    position: "absolute",
    right: 5,
    top: 8,
  },
}));

function AddResourceDialog(props) {
  const classes = useStyles();

  const [grupal, setGrupal] = useState("female");
  const [tipo, setTipo] = useState("");
  const [open, setOpen] = useState(false);

  const [nota, setNota] = useState({
    nota: "",
  });
  const [recurso, setRecurso] = useState({
    tipo: 0,
    titulo: "",
    descripcion: "",
    archivo: "",
    notaMax: 20,
    fechaEntrega: "",
    grupal: false,
  });

  const handleChangeNota = (event) => {
    setNota(event.target.value);
    setRecurso({ ...recurso, notaMax: event.target.value });
  };

  const handleChangeGrupal = (event) => {
    setGrupal(event.target.value);
    setRecurso({ ...recurso, grupal: event.target.value });
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

  const handleInputChange = (event) => {
    setRecurso({ ...recurso, [event.target.name]: event.target.value });
  };

  const [subir, setSubir] = useState(false);

  const abrirSubir = () => {
    setSubir(!subir);
  };

  function enviarDatos(event) {
    console.log(recurso);
    const data = {
      name: "user1",
      email: "ejemplo@ejemplo.com",
      password: "123",
    };
    postData(event, "/user", data);
  }

  return (
    <Dialog
      onClose={() => {
        props.setOpenAdd(false);
      }}
      open={props.openAdd}
      aria-labelledby='form-dialog-title'
      fullWidth
      maxWidth='md'
    >
      <DialogTitle>
        <Typography variant='h3'>Nuevo Recurso</Typography>
        <IconButton
          className={classes.closeIcon}
          aria-label='close'
          onClick={() => {
            props.setOpenAdd(false);
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={enviarDatos}>
          <div>
            <FormControl className={classes.formTipo}>
              <InputLabel>Tipo</InputLabel>
              <Select
                open={open}
                onClose={handleClose}
                onOpen={handleOpenList}
                value={tipo}
                onChange={handleChange}
              >
                <MenuItem value={1}>Anuncio</MenuItem>
                <MenuItem value={2}>Material</MenuItem>
                <MenuItem value={3}>Examen</MenuItem>
                <MenuItem value={4}>Tarea</MenuItem>
              </Select>
            </FormControl>
          </div>
          <br />
          <div>
            <form noValidate autoComplete='off'>
              <TextField
                name='titulo'
                className={classes.tituloForm}
                fullWidth={true}
                id='standard-basic'
                label='Título'
                placeholder='Ingrese un título...'
                onChange={handleInputChange}
              />
              <TextField
                name='descripcion'
                className={classes.tituloForm}
                fullWidth={true}
                multiline
                rows={4}
                id='standard-basic'
                label='Descripción'
                placeholder='Ingrese una descripción...'
                onChange={handleInputChange}
              />
            </form>
          </div>

          <div>
            {tipo >= 2 && (
              <div className={classes.guardarButton}>
                <Button
                  className={classes.btn}
                  size='large'
                  variant='contained'
                  color='secondary'
                  onClick={() => abrirSubir()}
                >
                  Añadir archivo
                </Button>
              </div>
            )}

            {tipo >= 3 && (
              <>
                <FormControl className={classes.formNota}>
                  <InputLabel htmlFor='nota-simple'>Nota Máx.</InputLabel>
                  <Select
                    native
                    value={nota.nota}
                    onChange={handleChangeNota}
                    inputProps={{
                      name: "nota",
                      id: "nota-simple",
                    }}
                  >
                    <option value={10}>10</option>{" "}
                    <option value={20}>20</option>{" "}
                    <option value={30}>30</option>{" "}
                    <option value={40}>40</option>
                    <option value={50}>50</option>{" "}
                    <option value={60}>60</option>{" "}
                    <option value={70}>70</option>{" "}
                    <option value={80}>80</option>
                    <option value={90}>90</option>{" "}
                    <option value={100}>100</option>
                  </Select>
                </FormControl>
                <TextField
                  name='fechaEntrega'
                  id='datetime-local'
                  label='Fecha de entrega'
                  type='datetime-local'
                  defaultValue='2021-06-18T11:59'
                  className={classes.horaEntrega}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleInputChange}
                />
              </>
            )}

            {tipo >= 4 && (
              <div className={classes.grupal}>
                <FormControl component='fieldset'>
                  <FormLabel component='legend'>Grupal/Individual</FormLabel>
                  <RadioGroup value={grupal} onChange={handleChangeGrupal}>
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label='Grupal'
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label='Individual'
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            )}
          </div>

          <div className={classes.guardarButton} align='right'>
            <Button
              className={classes.btn}
              size='large'
              variant='contained'
              color='primary'
              onClick={() => abrirSubir()}
              type='submit'
            >
              GUARDAR
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddResourceDialog;
