import React,{useState, useEffect} from "react";
import { Card, CardContent, Typography, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Icon } from "@material-ui/core";
import FileCard from "./FileCard";
import {useCollection} from "react-firebase-hooks/firestore";

import { app, db } from "@settings/base";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    justifyContent: "space-between",
    margin: "5px 0px",
  },
  btn: {
    marginLeft: "auto",
    fontSize: '20px',
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
    "overflow-y": "scroll",
    "z-index": "30",
  },
}));

function ViewResourceDialog(props) {
  const classes = useStyles();

  const [currentFiles, setCurrentFiles] = useState([]);

  const mode = {
    'T': "assignments",
    'E': "assignments",
    'M': "posts"
  };

  useEffect(() => {
    console.log(mode[props.post.tipo]);
    console.log(props.post.id_publicacion);
    if(props.post.tipo !== 'A'){
      db.collection(mode[props.post.tipo])?.doc(props.post.id_publicacion)?.collection("files")?.get().then((snap) => {
        
        let files = [];
        snap.forEach((doc) => {
          let newFile = {
            name: doc.data().name,
            downloadUrl: doc.data().downloadUrl,
          };
          files.push(newFile);
        });
        setCurrentFiles(files)
      });
    }
  }, [])

  return (
    <div align='center' className={classes.ventana}>
      <div className={classes.prin}>
        <label className={classes.tile}>{props.post.titulo}</label>
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
      <p align='left'>
        {props.post.descripcion}
      </p>
      <hr />
      {currentFiles.length > 0?  <></>: <p>No hay archivos</p> }

      {
        currentFiles.map( (file) => {
          return (<FileCard file={file}/>)
        })
      }

      <hr />
      <div align='left' style={{ "font-weight": "bold" }}>
        Comentarios
      </div>
      <hr />
      <div>No hay comentarios</div>
    </div>
  );
}

export default ViewResourceDialog;