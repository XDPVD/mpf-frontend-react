import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormDialog from "@common/FormDialog";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { postData } from "@utils/postData";
import useUserInfo from "@utils/useUserInfo";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  btn: {
    float: "right",
    padding: [[8, 30]],
  },
}));

function JoinCourseDialog({ open, setOpen }) {
  const [code, setCode] = useState("");

  const [, headers] = useUserInfo();
  const classes = useStyles();

  const handleCodeChange = (event) => {
    setCode(event.target.value);
    console.log(code);
  };

  async function joinCourse(event) {
    event.preventDefault();

    await postData("", code, headers);
  }

  return (
    <div>
      <FormDialog
        title='Unirse a un curso'
        size='sm'
        open={open}
        setOpen={setOpen}
      >
        <form onSubmit={joinCourse}>
          <Typography>
            Ingrese el código del curso al que desea inscribirse.
          </Typography>
          <TextField
            name='course-code'
            margin='dense'
            type='text'
            label='Código'
            placeholder='ASD-SDAS-SADA'
            fullWidth
            onChange={handleCodeChange}
            autoFocus
          />
          <Typography variant='subtitle2'>
            Nota: Comúniquese con su docente si el código ya no tiene validez.
          </Typography>
          <Button
            type='submit'
            variant='contained'
            size='small'
            className={classes.btn}
            color='primary'
          >
            Unirse
          </Button>
        </form>
      </FormDialog>
    </div>
  );
}

export default JoinCourseDialog;
