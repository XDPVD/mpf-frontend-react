import React from 'react'

import FileTray from "../components/FileTray";

function LabPage() {
    return (
        <div>
            <FileTray pub_id={"id_publicacion"} opc={"publicacion"} callback={()=> console.log("Hello world")}/>
        </div>
    )
}

export default LabPage