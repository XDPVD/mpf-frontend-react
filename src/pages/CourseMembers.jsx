import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MembersList from "../components/MembersList";
import GroupCard from "../components/GroupCard";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import AddIcon from "@material-ui/icons/Add";
import { useState, useEffect } from "react";
import AddMemberDialog from "../components/AddMemberDialog";
import axios from "axios";

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
  addMemberWrapper: {
    display: "flex",
    justifyContent: "center",
  },
});

function CourseMembers() {
  const tipoMiembro = ["Profesores", "Delegados", "Alumnos"];
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [posts, setPosts] = useState();

  const [id, setId] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const request = axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
          const responsePosts = res.data;
          setPosts(responsePosts);
        })
        .catch((err) => {
          console.log(err);
        });
      return request;
    }
    fetchData();
  }, [id]);

  const handleClickOpen = () => {
    setOpen(true);
  };

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
                    className={classes.button}
                    disableRipple
                    variant='text'
                    endIcon={<AddIcon />}
                  >
                    Añadir
                  </Button>
                )}
              </div>

              {tipo === "Alumnos" && <MembersList />}
            </>
          ))}
          <div className={classes.addMemberWrapper}>
            <Button
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
              <GroupCard url='https://jsonplaceholder.typicode.com/users' />
            </Grid>
            <Grid item xs={12} md={6}>
              <GroupCard url='https://jsonplaceholder.typicode.com/users' />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <AddMemberDialog open={open} setOpen={setOpen} />
    </>
  );
}

export default CourseMembers;
