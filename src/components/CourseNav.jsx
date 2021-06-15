import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import styled from "styled-components";

const MyTab = styled(Tab)`
  text-transform: none;
  min-width: 80px;
  margin: 0 5px;
`;

function CourseNav() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <>
      <Typography variant="h4">Métodos Formales para Pruebas</Typography>
      <Tabs value={selectedTab} onChange={handleChange}>
        <MyTab label="Dashboard" />
        <MyTab label="Clases" />
        <MyTab label="Tareas" />
        <MyTab label="Exámenes" />
        <MyTab label="Personas" />
      </Tabs>
    </>
  );
}

export default CourseNav;
