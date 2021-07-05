import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  closeIcon: {
    position: "absolute",
    right: 3,
    top: 8,
  },
}));

function FormDialog({ open, setOpen, size, title, children }) {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        onClose={() => {
          setOpen(false);
        }}
        open={open}
        aria-labelledby='form-dialog-title'
        fullWidth
        maxWidth={size}
      >
        <DialogTitle id='form-dialog-title'>
          {title}
          <IconButton
            className={classes.closeIcon}
            aria-label='close'
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent className={classes.dialog} dividers>
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FormDialog;