import React from "react";

import { GoogleLogin } from "react-google-login";

import { useUser } from '../../base/context/userContext';

function LoginButton() {

  const userActions = useUser()[1];


  // function to get the googleResponse
  const responseGoogle = async ({ profileObj, tokenId }) => {
    await userActions.saveUser(profileObj);
    await userActions.saveToken(tokenId, true);
    
  };

  // nothing for now, but prefer change
  const failureGoogle = (error) => {

  };

  const LoginComponentParams = {
    clientId: '204095740277-8khgna7ci9g251auvrsn4mvdrgjgup1i.apps.googleusercontent.com',
    buttonText: 'Iniciar Sesion',
    onSuccess: responseGoogle,
    onFailure: failureGoogle,
    cookiePolicy: "single_host_origin",
  }

  return (
    <GoogleLogin
      style={{ width: "100%" }}
      {...LoginComponentParams}
    />
  );
}

export default LoginButton;
