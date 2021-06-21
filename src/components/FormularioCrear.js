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
import { withStyles } from "@material-ui/core/styles";

function FormularioCrear(props) {
  const { classes } = props;

  const [grupal, setGrupal] = useState("female");
  const [tipo, setTipo] = useState("");
  const [open, setOpen] = useState(false);

  const [nota, setNota] = useState({
    nota: "",
  });

  const handleChangeNota = (event) => {
    setNota(event.target.value);
  };

  const handleChangeGrupal = (event) => {
    setGrupal(event.target.value);
  };

  const handleChange = (event) => {
    setTipo(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenList = () => {
    setOpen(true);
  };

  const [subir, setSubir] = useState(false);

  const abrirSubir = () => {
    setSubir(!subir);
  };

  return (
    <Dialog
      onClose={() => {
        props.setOpenAdd(false);
      }}
      open={props.openAdd}
      aria-labelledby="form-dialog-title"
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>
        <Typography variant="h3">Nuevo Recurso</Typography>
        <IconButton
          className={classes.closeIcon}
          aria-label="close"
          onClick={() => {
            props.setOpenAdd(false);
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
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
          <form noValidate autoComplete="off">
            <TextField
              className={classes.tituloForm}
              fullWidth={true}
              id="standard-basic"
              label="Título"
              placeholder="Ingrese un título..."
            />
            <TextField
              className={classes.tituloForm}
              fullWidth={true}
              multiline
              rows={4}
              id="standard-basic"
              label="Descripción"
              placeholder="Ingrese una descripción..."
            />
          </form>
        </div>

        <div>
          {tipo >= 2 && (
            <div className={classes.guardarButton}>
              <Button
                className={classes.btn}
                size="large"
                variant="contained"
                color="secondary"
                onClick={() => abrirSubir()}
              >
                Añadir archivo
              </Button>
            </div>
          )}

          {tipo >= 3 && (
            <>
              <FormControl className={classes.formNota}>
                <InputLabel htmlFor="nota-simple">Nota Máx.</InputLabel>
                <Select
                  native
                  value={nota.nota}
                  onChange={handleChangeNota}
                  inputProps={{
                    name: "nota",
                    id: "nota-simple",
                  }}
                >
                  <option value={10}>10</option> <option value={20}>20</option>{" "}
                  <option value={30}>30</option> <option value={40}>40</option>
                  <option value={50}>50</option> <option value={60}>60</option>{" "}
                  <option value={70}>70</option> <option value={80}>80</option>
                  <option value={90}>90</option>{" "}
                  <option value={100}>100</option>
                </Select>
              </FormControl>
              <TextField
                id="datetime-local"
                label="Next appointment"
                type="datetime-local"
                defaultValue="2021-06-18T11:59"
                className={classes.horaEntrega}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </>
          )}

          {tipo >= 4 && (
            <div className={classes.grupal}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Grupal/Individual</FormLabel>
                <RadioGroup value={grupal} onChange={handleChangeGrupal}>
                  <FormControlLabel
                    value="Grupal"
                    control={<Radio />}
                    label="Grupal"
                  />
                  <FormControlLabel
                    value="Individual"
                    control={<Radio />}
                    label="Individual"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          )}
        </div>

        <div className={classes.guardarButton} align="right">
          <Button
            className={classes.btn}
            size="large"
            variant="contained"
            color="primary"
            onClick={() => abrirSubir()}
          >
            GUARDAR
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default withStyles({
  prin: {
    display: "flex",
    margin: "16px 5px",
    border: "2px solid",
    borderRadius: "10px",
  },
  item: {
    margin: "1em",
    borde: "1px solid",
    boxSizing: "border-box",
  },
  btn: {
    margin: "5px",
  },
  conten: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ventana: {
    position: "absolute",
    width: "80%",
    height: "80%",
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: "10px 5px 5px black",
    padding: "16px 32px 24px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    FlexDirection: "column",
  },
  ventanaSubir: {
    position: "absolute",
    width: 1000,
    backgroundColor: "white",
    padding: "16px 32px 24px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    FlexDirection: "column",
  },
  iconCon: {
    fontSize: 80,
    margin: "10px",
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
  titleSubir: {
    fontSize: 40,
    margin: "0px",
  },
  container: {
    marginTop: "30px",
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    width: 200,
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
})(FormularioCrear);
