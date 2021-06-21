import React, {useState} from 'react'

import { Card, CardActions, Typography  } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


import ModalPublicacion from "./ModalPublicacion";

import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';

import AttachFileIcon from '@material-ui/icons/AttachFile';

import DescriptionIcon from '@material-ui/icons/Description';

import AssignmentIcon from '@material-ui/icons/Assignment';

function PublicacionCard(props) {

    const {classes} = props;

    console.log("Renderizado");

    const [modal, setModal] = useState(false);

    const closeCallback = () => {
        setModal(false)
    }

    const iconsSwitch = {
        "anuncio": <FormatAlignJustifyIcon fontSize="large"/>,
        "material": <AttachFileIcon fontSize="large"/>,
        "examen": <DescriptionIcon fontSize="large"/>,
        "tarea": <AssignmentIcon fontSize="large"/>,
    }

    return (
        <Card className={classes.prin}>
            <div className={classes.conten}>
                <div className={classes.desc}>
                    {iconsSwitch[props.modo]}
                    <div component='div' classNam={classes.cardContent}>
                        <Typography className={classes.tile}>{props.publi_obj.titulo}</Typography>
                        <Typography variant="caption" className={classes.fecha}>{props.publi_obj.fecha_creacion}</Typography>
                    </div>
                    {props.modo === "tarea" || props.modo === "examen" ?
                        <div className={classes.fecha}>
                            <p>Fecha Max.: </p>
                        </div>
                    : <></>
                    }
                </div>  
            </div>
            <CardActions>
                {props.asignacion ?
                    <Button className={classes.btn} size="large" variant="contained" color="primary">
                        Nota:   -- /100
                    </Button> :
                    <></>
                }       
                <Button className={classes.btn} size="large" 
                    variant="contained" color="primary" onClick={() => {setModal(true)}}>
                    VER
                </Button>
            </CardActions>
            {modal?
                <ModalPublicacion closeCallback={closeCallback} pub_obj={null}/>
                :
                <></>
            }
        </Card>
    )
}

export default withStyles({
    fecha:{
        margin: "5px 0px 5px 10px",
    },
    prin:{
        display:'flex',
        margin: '16px 5px',
        border:'2px solid',
        borderRadius: '10px',
        padding: "8px",
        justifyContent: "space-between",
        height: "100px",
    },
    desc:{
        display:'flex', 
        flexDirection:'flow',
        alignItems: 'center',

    },
    tile:{
        fontSize: 36,
        margin:'0px',
        marginLeft: "10px",
    },
    item:{
        margin:'1em',
        borde: '1px solid',
        boxSizing:'border-box',
    },
    cardContent:{
        display:'flex',
        alignContent: 'center',
    },
    conten:{
        display:'flex', 
        flexDirection:  'column',
        width: '100%'
    },
    iconCon:{
        fontSize: 50,
        margin: '10px'
    },
    formNota:{
        marginTop: '10px',
        minWidth: 50,
    },
    horaEntrega:{
        marginTop: '10px',
        marginLeft: '10px'
    },
    formTipo:{
        minWidth: 120,
    },
    guardarButton: {
        marginTop: '10px'
    },
    titleSubir:{
        fontSize: 40,
        margin:'0px',
    },
    container: {
        marginTop: '30px',
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: 200,
    },
    grupal: {
        marginTop: '20px',
    }
}) (PublicacionCard);