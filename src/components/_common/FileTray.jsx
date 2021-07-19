import React, { useEffect, useState, useRef } from "react";

import { useDropzone } from "react-dropzone";

import { FilesList, Loading } from "@styles/Styles";

import Button from "@material-ui/core/Button";

import { app } from "@settings/base";

import CircularProgress from "@material-ui/core/CircularProgress";
import FileItem from "@components/_common/FileItem";
import useFiles from "@utils/useFiles";
import DropZoneComp from "@components/_common/DropZoneComp";

function FileTray(props) {

  // useFiles hook
  const [loadFiles, , , ,uploadFiles] = useFiles(props);

  // reference pointing to an array (now null) 
  // that stores the previous files before editing
  const previousFiles = useRef();

  // list of current files in the tray
  const [currentFiles, setCurrentFiles] = useState([]);

  // flag to indicate charging status
  const [loading, setLoading] = useState(true);

  // flag indicating the status of finished
  const [success, setSuccess] = useState(false);

  // flag indicating the edition status
  const [editMode, setEditMode] = useState(false);

  // reference for tray file list
  const refFileList = useRef();

  // modeCreate state variable
  const modeCreate = useState(props.modeCreate)[0];

  useEffect(() => {
    if (!editMode && !modeCreate) {
      loadFiles()
        .then((res) => {
          setCurrentFiles(res);
          setSuccess(res.length > 0)
          setLoading(false);
        });
    }
    else{
      setLoading(false);
      console.log('loading -> false');
    }
    
  }, [editMode, loadFiles, modeCreate]);

  useEffect(() => {
    if (success) previousFiles.current = currentFiles;
  },[success, currentFiles]);

  useEffect(() => {
    let lastElemFile = refFileList.current.lastChild;
    lastElemFile?.scrollIntoView({ behavior: "smooth" });
  }, [currentFiles]);

  const filesView = currentFiles.map((file) => {
    return <FileItem file={file} deleteButton={false} />;
  });

  const uploadEvent = async () => {

    setLoading(true);

    await uploadFiles({editMode, currentFiles, previousFiles});

    // TODO: Find better ways to change status
    setCurrentFiles([]);
    setLoading(false);
    setSuccess(true);

    if (editMode) setEditMode(false);
    props.closeFunction();

  };

  const changeEditMode = (value) => {
    setEditMode(value);
    setSuccess(!value);

    if (value) {
      previousFiles.current = currentFiles;
      setCurrentFiles([]);
    } else {
      setCurrentFiles(previousFiles.current);
      previousFiles.current = null;
    }
  };
  
  return (
    <>
      {loading ? (
        <Loading>
          <CircularProgress />
        </Loading>
      ) : (
        <></>
      )}

      <DropZoneComp />

      <Button
        hidden={success || props.blockAllActions}
        onClick={() => uploadEvent()}
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
        {props.blockAllActions && filesView.length === 0 ? (
          <p>No hay archivos</p>
        ) : (
          <></>
        )}
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
  );
}

FileTray.defaultProps = {
  blockAllActions: false,
  modeCreate: false,
  createIdFunction: async () => {
    return "fake_id_from_request";
  },
  closeFunction: () => {
    console.log("closeFunction");
  },
};

export default FileTray;
