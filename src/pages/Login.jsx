import LoginButton from "@components/Login/LoginButton";

import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Link,
} from "@material-ui/core";

function LoginPage() {
    
    const paperStyle = { padding: 60, height: '100  vh', width: 500, margin: '90px auto' }
    
    return ( 
        <>

        <Grid container alignContent='space-between' >

          <Paper elevation = { 20 }
            style = { paperStyle } 
          >
          <Grid align = 'center' >
            <h1> Inicie Sesión con una cuenta de Google </h1> 
          </Grid>
          <hr />
           
          <Grid align = 'center'>
            <LoginButton />
          </Grid>
          <hr />
          <Typography>
            <Link target="_blank" href = "https://accounts.google.com/signin/v2/recoveryidentifier?hl=es-419&flowName=GlifWebSignIn&flowEntry=ServiceLogin" > 
              ¿Olvidaste tu contraseña ?
            </Link> 
          </Typography> 

          <Typography> 
            ¿No tienes una cuenta?
            <Link target="_blank" href = "https://accounts.google.com/signup/v2/webcreateaccount?hl=es-419&flowName=GlifWebSignIn&flowEntry=SignUp" >
              Cree Una 
            </Link> 
          </Typography> 
          </Paper>
        </Grid>
        </> 

    )
}

export default LoginPage;
