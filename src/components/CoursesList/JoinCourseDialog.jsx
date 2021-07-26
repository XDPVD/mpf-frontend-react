import { useStyles } from "./_styles";
import FormDialog from "@common/FormDialog";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { postData } from "@utils/postData";
import Button from "@material-ui/core/Button";
import { endP } from "@settings/config";
import { useUser } from "src/base/context/userContext";

function JoinCourseDialog({ open, setOpen, setOpenSB }) {
  let code = "";

  const actions = useUser()[1];
  const classes = useStyles();

  const handleCodeChange = (event) => {
    code = event.target.value;
    console.log(code);
  };

  async function joinCourse(event) {
    event.preventDefault();

    setOpen(false);
    await postData(endP({ code: code }).enrollMeByCode, {}, actions.getHeader());
    setOpenSB(true);
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
            placeholder='1AABBCC'
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
            className={classes.btnCreate}
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
