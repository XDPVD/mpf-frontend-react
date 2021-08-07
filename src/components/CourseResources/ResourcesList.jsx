import React, { useState, useEffect } from "react";
import ResourceCard from "./ResourceCard";

import {
  getAllAnuncios,
  getAllMaterial,
  getAllTareas,
  getAllExamen,
} from "@utils/fetchData";

import { useLocation, useRouteMatch } from "react-router-dom";
import Loading from "@common/Loading";
import NotFound from "@common/NotFound";

const ResourcesList = (props) => {
  const [posts, setPosts] = useState([]); // repace fetchData -> []

  const [loading, setLoading] = useState(true); // remove

  const { id } = useRouteMatch().params; // refactor useParams
  const currentRoute = useLocation().pathname.split('/')[3];

  

  return (
    <div style={{ overflowY: "hidden" }}>
      {/* {loading ? (
        <Loading />
      ) : (
        posts?.map((elem) => {
          return <ResourceCard key={elem.id} kind={props.kind} post={elem} />;
        })
      )}
      {!loading && posts.length === 0 ? (
        <NotFound>No hay publicaciones para mostrar</NotFound>
      ) : (
        <></>
      )} */}
    </div>
  );
};

export default ResourcesList;
