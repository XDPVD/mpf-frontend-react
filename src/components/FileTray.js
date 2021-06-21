import React, {
    useEffect,
    useState,
    useRef
} from 'react';

import {
    useDropzone
} from 'react-dropzone';

import {
    FileTrayContainer as Container,
    DropZone,
    FilesList,
    Loading
} from "../styles/Styles"

import Button from '@material-ui/core/Button';

import FileItem from "./FileItem";

import {
    app,
    db
} from "../config/base";

import CircularProgress from '@material-ui/core/CircularProgress';



function FileTray(
    props
    ) {

    const
        opc = {
            "asignacion": "archivos_asignacion",
            "publicacion": "archivos_publicacion",
        }

    const [
        success,
        setSuccess
    ] =
    useState
        (
            false);

    const [
        loading,
        setLoading
    ] =
    useState
        (
            true);

    const [
        currentFiles,
        setCurrentFiles
    ] =
    useState
        (
        []);

    const
        refFileList =
        useRef();

    const {
        getRootProps,
        open,
        getInputProps
    } =
    useDropzone
        ({
            noClick: true,
            noKeyboard: true,
            onDrop: files => {
                setCurrentFiles
                    (prev => {
                        return [
                          ...prev,
                          ...files
                        ]
                    });
            }
        });

    const
        storageRef =
        app
        .storage()
        .ref();

    const
        fileCollection =
        db
        .collection(
            opc[props
                .opc
                ]
            )
        .doc(
            props
            .pub_id
            )
        .collection(
            "archivos"
            );


    useEffect
        (() => {

                fileCollection
                    .get()
                    .then(
                        snap => {
                            if (snap
                                .docs
                                .length >
                                0
                                ) {
                                let
                            files = [];
                                snap.forEach(
                                    doc => {
                                        let newFile = {
                                            path: doc
                                                .data()
                                                .name,
                                            storeLink: doc
                                                .data()
                                                .downloadUrl
                                        }
                                        files
                                            .push(
                                                newFile
                                                );
                                    }
                                    )
                                setCurrentFiles
                                    (
                                        files);
                                setLoading
                                    (
                                        false);
                                setSuccess
                                    (
                                        true);
                            } else {
                                setLoading
                                    (
                                        false);
                            }
                        }
                        )
            },
            [success]
            );

    const
        uploadFiles =
        async () => {
            setLoading
                (
                    true);

            for (
                let i =
                    0; i <
                currentFiles
                .length; i++
                ) {

                let file =
                    currentFiles[
                        i
                        ];

                const
                    fileRef =
                    storageRef
                    .child(
                        file
                        .name
                        );
                await fileRef
                    .put(
                        file
                        );

                let downloadUrl =
                    await fileRef
                    .getDownloadURL();

                await db
                    .collection(
                        opc[props
                            .opc
                            ]
                        )
                    .doc(
                        props
                        .pub_id
                        )
                    .collection(
                        "archivos"
                        )
                    .doc(
                        i
                        .toString()
                        )
                    .set({
                        name: file
                            .name,
                        downloadUrl: downloadUrl
                    });

                if (props
                    .callback
                    ) {
                    props
                        .callback();
                }

            }

            console
                .log(
                    "Subida exitosa!!!!"
                    );
            setLoading
                (
                    false);
            setCurrentFiles
                (
                []);
            setSuccess
                (
                    true);


        }

    useEffect
        (() => {

                let lastElemFile =
                    refFileList
                    .current
                    .lastChild;
                lastElemFile
                    ?.scrollIntoView({
                        behavior: "smooth"
                    })

            },
            [
                currentFiles]
            )

    const
        filesView =
        currentFiles
        .map(
            (
                file) => {
                return (
                    <FileItem file={file} success={success}/>);
            }
            );

    return (
        <Container>

      {
        loading ?
          <Loading>
            <CircularProgress />
          </Loading>
        :
          <></>
      }

      <FilesList ref={refFileList} >
        {filesView}
      </FilesList>

      <DropZone {...getRootProps({className: 'dropzone'})}  hidden={success}>
        <input {...getInputProps()} />
        <p>Arrastre "n" archivos aqui</p>
        <p>o</p>
        <button type="button" onClick={open}>
          Haga click aqui
        </button>
      </DropZone>
      <Button hidden={success} onClick={() => uploadFiles()} variant="contained" color="primary" style={{"margin":"5px"}}>
        Subir
      </Button>
    </Container>
    );
}

export default FileTray