import React from "react";

import ResourcesList from "@components/CourseResources/ResourcesList";
import { useParams } from "react-router";


function CourseResources(props) {
  const { id: id_course } = useParams();

  return (
    <>
      <ResourcesList kind={props.kind} id_course={id_course} />
    </>
  );
}

export default CourseResources;
