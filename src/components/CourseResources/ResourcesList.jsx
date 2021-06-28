import React, { useState, useEffect } from "react";
import ResourceCard from "./ResourceCard";

import {
  getAllAnuncios,
  getAllMaterial,
  getAllTareas,
  getAllExamen,
} from "@utils/fetchData";

import { makeStyles } from "@material-ui/styles";
import { CircularProgress } from "@material-ui/core";
import { useHistory, useRouteMatch } from "react-router-dom";
import Loading from "@common/Loading";
import NotFound from "@common/NotFound";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    overflowY: "hidden",
  },
}));

const ResourcesList = (props) => {
  const classes = useStyles();

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
      console.log(res);
      setPosts(res.reverse());
      setLoading(false);
    };
    fetchAnuncios();
  }, [props.kind, id]);

  return (
    <div className={classes.wrapper}>
      {loading ? (
        <Loading />
      ) : (
        posts?.map((elem) => {
          return <ResourceCard kind={props.kind} post={elem} />;
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
