import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import { useStyles } from "./_styles";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';

import useRedirectUrl from "@utils/useRedirectUrl";
import { endP } from "@settings/config";
import AddResourceDialog from "@components/CourseResources/AddResourceDialog";
import { useEffect } from "react";
import { fetchData } from "@utils/fetchData";
import { useUser } from "src/base/context/userContext";
import { useLocation, useParams } from "react-router-dom";

//mis imports
import EditCourseDialog from "./EditCourseDialog";

function CourseNav({ courseId }) {
  const classes = useStyles();

  const [, redirectTo] = useRedirectUrl();

  const currentRoute = useLocation().pathname.split('/')[3];

  

  const actions = useUser()[1];

  //le agregue aqui(inicio)
  const [,headers, isCreator] = useUserInfo();
  const nav = ["Anuncios", "Materiales", "Tareas", "Exámenes", "Personas"];
  const routes = ["dash", "materiales", "tareas", "examenes", "personas"];
  const [selectedTab, setSelectedTab] = useState("dash");
  const [openAddMaterial, setOpenAddMaterial] = useState(false);
  const [course, setCourse] = useState({});
  const [hiddenButton, setHiddenButton] = useState(false);
  //mi parte(fin)
  const [openEditCourse, setOpenEditCourse] = useState(false);
  const [hiddenButtonEditCourse, setHiddenButtonEditCourse] = useState(false);
  const [courseUpdated,setCourseUpdated]=useState(0);
  const editCourse=()=>{
    console.log("cuc"+courseUpdated)
    setCourseUpdated(courseUpdated+1);
  }
  const handleClickOpenEditCourse = () => {
    setOpenEditCourse(true);
  };
  const handleCloseOpenEditCourse = () => {
    setOpenEditCourse(false);
  };
  useEffect(() => {
    fetchData(endP({ courseId }).getCourse, setCourse);
  }, [courseUpdated]);
  
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
  //aqui le agregue el sethiddenbuttoneditcourse
  useEffect(() => {
    isCreator(courseId).then((res) => {
      setHiddenButton(!res);
      setHiddenButtonEditCourse(!res);
    });
  }, [isCreator, courseId]);
  //solo el grid es mio y el ultimo dialog
  return (
    <>
      <Grid container
            direction="row"
            alignItems="center" 
            spacing={2}>
        <Grid item >
        <Typography className={classes.courseTitle} variant='h3'>
          {course.name}
        </Typography>
        </Grid>
        <Grid item >
          <Button
            variant='contained'
            color='primary'
            hidden={hiddenButtonEditCourse}
            startIcon={<EditIcon />}
            onClick={handleClickOpenEditCourse}>
            Editar
          </Button>
        </Grid>
      </Grid>
      <Tabs value={selectedTab} onChange={handleChange}>
        {nav.map((item) => (
          <Tab disableRipple label={item} className={classes.tab} />
        ))}
        <Button
          hidden={hiddenButton}
          className={classes.buttonAddMaterial}
          onClick={handleClickOpenAddMaterial}
          variant='contained'
          color='#b2ff59'
        >
          <span style={{ "font-size": "20px", marginRight: "5px" }}>+</span>{" "}
          Nuevo Recurso
        </Button>
      </div>
      <AddResourceDialog
        openAdd={openAddMaterial}
        setOpenAdd={setOpenAddMaterial}
      />
      <EditCourseDialog courseId={courseId} courseUpdated={courseUpdated} setCourseUpdated={setCourseUpdated} openEditCourse={openEditCourse} onClose={handleCloseOpenEditCourse} headers={headers} />
      
    </>
  );
}

export default CourseNav;
