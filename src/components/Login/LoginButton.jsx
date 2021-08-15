import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { useUser } from '@utils/useUser';
import { URLS } from "@settings/urls";

function LoginButton() {
    const userActions = useUser()[1];
    const history = useHistory();

    // function to get the googleResponse
    const responseGoogle = async ({ profileObj, tokenId }) => {
        await userActions.login(profileObj, tokenId);
        history.replace(URLS.COURSES);
    }

    // nothing for now, but prefer change
    const failureGoogle = (error) => {}

    // Params for the login button
    const LoginComponentParams = {
        clientId:
            '204095740277-8khgna7ci9g251auvrsn4mvdrgjgup1i.apps.googleusercontent.com',
        buttonText: 'Iniciar Sesion',
        onSuccess: responseGoogle,
        onFailure: failureGoogle,
        cookiePolicy: 'single_host_origin',
    }

    return <GoogleLogin {...LoginComponentParams} />
}

export default LoginButton
