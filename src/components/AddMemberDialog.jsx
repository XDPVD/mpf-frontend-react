import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  codeButton: {
    borderRadius: "6px 0 0 6px",
    padding: [[6, 15]],
  },
  codeText: {
    display: "inline",
    width: "100%",
    margin: 0,
    outline: "none",
    boxShadow: "none",
    border: "1px solid #c5c5c5",
    borderRadius: "0 5px 5px 0",
    paddingLeft: 10,
    "&:focus": {
      borderColor: "#2ab426",
      outline: "none",
      boxShadow: "none",
    },
    "&:disabled": {
      backgroundColor: "#fff",
    },
  },
  closeIcon: {
    position: "absolute",
    right: 3,
    top: 8,
  },
  codeWrapper: {
    marginTop: 15,
    marginBottom: 15,
    display: "flex",
  },
  dialog: {
    padding: "10px 25px 40px 25px",
  },
  send: {
    padding: [[5, 20]],
    margin: [[5, 0]],
    borderRadius: 7,
  },
});

export default function FormDialog({ open, setOpen }) {
  const classes = useStyles();
  return (
    <div>
      <Dialog
        onClose={() => {
          setOpen(false);
        }}
        open={open}
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth="md"
      >
        <DialogTitle id="form-dialog-title">
          Añadir nuevo miembro
          <IconButton
            className={classes.closeIcon}
            aria-label="close"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent className={classes.dialog} dividers>
          <Grid container>
            <Grid
              style={{
                padding: "0 10px",
              }}
              item
              xs={12}
              sm={6}
            >
              <Typography variant="subtitle1">Añadir por invitación</Typography>
              <form action="">
                <TextField
                  margin="dense"
                  type="email"
                  label="Correo electrónico"
                  placeholder="example@example.com"
                  fullWidth
                  autoFocus
                />
              </form>
              <Typography variant="body2">
                Ingrese el correo electrónico para enviar una invitación al
                usuario.
              </Typography>
              <Button
                className={classes.send}
                variant="contained"
                color="secondary"
              >
                Enviar
              </Button>
            </Grid>
            <Grid
              style={{
                padding: "0 10px",
              }}
              item
              xs={12}
              sm={6}
            >
              <Typography variant="subtitle1">Código de acceso</Typography>
              <div className={classes.codeWrapper}>
                <Button
                  className={classes.codeButton}
                  variant="contained"
                  color="secondary"
                >
                  Generar
                </Button>
                <input
                  value="ASDSAX"
                  type="text"
                  disabled
                  className={classes.codeText}
                />
              </div>
              <Typography variant="body2">
                Con el código otros usuarios pueden unirse a tu clase. Si
                generas un nuevo código, el anterior dejará de tener validez.
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
