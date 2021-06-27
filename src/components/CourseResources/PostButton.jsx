import { Button, makeStyles } from '@material-ui/core';
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

function PostButton({onClick}) {
    const classes = useStyles();
    return (
        <>
        <div className={classes.guardarButton} align='right'>
            <Button
                className={classes.btn}
                size='large'
                variant='contained'
                color='primary'
                onClick={onClick}
            >
                SUBIR
            </Button>
        </div> 
        </>
    )
}
export default PostButton;