import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tab: {
    textTransform: "none",
    minWidth: "80px",
    margin: "0px 5px",
  },
}));

function CourseNav() {
  const classes = useStyles();
  const nav = ["Dashboard", "Clases", "Tareas", "Exámenes", "Personas"];
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <>
      <Typography variant="h3">Métodos Formales para Pruebas</Typography>
      <Tabs value={selectedTab} onChange={handleChange}>
        {nav.map((item) => (
          <Tab disableRipple label={item} className={classes.tab} />
        ))}
      </Tabs>
    </>
  );
}

export default CourseNav;
