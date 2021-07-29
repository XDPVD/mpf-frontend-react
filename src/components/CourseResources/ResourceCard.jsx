import React, { useState } from "react";

import { Card, CardActions, Typography } from "@material-ui/core";
import { useStyles } from "./_styles";
import { Button } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";

import ViewResourceDialog from "@components/CourseResources/ViewResourceDialog";

import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";

import AttachFileIcon from "@material-ui/icons/AttachFile";

import DescriptionIcon from "@material-ui/icons/Description";

import AssignmentIcon from "@material-ui/icons/Assignment";

import ViewAssignmentDialog from "@components/CourseResources/ViewAssignmentDialog";

function ResourceCard(props) {
  const classes = useStyles();

  const [modalView, setModalView] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  let dateMax =
    props.kind === "T" || props.kind === "E"
      ? new Date(
          props.post.evaluation.date_max + " " + props.post.evaluation.time_max
        )
      : undefined;

  const closeModalView = () => {
    setModalView(false);
  };

  const closeModalAssignment = () => {
    setModalEdit(false);
  };

  const iconsSwitch = {
    A: <FormatAlignJustifyIcon fontSize='large' />,
    M: <AttachFileIcon fontSize='large' />,
    E: <DescriptionIcon fontSize='large' />,
    T: <AssignmentIcon fontSize='large' />,
  };

  return (
    <Card className={classes.prin}>
      <div className={classes.resourceContent}>
        <div className={classes.desc}>
          {iconsSwitch[props.kind]}
          <div component='div'>
            <Typography className={classes.title}>
              {props.post.title}
            </Typography>
            <Typography variant='caption' className={classes.fecha}>
              Fecha de publicacion:{" "}
              {new Date(props.post.date + " " + props.post.time).toLocaleString(
                "es"
              )}
            </Typography>
          </div>
        </div>
      </div>
      {props.kind === "T" || props.kind === "E" ? (
        <div className={classes.fechaMax}>
          <p>Fecha Max.: {dateMax.toLocaleString("es")}</p>
        </div>
      ) : (
        <></>
      )}
      <CardActions>
        {props.kind === "T" || props.kind === "E" ? (
          dateMax >= new Date() ? (
            <Button
              className={classes.btnNota}
              size='medium'
              variant='contained'
              disableElevation
              onClick={() => {
                setModalEdit(true);
              }}
            >
              Subir
            </Button>
          ) : (
            <Button
              className={classes.btnNota}
              size='medium'
              variant='contained'
              color='primary'
              disableElevation
              onClick={() => {
                setModalEdit(true);
              }}
            >
              -- / {props.post.evaluation.score_max}
            </Button>
          )
        ) : (
          <></>
        )}
        <Button
          className={classes.btn}
          size='large'
          variant='contained'
          color='primary'
          onClick={() => {
            setModalView(true);
          }}
        >
          VER
        </Button>
      </CardActions>
      {modalView || modalEdit ? (
        <Backdrop className={classes.backdrop} open={modalView || modalEdit} />
      ) : (
        <></>
      )}
      {modalView ? (
        <>
          <ViewResourceDialog
            closeCallback={closeModalView}
            post={props.post}
          />
        </>
      ) : modalEdit ? (
        <ViewAssignmentDialog
          closeCallback={closeModalAssignment}
          post={props.post}
          maxDate={dateMax}
        />
      ) : (
        <></>
      )}
    </Card>
  );
}

export default ResourceCard;
