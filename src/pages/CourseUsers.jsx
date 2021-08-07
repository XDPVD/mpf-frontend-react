import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import UsersList from '@components/CourseUsers/UsersList';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';
import { useEffect, useState } from 'react';
import AddUserDialog from '@components/CourseUsers/AddUserDialog';
import { endP } from '@settings/config';
import { fetchingData } from '@utils/fetchData';
import { postData } from '@utils/postData';
import { putData } from '@utils/putData';
import Loading from '@common/Loading';
import { useUser } from '@context/userContext';
import { Divider } from '@material-ui/core';
import { checkNull } from '@utils/checkNull';
import GroupCard from '@components/CourseUsers/GroupCard';

const useStyles = makeStyles({
  button: {
    position: 'absolute',
    right: 0,
    borderRadius: '5px',
    padding: '6px 16px',
  },
  wrapper: {
    padding: '15px 12px',
  },
  addUserWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
});

function CourseUsers({ courseId }) {
  const tipoMiembro = ['Profesor', 'Delegados', 'Alumnos'];
  const classes = useStyles();
  // Constantes de estado
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState({});
  const [groups, setGroups] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const actions = useUser()[1];
  const [adminMode, setAdminMode] = useState(false);
  useEffect(() => {
    actions.isCreator(courseId).then((res) => {
      setAdminMode(res);
    });
  }, [actions, courseId]);

  let users;

  useEffect(() => {
    // Funciones para llamar a los cursos y grupos
    async function getData() {
      await fetchingData(
        endP({ courseId }).getCourse,
        setCourse,
        setIsFetching
      );
      console.log(course);
      await fetchingData(
        endP({ courseId }).getGroups,
        setGroups,
        setIsFetching
      );
    }
    getData();
  }, [courseId, open]);

  const reloadCourseUsers = () => {
    setIsFetching(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  // Función crear grupo
  async function addNewGroup(event) {
    event.preventDefault();
    await postData(endP({ courseId }).createGroup);
  }

  // Función que nos permite bloquear TODOS los grupos
  async function lockAllGroups(event) {
    event.preventDefault();
    await putData(endP({ courseId }).lockAllGroups);
  }

  // Mostramos usuarios por tipo
  function mostrarUsuarios(tipo) {
    const inscriptions = course.inscriptions;
    let lista = null;

    users = inscriptions?.map((inscription) => inscription.user);
    const teacher = new Array(course.creator);
    const delegate = new Array(course.delegate);

    if (tipo === 'Profesor') {
      lista = <UsersList courseId={courseId} users={teacher} />;
    } else if (tipo === 'Delegados') {
      lista = <UsersList courseId={courseId} users={delegate} />;
    } else {
      lista = <UsersList courseId={courseId} users={users} />;
    }

    return lista;
  }

  return (
    <>
      <Grid style={{ overflowY: 'auto' }} container>
        {/*LISTA DE MIEMBROS AGRUPADOS POR TIPO************************/}
        <Grid item className={classes.wrapper} xs={12} sm={6} md={5}>
          {tipoMiembro.map((tipo) => (
            <>
              <div
                style={{
                  borderBottom: '2px solid #ddd',
                  padding: '5px 10px',
                  position: 'relative',
                }}
              >
                <Typography variant="h4" display="inline">
                  {tipo}
                </Typography>
                {tipo === 'Delegados' && adminMode && (
                  <Button
                    className={classes.button}
                    disableRipple
                    variant="text"
                    endIcon={<AddIcon />}
                  >
                    Añadir
                  </Button>
                )}
              </div>

              {isFetching ? <Loading /> : mostrarUsuarios(tipo)}
            </>
          ))}
          {adminMode && (
            <div className={classes.addUserWrapper}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
              >
                Añadir miembros
              </Button>
              <Divider />
              <Button variant="contained" color="primary" onClick={addNewGroup}>
                Añadir grupo
              </Button>
            </div>
          )}
        </Grid>

        {/*LISTA DE GRUPOS************************/}
        <Grid item className={classes.wrapper} xs={12} sm={6} md={7}>
          <div
            style={{
              borderBottom: '2px solid #ddd',
              padding: '5px 10px',
            }}
          >
            <Typography variant="h4">Grupos</Typography>
            {adminMode && (
              <Button
                backgroundColor="#000000"
                variant="contained"
                color="secondary"
                onClick={lockAllGroups}
              >
                Bloquear todos los grupos
              </Button>
            )}
          </div>
          <Grid container>
            {isFetching ? (
              <Loading />
            ) : (
              // Ordenamos las inscripciones en un grupo
              !checkNull(groups) &&
              groups?.map((group) => (
                <Grid item xs={12} md={6}>
                  <GroupCard
                    users={group.inscriptions}
                    group={group}
                    isAdmin={adminMode}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
      </Grid>

      <AddUserDialog
        reloadFunc={reloadCourseUsers}
        open={open}
        setOpen={setOpen}
        course={course}
      />
    </>
  );
}

export default CourseUsers;
