import instance from '@settings/axios';
import { getCourse } from '@utils/fetchData';
import React, { useMemo } from 'react';
import { useCookies } from 'react-cookie';
import { UserContext } from '../context/userContext';
import prettyLog from '../utils/prettyLog';
const cookieNames = {
    USER: 'labc_user',
};

export function useUser() {
    const context = React.useContext(UserContext);

    if (!context) {
        throw new Error(
            'DEV Error: The component must be a child of a context ' +
                'provider in order to use its useContext'
        );
    }

    // use useCookies useState
    const [cookies, setCookie, removeCookie] = useCookies([cookieNames.USER,]);
    
    const actions = useMemo(
        () => ({
            login: async (userInput, tokenInput) => {
                // get a user
                let userResult = userInput;
                // get a token
                if(tokenInput){
                  let payload = { token: tokenInput };
                  let response = await instance({
                      method: 'POST',
                      url: '/verify_oauth_token',
                      data: payload,
                  });
                  let token = response.data;
                  userResult = { ...userResult, token}
                  setCookie(cookieNames.USER, userResult, { path: '/' });
                }
                // set to the context
                context.setUser((prev) => ( userResult ));
            },
            logout: () => {
                prettyLog('cookies ', cookies);
                removeCookie(cookieNames.USER, { path: '/' });
                prettyLog('cookies user after remove',cookies);
                context.setUser((prev) => null);
            },
            getHeader: () => ({
                'Access-Control-Allow-Origin': '*',
                Authorization: `Bearer ${context.user.token}`,
            }),
            getCookies: () => {
                return cookies.labc_user;
            },
            // TODO: This is ugly
            isCreator: async (course_id) => {
                let res = await getCourse(course_id);
                return context.user.email === res.creator.email;
            },
        }),
        [context, setCookie, removeCookie, cookies]
    );

    return [context.user, actions];
}
