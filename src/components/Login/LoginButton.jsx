import React from "react";

import { GoogleLogin } from 'react-google-login';

import { useHistory } from 'react-router-dom';

import { useUsuario } from '../../base/context/usuario-context';
import { withCookies, Cookies } from 'react-cookie';
import {useCookies } from 'react-cookie';
import axios from 'axios';

function LoginButton() {
  const [cookies, setCookie] = useCookies(['name']);
  const [userToken, setUserToken] = useCookies(['userToken']);
  const {login} = useUsuario();

  const history = useHistory();
  
  const saveToken=async (tokenParameter)=>{
    try {
      let payload = { token: tokenParameter};

      let resp = await axios.post('http://052236eebe18.ngrok.io/verify_oauth_token', payload);

      setCookie('userToken', resp.data);
      console.log("resp.data")
      console.log(resp.data)
      console.log("")
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }

  const responseGoogle = async (response) => {
    console.log(response.profileObj);
    console.log(response.tokenId);

    setCookie('name', response.profileObj);
    saveToken(response.tokenId);
    //login(response)
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
