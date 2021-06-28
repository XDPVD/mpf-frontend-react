import React, {useState, useEffect} from 'react'

import { useCookies } from 'react-cookie';

import instance from '@settings/axios';
import { getCourse } from '@utils/fetchData';

function useUserInfo(props) {

    const [cookies, setCookie] = useCookies(['name']);
    const [userToken, setUserToken] = useCookies(['userToken']);

    const isCreator = async (course_id) => {
        let res = await getCourse(course_id);
        
        return cookies.name.email === res.creator.email;
    }

    useEffect(() => {
        console.log('Cookies: ',cookies);
        console.log('userToken: ',userToken);
    }, [])

    return [cookies, userToken, isCreator];
}

export default useUserInfo;
