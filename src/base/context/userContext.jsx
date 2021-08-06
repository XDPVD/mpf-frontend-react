import instance from "@settings/axios";
import { getCourse } from "@utils/fetchData";
import React, { useState, useMemo } from "react";
import { useCookies } from "react-cookie";

// create context
const UserContext = React.createContext();

const cookieNames = {
  USER: "userObj",
  TOKEN: "userToken",
};

export function UserProvider(props) {
  // ###########################
  // ## user object structure ##
  // ###########################
  // googleId: '',
  // name: '',
  // email: '',
  // familyName: '',
  // givenName: '',
  // imageUrl: '',
  // token: '',

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const currentUser = useMemo(() => {
    return {
      user,
      loading,
      setUser,
      setLoading,
    };
  }, [user, loading]);

  return <UserContext.Provider value={currentUser} {...props} />;
}

export function useUser() {
  const context = React.useContext(UserContext);

  if (!context) {
    throw new Error(
      "DEV Error: The component must be a child of a context " +
        "provider in order to use its useContext"
    );
  }

  // use useCookies useState
  const [cookies, setCookie, removeCookie] = useCookies([
    cookieNames.USER,
    cookieNames.TOKEN,
  ]);

  const actions = useMemo(
    () => ({
      saveUser: async (userInput) => {
        setCookie(cookieNames.USER, userInput);
        context.setUser((prev) => ({ ...prev, ...userInput }));
      },
      saveToken: async (tokenParameter, requiredBack) => {
        let token;
        if (requiredBack) {
          let payload = { token: tokenParameter };

          let response = await instance({
            method: "POST",
            url: "/verify_oauth_token",
            data: payload,
          });

          token = response.data;
        } else {
          token = tokenParameter;
        }
        setCookie(cookieNames.TOKEN, token);
        context.setUser((prev) => ({ ...prev, token }));
      },
      removeUser: () => {
        context.setUser(prev => null);
        removeCookie(cookieNames.USER);
        removeCookie(cookieNames.TOKEN);
      },
      getHeader: () => ({
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${context.user.token}`,
      }),
      isCreator: async (course_id) => {
        let res = await getCourse(course_id);
        return context.user.email === res.creator.email;
      },
      getCookies: () => {
        return [cookies.userObj, cookies.userToken];
      },
    }),
    [context, setCookie, removeCookie, cookies]
  );

  return [context.user, actions, cookies];
}
