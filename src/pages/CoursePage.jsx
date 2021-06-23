import { Route, useParams, useRouteMatch } from "react-router-dom";
import { useEffect } from "react";

import * as config from "../config/config";
import CourseMaterialPage from "./CourseMaterialPage";
import CourseMembers from "./CourseMembers";
import CourseNav from "../components/CourseNav";

function CoursePage() {
  const { url } = useRouteMatch();

  return (
    <>
      <CourseNav />
      
      <Route exact path={url+config.courseUrls.dashboard}>
        <CourseMaterialPage modo="anuncio"/>
      </Route>

      <Route exact path={url + config.courseUrls.material}>
        <CourseMaterialPage modo='material' />
      </Route>

      <Route exact path={url + config.courseUrls.tareas}>
        <CourseMaterialPage modo='tarea' />
      </Route>

      <Route exact path={url+config.courseUrls.examenes}>
        <CourseMaterialPage modo="examen"/>
      </Route>

      <Route exact path={url + config.courseUrls.personas}>
        <CourseMembers />
      </Route>
    </>
  );
}

export default CoursePage;
