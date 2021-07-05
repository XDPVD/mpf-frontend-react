import React from 'react'
import { FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core'

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
    formType: {
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



function SelectType({open, handleClose, handleOpenList, type, handleChange, menuItems}) {
    const classes = useStyles();
    return (
        <>
          <FormControl className={classes.formType}>
              <InputLabel>Type</InputLabel>
              <Select
              name='type'
              open={open}
              onClose={handleClose}
              onOpen={handleOpenList}
              value={type}
              onChange={handleChange}
              >
                {
                  menuItems.map((elem) => {
                    return (<MenuItem value={elem.value}>{elem.title}</MenuItem>)
                  })
                }
              </Select>
          </FormControl>
        </>
    )
}

export default SelectType;
