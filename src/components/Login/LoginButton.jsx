import React from "react";

import { GoogleLogin } from "react-google-login";

import { useHistory } from "react-router-dom";

import { useCookies } from "react-cookie";

import instance from "@settings/axios";

function LoginButton() {
  const [, setCookie] = useCookies(["name"]);

  const history = useHistory();

  const saveToken = async (tokenParameter) => {
    try {
      console.log(tokenParameter);
      let payload = { token: tokenParameter };

      let resp = await instance({
        method: "POST",
        url: "/verify_oauth_token",
        data: payload,
      });

      setCookie("userToken", resp.data);
      console.log("resp.data");
      console.log(resp.data);
      //console.log("")
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  const responseGoogle = async (response) => {
    //console.log(response.profileObj);
    //console.log(response.tokenId);

    setCookie("name", response.profileObj);
    await saveToken(response.tokenId);
    //login(response)
    history.push("/cursos");
  };

  const failureGoogle = (error) => {};

  return (
    <>
      <GoogleLogin
        clientId='204095740277-8khgna7ci9g251auvrsn4mvdrgjgup1i.apps.googleusercontent.com'
        buttonText='Iniciar Sesion'
        onSuccess={responseGoogle}
        onFailure={failureGoogle}
        cookiePolicy={"single_host_origin"}
        style={{ width: "100%" }}
      />
    </>
  );
}

export default LoginButton;
