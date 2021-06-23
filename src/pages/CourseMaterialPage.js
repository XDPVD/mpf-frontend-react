import React from "react";

import ListaPublicaciones from "../components/ListaPublicaciones";
import { useParams } from "react-router";

function CourseMaterialPage(props) {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <ListaPublicaciones modo={props.modo} id={id} />
    </>
  );
}

export default CourseMaterialPage;
