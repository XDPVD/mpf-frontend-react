import React, { useState } from 'react'
import axios from '@settings/axios'
import instance from '@settings/axios'
import { useEffect } from 'react'
import { useCallback } from 'react'



function useFetch(props) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        try{
            let res = await instance.get(props.endpoint, { headers: props.headers });
            setData(res.data);
        }
        catch(e){
            setError({
                msg: e.response
            });
        }
    }, [props]);

    useEffect(() => {
        fetchData()
    }, [fetchData]);

    return [data, error];
}

export default useFetch;
