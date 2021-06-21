import React from 'react'

import PublicacionCard from "../components/PublicacionCard";

function LabPage() {
    return (
        <div>
            {/* <FileTray pub_id={"id_publicacion"} opc={"publicacion"} callback={()=> console.log("Hello world")}/> */}
            <PublicacionCard />
        </div>
    )
}

export default LabPage