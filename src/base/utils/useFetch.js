import { useState } from 'react'
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
    }, [props.endpoint, props.headers]);

    const reloading = () => {
        setData(null);
    }

    useEffect(() => {
        const fetchData = async () => {
            try{
                let res = await instance.get(props.endpoint, { headers: props.headers });
                setData(res.data);
            }
            catch(e){
                setError({
                    msg: e.response
                });
            }
        }

        fetchData();
    }, [props.endpoint, props.headers]);

    return [data, error, reloading];
}

export default useFetch;
