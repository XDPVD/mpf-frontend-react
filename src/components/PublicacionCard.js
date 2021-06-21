import React from 'react'

import { Card, CardActions, CardContent, Typography, CardMedia  } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import { Icon } from '@material-ui/core';


function PublicacionCard(props) {

    const {classes} = props;

    return (
        <Card className={classes.prin}>
        <div className={classes.conten}>
            <Icon className={classes.iconCon}>
                assignment
            </Icon>
            <CardContent >
                <Typography className={classes.tile}>publicacion.nombre</Typography>
            </CardContent>
            <CardActions>
                <Button className={classes.btn} size="large" variant="contained" color="primary">VER</Button>
            </CardActions>
        </div>
    </Card>
    )
}

export default withStyles({
    prin:{
        display:'flex',
        margin: '16px 5px',
        border:'2px solid',
        borderRadius: '10px',
    },
    tile:{
        fontSize: 40,
        margin:'10px',
    },
    item:{
        margin:'1em',
        borde: '1px solid',
        boxSizing:'border-box',
    },
    btn:{
        margin:'5px',
    },
    conten:{
        display:'flex', 
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    ventana:{
        position: 'absolute',
        width: '80%',
        height: '80%',
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: '10px 5px 5px black',
        padding: '16px 32px 24px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        FlexDirection:'column',
    },
    ventanaSubir:{
        position: 'absolute',
        width: 1000,
        backgroundColor: 'white',
        padding: '16px 32px 24px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        FlexDirection:'column',
    },
    iconCon:{
        fontSize: 80,
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