import React, { useEffect, useState, useRef } from "react";

import { useDropzone } from "react-dropzone";

import {
  DropZone,
  FilesList,
  Loading,
} from "@styles/Styles";

import Button from "@material-ui/core/Button";



import { app, db } from "@settings/base";

import CircularProgress from "@material-ui/core/CircularProgress";
import FileItem from "./FileItem";

function FileTray(props) {

    const mode = {
        'a': "assignments",
        'p': "posts",
      };
      
    const previousFiles = useRef();

    const [currentFiles, setCurrentFiles] = useState([]);

    const [loading, setLoading] = useState(true);

    const [success, setSuccess] = useState(false);

    const [editMode, setEditMode] = useState(false);

    const refFileList = useRef();

    const { getRootProps, open, getInputProps } = useDropzone({
        noClick: true,
        noKeyboard: true,
        onDrop: (files) => {
            //console.log(files);
            setCurrentFiles(files);
        },
      });

    const fileCollection = db
        .collection(mode[props.mode]);

    const storageRef = app.storage().ref();

    useEffect(() => {

      if(!editMode && !props.modeCreate){
        console.log("Cargando archivos")
        fileCollection?.doc(props.target_id).collection("files").get().then((snap) => {
          //console.log(snap.docs.length);
          
          let files = [];
          snap.forEach((doc) => {
            let newFile = {
              path: doc.data().name,
              downloadUrl: doc.data().downloadUrl,
            };
            files.push(newFile);
          });
          setCurrentFiles(files)

          if (snap.docs.length > 0) {
            setSuccess(true);
          } else {
            setSuccess(false);
          }
        });

        if(success){
          previousFiles.current = currentFiles;
        }
      }
      setLoading(false);
      
      }, [success,editMode]);

    useEffect(() => {
        let lastElemFile = refFileList.current.lastChild;
        lastElemFile?.scrollIntoView({
            behavior: "smooth",
        });
    }, [currentFiles]);

    const filesView = currentFiles.map((file) => {
      //console.log('files: ', file)
      return <FileItem file={file} deleteButton={false}/>;
    });

    const uploadFiles = async () => {
      setLoading(true);
      
      let target_id = props.modeCreate? await props.createIdFunction() : props.target_id;
      console.log('SUBIENDO A: ',target_id);
      if(editMode){

        let fileRef;
        
        fileCollection.doc(target_id).collection("files").get().then(
          (snap) =>{
            snap.forEach((doc) =>{
              doc.ref.delete();
            })
          }
        );
        

        await previousFiles.current.forEach( (file) => {
          fileRef =  storageRef.child(file.path);
          fileRef.delete();
        });

        //

      }

      

      for (let i = 0; i < currentFiles.length; i++) {
        let file = currentFiles[i];
  
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
  
        let downloadUrl = await fileRef.getDownloadURL();
  
        await db
          .collection(mode[props.mode])
          .doc(target_id)
          .collection("files")
          .doc(i.toString())
          .set({
            name: file.name,
            downloadUrl: downloadUrl,
        });
  
  
      }
  
      console.log("Subida exitosa!!!!");

      setCurrentFiles([]);
      setLoading(false);
      setSuccess(true);

      if(editMode) setEditMode(false);

      props.closeFunction();

    };

    const changeEditMode = (value) => {
      setEditMode(value);
      setSuccess(!value);

      if(value){
        previousFiles.current = currentFiles;
        setCurrentFiles([]);
      }
      else{
        setCurrentFiles(previousFiles.current);
        previousFiles.current = null;
      }

      

    }

    return (
        <>
            {loading ? (
                <Loading>
                <CircularProgress />
                </Loading>
                ) : (
                <></>
            )}

            <DropZone {...getRootProps({ className: "dropzone" })} hidden={success}>
                <input {...getInputProps()} />
                <p>Arrastre "n" archivos aqui</p>
                <p>o</p>
                <button type='button' onClick={open}>
                Haga click aqui
                </button>
            </DropZone>
            
            <Button
                hidden={success || props.blockAllActions}
                onClick={() => uploadFiles()}
                variant='contained'
                color='primary'
                style={{ margin: "5px" }}
            >
                Subir
            </Button>

            <Button
                hidden={!editMode || props.blockAllActions}
                onClick={() => changeEditMode(false)}
                variant='contained'
                style={{ margin: "5px" }}
            >
                Cancelar
            </Button>

            <FilesList ref={refFileList}>
                {filesView}
            </FilesList>

            <Button
                hidden={!success || props.blockAllActions}
                onClick={() => changeEditMode(true)}
                variant='contained'
                color='primary'
                style={{ margin: "5px" }}
            >
                Editar
            </Button>


        </>
    )
}

FileTray.defaultProps = {
  blockAllActions: false,
  modeCreate: false,
  createIdFunction: async () => {return "fake_id_from_request"},
  closeFunction: () => {console.log('closeFunction')}
}

export default FileTray;