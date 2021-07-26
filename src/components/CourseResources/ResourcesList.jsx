import React, { useState, useEffect } from "react";
import ResourceCard from "./ResourceCard";

import {
  getAllAnuncios,
  getAllMaterial,
  getAllTareas,
  getAllExamen,
} from "@utils/fetchData";

import { useRouteMatch } from "react-router-dom";
import Loading from "@common/Loading";
import NotFound from "@common/NotFound";

const ResourcesList = (props) => {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  const { id } = useRouteMatch().params;

  useEffect(() => {
    const fetchAnuncios = async () => {
      let res;
      console.log("Kind -> ", props.kind);
      switch (props.kind) {
        case "A":
          res = await getAllAnuncios(id);
          break;
        case "M":
          res = await getAllMaterial(id);
          break;
        case "T":
          res = await getAllTareas(id);
          break;
        case "E":
          res = await getAllExamen(id);
          break;
        default:
          break;
      }
      setPosts(res.reverse());
      setLoading(false);
    };
    fetchAnuncios();
  }, [props.kind, id]);

  return (
    <div style={{ overflowY: "hidden" }}>
      {loading ? (
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
      )}
    </div>
  );
};

export default ResourcesList;
