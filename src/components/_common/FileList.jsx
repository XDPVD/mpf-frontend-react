import React from 'react'
import { FilesList } from "@styles/Styles";

function FileList({blockAllActions, children}) {
    return (
        <FilesList >
            {children}
            {blockAllActions && children.length === 0 ? (
                <p>No hay archivos</p>
            ) : (
                <></>
            )}
        </FilesList>
    )
}

export default FileList
