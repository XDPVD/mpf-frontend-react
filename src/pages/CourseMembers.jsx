import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MembersList from "../components/MembersList";
import GroupCard from "../components/GroupCard";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import AddMemberDialog from "../components/AddMemberDialog";

const students = [
  {
    name: "Salcedo Alfaro Jhon Marco",
    photo:
      "https://images.unsplash.com/photo-1617331008613-9479b434b1e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "Salcedo Alfaro Jhon Marco",
    photo:
      "https://images.unsplash.com/photo-1617331008613-9479b434b1e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
];

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Grid container>
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
                <Typography variant="h4" display="inline">
                  {tipo}
                </Typography>
                {tipo === "Delegados" && (
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

              <MembersList members={students} />
            </>
          ))}
          <div className={classes.addMemberWrapper}>
            <Button
              variant="contained"
              color="primary"
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
            <Typography variant="h4">Grupos</Typography>
          </div>
          <Grid container>
            <Grid item xs={12} md={6}>
              <GroupCard members={students} />
            </Grid>
            <Grid item xs={12} md={6}>
              <GroupCard members={students} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <AddMemberDialog open={open} setOpen={setOpen} />
    </>
  );
}

export default CourseMembers;
