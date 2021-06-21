import React from 'react'

import FileTray from "../components/FileTray";

import ListaPublicaciones from "../components/ListaPublicaciones";

function LabPage() {
    return (
        <div>
            {/* <FileTray pub_id={"id_publicacion"} opc={"publicacion"} callback={()=> console.log("Hello world")}/> */}
            <ListaPublicaciones></ListaPublicaciones>
        </div>
    )
}

export default LabPage