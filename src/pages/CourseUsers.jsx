import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import UsersList from "@components/CourseUsers/UsersList";
import GroupCard from "@components/CourseUsers/GroupCard";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import AddIcon from "@material-ui/icons/Add";
import { useEffect, useState } from "react";
import AddUserDialog from "@components/CourseUsers/AddUserDialog";
import { endP } from "@settings/config";
import { fetchingData } from "@utils/fetchData";
import Loading from "@common/Loading";
import useUserInfo from "@utils/useUserInfo";

const useStyles = makeStyles({
  button: {
    position: "absolute",
    right: 0,
    borderRadius: "5px",
    padding: "6px 16px",
  },
  wrapper: {
    padding: "15px 12px",
  },
  addUserWrapper: {
    display: "flex",
    justifyContent: "center",
  },
});

function CourseUsers({ courseId }) {
  const tipoMiembro = ["Profesor", "Delegados", "Alumnos"];
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  const [,,isCreator] = useUserInfo();
  const [hiddenButton, setHiddenButton] = useState(false);
  useEffect(() => {
    isCreator(courseId).then((res)=> setHiddenButton(!res));
  },[isCreator, courseId])


  let users;

  useEffect(() => {
    async function getData() {
      const request = await fetchingData(
        endP( {courseId} ).getCourse,
        setCourse,
        setIsFetching
      );
      return request;
    }
    getData();
  }, []);
  


  const handleClickOpen = () => {
    setOpen(true);
  };

  function mostrarUsuarios(tipo) {
    users = course.inscriptions.map((user) => user.user);
    const teacher = new Array(course.creator);
    const delegate = new Array(course.delegate);
    let lista;

    console.log("users");
    if (tipo === "Profesor") {
      lista = <UsersList courseId={courseId} users={teacher} />;
    } else if (tipo === "Delegados") {
      lista = <UsersList courseId={courseId} users={delegate} />;
    } else {
      lista = <UsersList courseId={courseId} users={users} />;
    }
    return lista;
  }

  return (
    <>
      <Grid style={{ overflowY: "auto" }} container>
        {/*LISTA DE MIEMBROS AGRUPADOS POR TIPO************************/}
        <Grid item className={classes.wrapper} xs={12} sm={6} md={5}>
          {tipoMiembro.map((tipo) => (
            <>
              <div
                style={{
                  borderBottom: "2px solid #ddd",
                  padding: "5px 10px",
                  position: "relative",
                }}
              >
                <Typography variant='h4' display='inline'>
                  {tipo}
                </Typography>
                {tipo === "Delegados" && (
                  <Button
                    hidden={hiddenButton}
                    className={classes.button}
                    disableRipple
                    variant='text'
                    endIcon={<AddIcon />}
                  >
                    Añadir
                  </Button>
                )}
              </div>

              {isFetching ? <Loading /> : mostrarUsuarios(tipo)}
            </>
          ))}
          <div className={classes.addUserWrapper}>
            <Button
              hidden={hiddenButton}
              variant='contained'
              color='primary'
              onClick={handleClickOpen}
            >
              Añadir miembros
            </Button>
          </div>
        </Grid>

        {/*LISTA DE GRUPOS************************/}
        <Grid item className={classes.wrapper} xs={12} sm={6} md={7}>
          <div
            style={{
              borderBottom: "2px solid #ddd",
              padding: "5px 10px",
            }}
          >
            <Typography variant='h4'>Grupos</Typography>
          </div>
          <Grid container>
            <Grid item xs={12} md={6}>
              {isFetching ? <Loading /> : <GroupCard users={users} />}
            </Grid>
            <Grid item xs={12} md={6}>
              {isFetching ? <Loading /> : <GroupCard users={users} />}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <AddUserDialog open={open} setOpen={setOpen} courseId={courseId} />
    </>
  );
}

export default CourseUsers;
