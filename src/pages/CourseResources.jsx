import React from "react";

import ResourcesList from "@components/CourseResources/ResourcesList";
import { useParams } from "react-router";

function CourseResources(props) {
  const { id: id_course  } = useParams();
  console.log("ID_COURSE: ",id_course);
  return (
    <>
      <ResourcesList kind={props.kind} id_course={id_course} />
    </>
  );
}

export default CourseResources;
