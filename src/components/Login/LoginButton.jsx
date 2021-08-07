import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { useHistory, useLocation } from 'react-router-dom'
import { useUser } from '../../base/context/userContext'
import { URLS } from "@settings/urls";

function LoginButton() {
    const userActions = useUser()[1];
    const history = useHistory();
    const location = useLocation();

    let { fromOrigin } = location.state || { fromOrigin: { pathname: URLS.COURSES } };

    // function to get the googleResponse
    const responseGoogle = async ({ profileObj, tokenId }) => {
        await userActions.saveUser(profileObj)
        await userActions.saveToken(tokenId, true)

        history.replace(fromOrigin);
    }

    // nothing for now, but prefer change
    const failureGoogle = (error) => {}

    const LoginComponentParams = {
        clientId:
            '204095740277-8khgna7ci9g251auvrsn4mvdrgjgup1i.apps.googleusercontent.com',
        buttonText: 'Iniciar Sesion',
        onSuccess: responseGoogle,
        onFailure: failureGoogle,
        cookiePolicy: 'single_host_origin',
    }

    return <GoogleLogin style={{ width: '100%' }} {...LoginComponentParams} />
}

export default LoginButton
