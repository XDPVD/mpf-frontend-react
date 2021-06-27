import { FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup } from '@material-ui/core';
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

export default function GroupField({handleChangeGrupal,grupal,}) {

    const classes = useStyles();

    
    return (
        <>
            <div className={classes.grupal}>
                <FormControl component='fieldset'>
                    <FormLabel component='legend'>Grupal/Individual</FormLabel>
                    <RadioGroup value={grupal.toString()} onChange={handleChangeGrupal}>
                    <FormControlLabel
                        value='true'
                        control={<Radio />}
                        label='Grupal'
                    />
                    <FormControlLabel
                        value='false'
                        control={<Radio />}
                        label='Individual'
                    />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    )
}