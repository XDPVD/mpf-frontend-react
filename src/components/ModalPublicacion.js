import React,{useState} from 'react'
import { Card, CardActions, CardContent, Typography, CardMedia  } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Modal } from '@material-ui/core';
import { Icon } from '@material-ui/core';
import FormularioCrear from './FormularioCrear';

function ModalPublicacion(props) {
    
    const {classes} = props

    const [modal, setModal] = useState(false);

    const handleOpen = () => {
        setModal(!modal);
    }

    return (
        <div align='center' className={classes.ventana}>
            <label className={classes.tile}>MATERIAL NOMBRE</label>
            <hr></hr>
            <p align='left'>
                texto de ejemplo loresm ipsum
            </p>
            
            <Card display ='flex'>
                <div className={classes.conten}>
                    <CardMedia width='151px'>
                        <Icon className={classes.iconCon}>
                            assignment
                        </Icon>
                    </CardMedia>
                    <div>
                        <CardContent flex='1 0 auto'>
                            <Typography className={classes.tile} component="h5" variant="h5">
                                BASE DE DATOS 2
                            </Typography>
                        </CardContent>
                    </div>
                </div>    
            </Card>
            <br></br>        
            <div align='right'>
                <Button className={classes.btn} size="large" variant="contained" color="secondary" onClick={()=>handleOpen()}>SALIR</Button>
            </div>
        </div>
    )
}

export default ModalPublicacion
