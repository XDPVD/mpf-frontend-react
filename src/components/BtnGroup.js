import React from "react";
import Button from "@material-ui/core/Button";

import {
    makeStyles
} from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        display: "flex",
        flexDirection: "row-reverse",
        margin: "5px 5px",
    },
    btn: {
        margin: "5px"
    },
}));

export default function BtnGroup(props) {
    const classes = useStyles();

    return (
        <>
      <div className={classes.root}>
        <Button
          className={classes.btn}
          variant="contained"
          size="small"
        >
          <AddIcon /> Unirse a una clase
        </Button>
        <Button
          className={classes.btn}
          onClick={props.openModal}
          variant="contained"
          size="small"
        >
          <AddIcon /> Crear clase
        </Button>
      </div>
    </>
    );
}