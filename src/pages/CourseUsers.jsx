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
import { postData } from "@utils/postData";
import Loading from "@common/Loading";
import useUserInfo from "@utils/useUserInfo";
import { Divider } from "@material-ui/core";


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
  const tipoMiembro = [
    "Profesor", 
    "Delegados", 
    "Alumnos",
  ];
  const classes = useStyles();
  // Constantes de estado
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState({});
  const [groups, setGroups] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const [,,isCreator] = useUserInfo();
  const [hiddenButton, setHiddenButton] = useState(false);

  useEffect(() => {
    isCreator(courseId).then((res)=> setHiddenButton(!res));
  },[isCreator, courseId])

  let users;

  useEffect(() => {
    // Funciones para llamar a los cursos y grupos
    async function getData() {
      const requestCourses = await fetchingData(
        endP( {courseId} ).getCourse,
        setCourse,
        setIsFetching
      );

      const requestGroups = await fetchingData(
        endP( {courseId} ).getGroups,
        setGroups,
        setIsFetching
      );
      
      return requestCourses, requestGroups;
    }
    getData();
  }, []);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Función crear grupo
  async function addNewGroup(event) {
    event.preventDefault();
    await postData(endP({ courseId }).createGroup);
  }

  // Función que nos permite bloquear TODOS los grupos
  async function blockAllGroups(event) {
    event.preventDefault();
    await postData(endP({ courseId }).blockAllGroups);
  }

  // Mostramos usuarios por tipo
  function mostrarUsuarios(tipo) {
    const inscriptions = course.inscriptions
    let lista = null;
    
    users = inscriptions?.map(
      (inscription) => inscription.user
    );
    const teacher = new Array(course.creator);
    const delegate = new Array(course.delegate);

    if (tipo === "Profesor") {
      lista = <UsersList courseId={courseId} users={teacher} />;
    } else if (tipo === "Delegados") {
      lista = <UsersList courseId={courseId} users={delegate} />;
    } else {
      lista = <UsersList courseId={courseId} users={users} />;
    }
    
    return lista;
      
  }

  return <>
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
      { (isCreator)
          &&
            <div className={classes.addUserWrapper}>
              <Button
                hidden={hiddenButton}
                variant='contained'
                color='primary'
                onClick={handleClickOpen}
              >
                Añadir miembros
              </Button>
              <Divider />
              <Button
                hidden={hiddenButton}
                variant='contained'
                color='primary'
                onClick={addNewGroup}
              >
                Añadir grupo
              </Button>
            </div>
      }
      
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
        {(isCreator) 
          &&  <Button
                  hidden={hiddenButton}
                  backgroundColor='#000000'
                  variant='contained'
                  color='secondary'
                  onClick={blockAllGroups}
              >
                Bloquear todos los grupos
              </Button>
        }
      </div>
      <Grid container>
      { isFetching 
        ?
          <Loading />
        : // Ordenamos las inscripciones en un grupo
          groups?.map((group) => 
          <Grid item xs={12} md={6}>
            <GroupCard users={group.inscriptions} group={group} isAdmin={!hiddenButton} />
          </Grid>
          )
      }
      </Grid>
    </Grid>
  </Grid>

  <AddUserDialog open={open} setOpen={setOpen} courseId={courseId} />
  </>
}

export default CourseUsers;
