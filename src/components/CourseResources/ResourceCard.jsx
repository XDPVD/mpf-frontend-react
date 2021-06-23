import React, { useState } from "react";

import { Card, CardActions, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import ViewResourceDialog from "./ViewResourceDialog";

import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";

import AttachFileIcon from "@material-ui/icons/AttachFile";

import DescriptionIcon from "@material-ui/icons/Description";

import AssignmentIcon from "@material-ui/icons/Assignment";

const useStyles = makeStyles((theme) => ({
  fecha: {
    margin: "5px 0px 5px 10px",
  },
  prin: {
    display: "flex",
    margin: "16px 5px",
    border: "2px solid",
    borderRadius: "10px",
    padding: "8px",
    justifyContent: "space-between",
    height: "100px",
  },
  desc: {
    display: "flex",
    flexDirection: "flow",
    alignItems: "center",
  },
  tile: {
    fontSize: 36,
    margin: "0px",
    marginLeft: "10px",
  },
  cardContent: {
    display: "flex",
    alignContent: "center",
  },
  conten: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
}));

function ResourceCard(props) {
  const classes = useStyles();

  console.log("Renderizado");

  const [modal, setModal] = useState(false);

  const closeCallback = () => {
    setModal(false);
  };

  const iconsSwitch = {
    anuncio: <FormatAlignJustifyIcon fontSize='large' />,
    material: <AttachFileIcon fontSize='large' />,
    examen: <DescriptionIcon fontSize='large' />,
    tarea: <AssignmentIcon fontSize='large' />,
  };

  return (
    <Card className={classes.prin}>
      <div className={classes.conten}>
        <div className={classes.desc}>
          {iconsSwitch[props.modo]}
          <div component='div' classNam={classes.cardContent}>
            <Typography className={classes.tile}>
              {props.publi_obj.titulo}
            </Typography>
            <Typography variant='caption' className={classes.fecha}>
              {props.publi_obj.fecha_creacion}
            </Typography>
          </div>
          {props.modo === "tarea" || props.modo === "examen" ? (
            <div className={classes.fecha}>
              <p>Fecha Max.: </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <CardActions>
        {props.asignacion ? (
          <Button
            className={classes.btn}
            size='large'
            variant='contained'
            color='primary'
          >
            Nota: -- /100
          </Button>
        ) : (
          <></>
        )}
        <Button
          className={classes.btn}
          size='large'
          variant='contained'
          color='primary'
          onClick={() => {
            setModal(true);
          }}
        >
          VER
        </Button>
      </CardActions>
      {modal ? (
        <ViewResourceDialog closeCallback={closeCallback} pub_obj={null} />
      ) : (
        <></>
      )}
    </Card>
  );
}

export default ResourceCard;
