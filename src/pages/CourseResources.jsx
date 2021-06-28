import React,{useEffect} from "react";

import ResourcesList from "@components/CourseResources/ResourcesList";
import { useParams } from "react-router";
import {useCookies } from 'react-cookie';

function CourseResources(props) {
  const { id: id_course  } = useParams();
  const [userToken, setUserToken] = useCookies(['userToken']);
  
  useEffect(() => {
    console.log(userToken);
  }, [])
  return (
    <>
      <ResourcesList  kind={props.kind} id_course={id_course} />
    </>
  );
}

export default CourseResources;
