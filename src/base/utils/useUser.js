import instance from '@settings/axios';
import { getCourse } from '@utils/fetchData';
import React, { useMemo } from 'react';
import { useCookies } from 'react-cookie';
import { UserContext } from '../context/userContext';

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
    
    // lacinia lectus. Nam in velit non ligula pretium porta. Integer
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
                removeCookie(cookieNames.USER, { path: '/' });
                context.setUser((prev) => null);
            },
            getHeader: () => ({
                'Access-Control-Allow-Origin': '*',
                Authorization: `Bearer ${context.user.token}`,
            }),
            getCookies: () => {
                return cookies.labc_user;
            },
            isCreator: async (course_id) => {
                let res = await getCourse(course_id);
                return context.user.email === res.creator.email;
            },
        }),
        [context, setCookie, removeCookie, cookies]
    );

    // lacinia lectus. Nam in velit non ligula pretium porta. Integer
    return [context.user, actions];
}
