import React from 'react'
import { Card, CardActions, CardContent, Typography  } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { display } from '@material-ui/system';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { useState } from "react";
import styled from "styled-components";
import { Icon } from '@material-ui/core';
const MyTab = styled(Tab)`
  text-transform: none;
  min-width: 80px;
  margin: 0 5px;
`;
const AnadirCurso = (props) => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const {classes} = props

    return ( 
        <>
        <Typography variant="h4">Métodos Formales para Pruebas</Typography>
        <Tabs value={selectedTab} onChange={handleChange}>
            <MyTab label="Dashboard" />
            <MyTab label="Clases" />
            <MyTab label="Tareas" />
            <MyTab label="Exámenes" />
            <MyTab label="Personas" />
        </Tabs>
        <Card className={classes.prin}>
            <div className={classes.conten}>
                <Icon className={classes.iconCon}>
                    assignment
                </Icon>
                <CardContent >
                    <Typography className={classes.tile}>Material</Typography>
                </CardContent>
                <CardActions>
                    <Button className={classes.btn} size="large" variant="contained" color="primary">SUBIR</Button>
                </CardActions>
            </div>
        </Card>
        </>
     );
}
 

export default withStyles({
    prin:{
        display:'flex',
        margin: '40px 100px 40px 250px',
        border:'2px solid',
        borderRadius: '10px',
    },
    tile:{
        fontSize: 40,
        margin:'10px',
    },
    btn:{
        marginLeft: '800px'
    },
    conten:{
        display:'flex',
        flexDirection:'row',
    },
    iconCon:{
        fontSize: 80,
        margin: '10px'
    }
})(AnadirCurso);