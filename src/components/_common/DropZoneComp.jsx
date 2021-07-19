import React from 'react'
import { DropZone } from '@styles/Styles.js';
import { useDropzone } from 'react-dropzone'

function DropZoneComp({ setCurrentFiles, success, blockAllActions }) {
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
        <DropZone
            {...getRootProps({ className: "dropzone" })}
            hidden={success || blockAllActions}
        >
            <input {...getInputProps()} />
            <p>Arrastre "n" archivos aqui</p>
            <p>o</p>
            <button type='button' onClick={open}>
            Seleccione sus archivos
            </button>
        </DropZone>
    )
}

export default DropZoneComp;
