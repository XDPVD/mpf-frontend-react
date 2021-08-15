import { useCallback } from 'react'
import instance from '@settings/axios';

function usePost(props) {
    const postAction = useCallback(async (data) => {
        let result = await instance({
            method: "POST",
            url: props.url,
            headers: props.headers,
            data: data,
        });

        return [result.data]
    }, [props]);

    return postAction;
}

export default usePost
