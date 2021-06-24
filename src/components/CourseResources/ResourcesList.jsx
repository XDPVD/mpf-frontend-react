import React from "react";
import ResourceCard from "./ResourceCard";
import { publicacion_data } from "@settings/dataTest";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    overflowY: "scroll",
  },
}));

const ResourcesList = (props) => {
  const classes = useStyles();
  const data = publicacion_data;

  return (
    <div className={classes.wrapper}>
      {data.map((elem) => {
        return <ResourceCard modo={props.modo} publi_obj={elem} />;
      })}
    </div>
  );
};

export default ResourcesList;
