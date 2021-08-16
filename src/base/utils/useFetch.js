import { useState } from 'react'
import instance from '@settings/axios'
import { useEffect } from 'react'

// pibus tortor eu malesuada. Nullam nisl neque, volutpat in vestibulum eget, pellentesque at nibh. Q
function useFetch(props) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const reloading = () => {
        setData(null);
    }
    // lectus ex, placerat vel molestie vitae, bibendum eu orci. Nulla sed dapibus enim, sed sollicitudin purus. Nulla sit amet fringilla
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
    // Phasellus quam diam, porta at libero nec, faucibus eleifend risus. In euismod dignissim 
    return [data, error, reloading];
}

export default useFetch;
