import React from "react";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles({
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
});

function SelectTipo({
  open,
  handleClose,
  handleOpenList,
  tipo,
  handleChange,
  menuItems,
}) {
  const classes = useStyles();
  return (
    <>
      <FormControl className={classes.formTipo}>
        <InputLabel>Tipo</InputLabel>
        <Select
          name='tipo'
          open={open}
          onClose={handleClose}
          onOpen={handleOpenList}
          value={tipo}
          onChange={handleChange}
        >
          {menuItems.map((elem) => {
            return <MenuItem value={elem.value}>{elem.title}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </>
  );
}

export default SelectTipo;
