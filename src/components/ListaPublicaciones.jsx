import React from "react";

import PublicacionCard from "./PublicacionCard";

import styled from "styled-components";

import { publicacion_data } from "../config/dataTest";

const ListaPublicaciones = (props) => {
  const data = publicacion_data;

  return (
    <ContainerPubCard>
      {data.map((elem) => {
        return <PublicacionCard modo={props.modo} publi_obj={elem} />;
      })}
    </ContainerPubCard>
  );
};

export default ListaPublicaciones;

const ContainerPubCard = styled.div`
  overflow-y: scroll;
`;
