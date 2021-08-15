import { useCallback } from 'react'
import instance from '@settings/axios';

function usePut(props) {
    const postAction = useCallback(async (data) => {
        let result = await instance({
            method: "PUT",
            url: props.url,
            headers: props.headers,
            data: data,
        });

        return [result.data]
    }, [props]);

    return postAction;
}

export default usePut;
