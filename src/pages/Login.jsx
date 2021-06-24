import LoginButton from "@components/Login/LoginButton";

import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import styled from "styled-components";

import { GoogleLogin } from 'react-google-login';


function LoginPage() {
    const paperStyle = { padding: 60, height: '100  vh', width: 500, margin: '90px auto' }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }



    return ( 
        <>

        <Grid>

        <Paper elevation = { 10 }
        style = { paperStyle } >
        <Grid align = 'center'>
        <h1> Inicie Sesión con una cuenta de Google </h1> 
        </Grid>
        <Grid align = 'center'>
        <Login />
        </Grid>
        {/* <p > </p> <TextField label = 'Correo Electronico'
        placeholder = 'Correo Electronico'

        fullWidth required / >

        <p > </p> <TextField label = 'Contraseña'
        placeholder = 'Contraseña'
        type = 'password'
        fullWidth required / > */}

        {/* <FormControlLabel control = { <
            Checkbox
            name = "checkedB"
            color = "primary" /
            >
        }
        label = "Recordar Correo Electronico " />
        <p> </p> <p> </p> <Button type = 'submit'
        color = 'primary'
        variant = "contained"
        style = { btnstyle }
        fullWidth > Ingresar </Button> */}

        <Typography>
        <Link href = "https://accounts.google.com/signin/v2/recoveryidentifier?hl=es-419&flowName=GlifWebSignIn&flowEntry=ServiceLogin" > ¿Olvidaste tu contraseña ?
        </Link> 
        </Typography> <Typography> ¿No tiene una cuenta ?
        <Link href = "https://accounts.google.com/signup/v2/webcreateaccount?hl=es-419&flowName=GlifWebSignIn&flowEntry=SignUp" >
        Cree Una </Link> 
        </Typography> 
        </Paper>
        </Grid>
        </> 

    )
}

export default LoginPage;
