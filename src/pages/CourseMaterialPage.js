import React from "react";

import ListaPublicaciones from "../components/ListaPublicaciones";

function CourseMaterialPage(props) {
  return (
    <>
      <ListaPublicaciones modo={props.modo} />
    </>
  );
}

export default CourseMaterialPage;
