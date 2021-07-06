import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";
import useUserInfo from "src/base/utils/useUserInfo";
import { useState } from "react";
import { endP } from "src/base/settings/config";
import { postData } from "src/base/utils/postData";
import { fetchData } from "@utils/fetchData";
import CircularProgress from "@material-ui/core/CircularProgress";

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

export default function AddUserDialog({ open, setOpen }) {
  const { id } = useParams();

  const [code, setCode] = useState("");
  const [mail, setMail] = useState({ email: "" });
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    fetchData(`/course/${id}/code`, setCode);
  }, []);

  useEffect(() => {
    setIsFetching(false);
  }, [code]);

  async function handleClick() {
    setIsFetching(true);
    await fetchData(`/course/${id}/new_code`, setCode);
  }

  const handleMailChange = (event) => {
    setMail({ ...mail, [event.target.name]: event.target.value });
  };

  const [, headers] = useUserInfo();
  async function addMail(event) {
    event.preventDefault();

    await postData(endP({ courseId: id }).enrollCourseByMail, mail, headers);
  }

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
        maxWidth='md'
      >
        <DialogTitle id='form-dialog-title'>
          Añadir nuevo miembro
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
          <Grid container>
            <Grid
              style={{
                padding: "0 10px",
              }}
              item
              xs={12}
              sm={6}
            >
              <Typography variant='subtitle1'>Añadir por correo</Typography>
              <form onSubmit={addMail}>
                <TextField
                  name='email'
                  margin='dense'
                  type='email'
                  label='Correo electrónico'
                  placeholder='example@example.com'
                  fullWidth
                  onChange={handleMailChange}
                  autoFocus
                />

                <Typography variant='body2'>
                  Ingrese el correo electrónico para añadir al usuario.
                </Typography>
                <Button
                  type='submit'
                  className={classes.send}
                  variant='contained'
                  color='secondary'
                >
                  Añadir
                </Button>
              </form>
            </Grid>
            <Grid
              style={{
                padding: "0 10px",
              }}
              item
              xs={12}
              sm={6}
            >
              <Typography variant='subtitle1'>Código de acceso</Typography>
              <div className={classes.codeWrapper}>
                <Button
                  disabled={isFetching ? true : false}
                  className={classes.codeButton}
                  variant='contained'
                  color='secondary'
                  onClick={handleClick}
                >
                  {isFetching ? (
                    <CircularProgress size={25} />
                  ) : (
                    <span>Generar</span>
                  )}
                </Button>
                <input
                  value={code}
                  type='text'
                  disabled
                  className={classes.codeText}
                />
              </div>
              <Typography variant='body2'>
                Comparte el código con otros usuarios para que puedan unirse a
                tu clase. Si generas un nuevo código, el anterior dejará de
                tener validez.
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
