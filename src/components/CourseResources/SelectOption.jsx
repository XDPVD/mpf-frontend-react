import { FormControl, InputLabel, makeStyles, Select } from '@material-ui/core';
import React from 'react'

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

function SelectOption({valueSelected, handleOnChange}) {
    const classes = useStyles();
    return (
        <>
            <FormControl className={classes.formNota}>
                  <InputLabel htmlFor='nota-simple'>Nota Máx.</InputLabel>
                  <Select
                    native
                    value={valueSelected}
                    onChange={handleOnChange}
                    inputProps={{
                      name: "nota",
                      id: "nota-simple",
                    }}
                  >
                  {
                    [...new Array(10)].map((value,i) => {
                      let x = (i+1)*10;
                      let isSelected = (valueSelected === x);
                      return(
                        <option selected={isSelected} value={x}>{x}</option>
                      );
                    })
                  }
                  </Select>
            </FormControl>  
        </>
    )
}
export default SelectOption;