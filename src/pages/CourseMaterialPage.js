<<<<<<< HEAD
import React from "react";
import PublicacionCard from "../components/PublicacionCard";
import Container from "@material-ui/core/Container";

function CourseMaterialPage() {
  return (
    <>
      <Container>
        <PublicacionCard />
      </Container>
    </>
  );
=======
import React from 'react'

import ListaPublicaciones from "../components/ListaPublicaciones";

function CourseMaterialPage(props) {
    return (
        <>
            <ListaPublicaciones modo={props.modo} />
        </>
    )
>>>>>>> 7ced3ca8b6655eda7971561a1706674166e0213b
}

export default CourseMaterialPage;
