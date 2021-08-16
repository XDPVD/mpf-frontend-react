import { useCallback } from 'react'
import instance from '@settings/axios';

//lacerat. Vestibulum ultrices risus et ligula auctor hendrerit. Praesent sit amet mauris ac sapien placerat auctor. 
// Ut lorem leo, egestas ornare felis nec, molestie ultrices mauris. 
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
