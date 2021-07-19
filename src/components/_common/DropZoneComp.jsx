import React from 'react'
import { useDropzone } from 'react-dropzone'
import { useStyles } from "@components/_common/_styles";

function DropZoneComp({ setCurrentFiles, success, blockAllActions }) {
    const classes = useStyles();
    
    // Settings for the Drop Zone third-party component
    const { getRootProps, open, getInputProps } = useDropzone({
        noClick: true,
        maxFiles: 5,
        noKeyboard: true,
        onDrop: (files) => {
            setCurrentFiles(files);
        },
    });

    return (
        <div
            className={classes.dropZone}
            {...getRootProps({ className: "dropzone" })}
            hidden={success || blockAllActions}
        >
            <input {...getInputProps()} />
            <p>Arrastre "n" archivos aqui</p>
            <p>o</p>
            <button type='button' onClick={open}>
            Seleccione sus archivos
            </button>
        </div>
    )
}

export default DropZoneComp;
