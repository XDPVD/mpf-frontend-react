import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import FileCard from "./FileCard";
import Comments from "./Comments";
import { db } from "@settings/base";

const useStyles = makeStyles({
  card: {
    display: "flex",
    justifyContent: "space-between",
    margin: "5px 0px",
  },
  btn: {
    marginLeft: "auto",
    fontSize: "20px",
  },
  prin: {
    display: "flex",
    padding: "8px",
    justifyContent: "space-between",
  },
  tile: {
    fontSize: 24,
    margin: "0px",
  },
  cardContent: {
    display: "flex",
    alignContent: "center",
  },
  conten: {
    display: "flex",
    flexDirection: "flow",
    alignItems: "center",
    height: "70px",
  },
  iconCon: {
    fontSize: 50,
    margin: "10px",
  },
  ventana: {
    position: "absolute",
    width: "80%",
    height: "80%",
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: "10px 5px 5px black",
    padding: "16px 32px 24px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    FlexDirection: "column",
    overflowY: "scroll",
    "z-index": "30",
  },
});

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
      <div className={classes.prin}>
        <label className={classes.tile}>{props.post.title}</label>
        <Button
          className={classes.btn}
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
