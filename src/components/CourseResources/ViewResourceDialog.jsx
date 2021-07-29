import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { useStyles } from "./_styles";
import { Button } from "@material-ui/core";
import FileCard from "./FileCard";
import Comments from "./Comments";
import useFiles from "@utils/useFiles";

function ViewResourceDialog(props) {
  const classes = useStyles();

  const [currentFiles, setCurrentFiles] = useState(null);

  const [loadFiles] = useFiles({target_id: props.post.id.toString(), mode:'p'});

  useEffect(() => {
    if (props.post.type !== 1 && !currentFiles) {
      loadFiles().then((files) => {setCurrentFiles(files)});
    }
  });

  return (
    <div className={classes.ventana}>
      <div className={classes.titleWrapper}>
        <label className={classes.tile}>{props.post.title}</label>
        <Button
          className={classes.btnClose}
          size='large'
          variant='contained'
          color='secondary'
          onClick={() => props.closeCallback()}
        >
          x
        </Button>
      </div>

      <hr />
      <p align='left'>{props.post.description}</p>
      <hr />

      {props.post.type === 1 ? (
        <></>
      ) : !currentFiles ? (
        <CircularProgress />
      ) : currentFiles.length > 0 ? (
        <></>
      ) : (
        <p>No hay archivos</p>
      )}

      {currentFiles?.map((file) => {
        return <FileCard file={file} />;
      })}
      <hr />
      <Comments post={props.post} />
    </div>
  );
}

export default ViewResourceDialog;
