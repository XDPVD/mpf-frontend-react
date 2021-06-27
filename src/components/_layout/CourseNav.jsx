import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";

import useRedirectUrl from "@utils/useRedirectUrl";
import AddResourceDialog from "@components/CourseResources/AddResourceDialog";

const useStyles = makeStyles((theme) => ({
  tab: {
    textTransform: "none",
    minWidth: "80px",
    margin: "0px 5px",
  },
  courseTitle: {
    marginLeft: "10px",
    padding: [[15, 0, 5, 0]],
  },
  buttonAddMaterial: {
    padding: [[5, 20]],
    height: "36px",
    position: "absolute",
    right: "0",
    top: "5px",
  },
}));

function CourseNav() {
  const classes = useStyles();

  const [, redirectTo] = useRedirectUrl();

  const nav = ["Dashboard", "Materiales", "Tareas", "Exámenes", "Personas"];
  const routes = ["dash", "materiales", "tareas", "examenes", "personas"];
  const [selectedTab, setSelectedTab] = useState(0);
  const [openAddMaterial, setOpenAddMaterial] = useState(false);

  const { courseId } = useParams();

  const handleClickOpenAddMaterial = () => {
    setOpenAddMaterial(true);
  };

  const handleChange = (event, newValue) => {
    redirectTo("/cursos/" + courseId + "/" + routes[newValue]);
    setSelectedTab(newValue);
  };
  return (
    <>
      <Typography className={classes.courseTitle} variant='h3'>
        Curso
      </Typography>
      <Tabs value={selectedTab} onChange={handleChange}>
        {nav.map((item) => (
          <Tab disableRipple label={item} className={classes.tab} />
        ))}
        <Button
          className={classes.buttonAddMaterial}
          onClick={handleClickOpenAddMaterial}
        >
          Nuevo Recurso
        </Button>
      </Tabs>
      <AddResourceDialog
        openAdd={openAddMaterial}
        setOpenAdd={setOpenAddMaterial}
        
      />
    </>
  );
}

export default CourseNav;
