import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import { useStyles } from "./_styles";
import Button from "@material-ui/core/Button";

import useRedirectUrl from "@utils/useRedirectUrl";
import { endP } from "@settings/config";
import AddResourceDialog from "@components/CourseResources/AddResourceDialog";
import { useEffect } from "react";
import { fetchData } from "@utils/fetchData";
import { useUser } from "src/base/context/userContext";
import { useLocation, useParams } from "react-router-dom";

function CourseNav({ courseId }) {
  const classes = useStyles();

  const [, redirectTo] = useRedirectUrl();

  const currentRoute = useLocation().pathname.split('/')[3];

  

  const actions = useUser()[1];

  const nav = ["Anuncios", "Materiales", "Tareas", "Exámenes", "Personas"];
  const routes = ["dash", "materiales", "tareas", "examenes", "personas"];
  const [selectedTab, setSelectedTab] = useState("dash");
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
  
  useEffect(() => {
    actions.isCreator(courseId).then((res) => setHiddenButton(!res));
  }, [actions, courseId]);

  return (
    <>
      <Typography className={classes.courseTitle} variant='h3'>
        {course.name}
      </Typography>
      <div className={classes.options}>
        <Tabs  value={selectedTab} onChange={handleChange} >
          {nav.map((item) => (
            <Tab key={item} disableRipple label={item} className={classes.tab} />
          ))}
        </Tabs>
        <Button
            hidden={hiddenButton}
            className={classes.buttonAddMaterial}
            onClick={handleClickOpenAddMaterial}
          >
            <span style={{ "fontSize": "20px", marginRight: "5px" }}>+</span>{" "}
            Nuevo Recurso
        </Button>
      </div>
      <AddResourceDialog
        openAdd={openAddMaterial}
        setOpenAdd={setOpenAddMaterial}
      />
    </>
  );
}

export default CourseNav;
