import React, { useEffect, useState, useRef } from "react";

import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import useFiles from "@utils/useFiles";
import DropZoneComp from "@components/_common/DropZoneComp";
import FileList from "@components/_common/FileList";
import { useStyles } from "./_styles";

function FileTray(props) {
  const classes = useStyles();

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

  useEffect(() => {
    if (!editMode && !props.modeCreate) {
      loadFiles()
        .then((res) => {
          setCurrentFiles(res);
          setSuccess(res.length > 0)
          setLoading(false);
        });
    }
    else{
      setLoading(false);
      //console.log('loading -> false');
    }
    
  }, [editMode, loadFiles, props.modeCreate]);

  useEffect(() => {
    if (success) previousFiles.current = currentFiles;
  },[success, currentFiles]);

  const uploadEvent = async () => {

    setLoading(true);

    // set target_id
    let target_id = props.modeCreate
    ? await props.createIdFunction()
    : props.target_id;

    // target_id (announcement) direct to close method
    if (target_id == null) return props.closeFunction();
    target_id = target_id.toString();

    await uploadFiles({editMode, currentFiles, previousFiles, id: target_id});

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
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      ) : (
        <></>
      )}

      <DropZoneComp {...{ setCurrentFiles, success, blockAllActions:props.blockAllActions }}/>

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

      <FileList {... {blockAllActions: props.blockAllActions, currentFiles}} />

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
