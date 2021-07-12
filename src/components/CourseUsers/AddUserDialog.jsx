import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./_styles";
import { useParams } from "react-router-dom";
import useUserInfo from "@utils/useUserInfo";
import { useState } from "react";
import { endP } from "@settings/config";
import { postData } from "@utils/postData";
import { fetchData } from "@utils/fetchData";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormDialog from "@common/FormDialog";

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

    await postData(
      endP({ courseId: id, email: mail.email }).enrollCourseByMail,
      {},
      headers
    );
  }

  const classes = useStyles();
  return (
    <>
      <FormDialog
        title='Añadir nuevo alumno'
        size='md'
        open={open}
        setOpen={setOpen}
      >
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
              Comparte el código con otros usuarios para que puedan unirse a tu
              clase. Si generas un nuevo código, el anterior dejará de tener
              validez.
            </Typography>
          </Grid>
        </Grid>
      </FormDialog>
    </>
  );
}
