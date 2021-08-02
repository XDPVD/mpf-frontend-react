import React, { useState } from 'react'
import axios from '@settings/axios'
import instance from '@settings/axios'
import { useEffect } from 'react'
import { useCallback } from 'react'



function useFetch({ endpoint, headers }) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    
    const fetchData = useCallback(async () => {
        try{
            let res = await instance.get(endpoint);
            setData(res.data);
        }
        catch(e){
            alert(e.response);
        }
    }, [endpoint]);

    useEffect(() => {
        fetchData()
    }, [fetchData])
}

export default useFetch;
