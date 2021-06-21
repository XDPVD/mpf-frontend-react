import React,{useState} from 'react'

import PublicacionCard from './PublicacionCard';

export const ListaPublicaciones = (props) => {
    
    const [modal, setModal] = useState(false);

    const handleOpen = () => {
        setModal(!modal);
    }
 
    const [subir, setSubir] = useState(false);

    return ( 
        <>
            <PublicacionCard />
        </>
     );
}
 
