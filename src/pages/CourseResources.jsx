import React from "react";

import ResourcesList from "../components/CourseResources/ResourcesList";
import { useParams } from "react-router";

function CourseResources(props) {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <ResourcesList modo={props.modo} id={id} />
    </>
  );
}

export default CourseResources;
