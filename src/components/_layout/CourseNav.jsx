import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { useLayoutEffect, useState } from "react";
import { useStyles } from "./_styles";
import Button from "@material-ui/core/Button";

import useRedirectUrl from "@utils/useRedirectUrl";
import { endP } from "@settings/config";
import AddResourceDialog from "@components/CourseResources/AddResourceDialog";
import { useEffect } from "react";
import { fetchData } from "@utils/fetchData";
import useUserInfo from "@utils/useUserInfo";

function CourseNav({ courseId }) {
  const classes = useStyles();

  const [, redirectTo] = useRedirectUrl();

  const [, , isCreator] = useUserInfo();

  const nav = ["Anuncios", "Materiales", "Tareas", "Exámenes", "Personas"];
  const routes = ["dash", "materiales", "tareas", "examenes", "personas"];
  const [selectedTab, setSelectedTab] = useState(0);
  const [openAddMaterial, setOpenAddMaterial] = useState(false);
  const [course, setCourse] = useState({});

  const [hiddenButton, setHiddenButton] = useState(true);

  useEffect(() => {
    fetchData(endP({ courseId }).getCourse, setCourse);
  }, [courseId]);

  const handleClickOpenAddMaterial = () => {
    setOpenAddMaterial(true);
  };

  const handleChange = (event, newValue) => {
    redirectTo("/cursos/" + courseId + "/" + routes[newValue]);
    setSelectedTab(newValue);
  };
  
  useLayoutEffect(() => {
    isCreator(courseId).then((res) => setHiddenButton(!res));
  }, [isCreator, courseId]);

  return (
    <>
      <Typography className={classes.courseTitle} variant='h3'>
        {course.name}
      </Typography>
      <Tabs value={selectedTab} onChange={handleChange}>
        {nav.map((item) => (
          <Tab key={item} disableRipple label={item} className={classes.tab} />
        ))}
        <Button
          hidden={hiddenButton}
          className={classes.buttonAddMaterial}
          onClick={handleClickOpenAddMaterial}
          variant='contained'
        >
          <span style={{ "fontSize": "20px", marginRight: "5px" }}>+</span>{" "}
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
