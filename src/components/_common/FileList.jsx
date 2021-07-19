import React, { useEffect, useRef } from 'react'
import FileItem from "@components/_common/FileItem"
import { useStyles } from "@components/_common/_styles";

function FileList({blockAllActions, currentFiles}) {
    const classes = useStyles();

    // reference for tray file list
    const refFileList = useRef();
    console.log('current files in file list >>> ',currentFiles)

    const fileItems = currentFiles?.map((file) => {
        return <FileItem file={file} deleteButton={false} />;
    });
    
    useEffect(() => {
        let lastElemFile = refFileList.current.lastChild;
        lastElemFile?.scrollIntoView({ behavior: "smooth" });
    }, [currentFiles]);

    return (
        <li className={classes.fileList} ref={refFileList}>
            {fileItems}
            {blockAllActions && fileItems?.length === 0 ? (
                <p>No hay archivos</p>
            ) : (
                <></>
            )}
        </li>
    )
}

export default FileList
