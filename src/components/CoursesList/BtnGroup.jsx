import React from "react";
import Button from "@material-ui/core/Button";

import { useStyles } from "./_styles";
import AddIcon from "@material-ui/icons/Add";

export default function BtnGroup(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.btnGroupWrapper}>
        <Button className={classes.btnGroup} size='small'>
          Unirse
        </Button>
        <Button
          className={classes.btnGroup}
          onClick={props.openModal}
          size='small'
        >
          <AddIcon /> Crear
        </Button>
      </div>
    </>
  );
}
