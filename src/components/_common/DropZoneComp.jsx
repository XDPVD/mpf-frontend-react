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

            let size = files.reduce((acc, currentVal ) => {
                return acc + currentVal.size;
            }, 0)

            size *=  9.537*Math.pow(10,-7);  

            if (size > 30.0){
                alert('El peso de los archivos no debe superar mas de los 30MB');
                alert('Por favor, comprima sus archivos');
                return;
            }
            setCurrentFiles(files);
        },
    });

    return (
        <div
            {...getRootProps({ className: "dropzone" })}
            className={classes.dropZone}
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
