import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import FileTray from "@components/FileTray";

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
    width: "50%",
    height: "60%",
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

  const assignment_id = "A-2W3R2";

  return (
    <div align='center' className={classes.ventana}>
      <div className={classes.prin}>
        <label className={classes.tile}>
          {props.post.id_publicacion} - Documentos entregados
        </label>
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
      <FileTray
        target_id={assignment_id}
        mode={"a"}
        blockAllActions={props.maxDate < new Date()}
      />
    </div>
  );
}

export default ViewResourceDialog;
