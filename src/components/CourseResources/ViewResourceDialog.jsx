import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { useStyles } from "./_styles";
import { Button } from "@material-ui/core";
import FileCard from "./FileCard";
import Comments from "./Comments";
import { db } from "@settings/base";

function ViewResourceDialog(props) {
  const classes = useStyles();

  const [currentFiles, setCurrentFiles] = useState(null);

  useEffect(() => {
    if (props.post.type !== 1) {
      db.collection("posts")
        ?.doc(props.post.id.toString())
        ?.collection("files")
        ?.get()
        .then((snap) => {
          let files = [];
          snap.forEach((doc) => {
            let newFile = {
              name: doc.data().name,
              downloadUrl: doc.data().downloadUrl,
            };
            files.push(newFile);
          });
          setCurrentFiles(files);
        });
    }
    console.log(props.post);
  }, []);

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
