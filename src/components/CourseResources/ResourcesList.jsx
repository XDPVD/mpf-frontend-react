import React, {useState, useEffect} from "react";
import ResourceCard from "./ResourceCard";

import { 
  getAllAnuncios, getAllMaterial, getAllTareas, getAllExamen 
} from "@utils/getPostsByType";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    overflowY: "scroll",
  },
}));

const ResourcesList = (props) => {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);

  const fetchAnuncios = async () => {
    let res
    switch(props.kind){
      case 'A':
        res = await getAllAnuncios();
      break;
      case 'M':
        res = await getAllMaterial();

      break;
      case 'T':
        res = await getAllTareas();
      break;
      case 'E':
        res = await getAllExamen();
      break;
      default: break;
    }
    console.log(res);
    setPosts(res);
    
  }

  useEffect(() => {
    fetchAnuncios();
  }, [])

  return (
    <div className={classes.wrapper}>
      {posts?.map((elem) => {
        return <ResourceCard kind={props.kind} post={elem} />;
      })}
    </div>
  );
};

export default ResourcesList;
