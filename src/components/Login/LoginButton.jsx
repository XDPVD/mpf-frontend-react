import React from "react";

import { GoogleLogin } from 'react-google-login';

import { useHistory } from 'react-router-dom';

import { useUsuario } from '../../base/context/usuario-context';

function LoginButton() {

  const {login} = useUsuario();

  const history = useHistory();

  const responseGoogle = (response) => {
    console.log(response);
    login(response);
    history.push("/cursos");
  }

  const failureGoogle = (error) => {
    
  }

  return (
      <>
      <GoogleLogin
        clientId="204095740277-8khgna7ci9g251auvrsn4mvdrgjgup1i.apps.googleusercontent.com"
        buttonText="Iniciar Sesion"
        onSuccess={responseGoogle}
        onFailure={failureGoogle}
        cookiePolicy={'single_host_origin'}
        style={{"width":"100%"}}
      />
      </>
  );
}


export default LoginButton;
