import { Route, useParams, useRouteMatch } from "react-router-dom";
import { useEffect } from "react";

import * as config from "../base/settings/config";
import CourseResources from "./CourseResources";
import CourseUsers from "./CourseUsers";
import CourseNav from "../components/_layout/CourseNav";

function Course() {
  const { url } = useRouteMatch();

  return (
    <>
      <CourseNav />

      {/* TODO: Iterate!! */}

      <Route exact path={"/cursos/:id"}>
        <CourseResources modo='anuncio' />
      </Route>

      <Route exact path={"/cursos/:id" + config.courseUrls.dashboard}>
        <CourseResources modo='anuncio' />
      </Route>

      <Route exact path={"/cursos/:id" + config.courseUrls.material}>
        <CourseResources modo='material' />
      </Route>

      <Route exact path={"/cursos/:id" + config.courseUrls.tareas}>
        <CourseResources modo='tarea' />
      </Route>

      <Route exact path={"/cursos/:id" + config.courseUrls.examenes}>
        <CourseResources modo='examen' />
      </Route>

      <Route exact path={"/cursos/:id" + config.courseUrls.personas}>
        <CourseUsers />
      </Route>
    </>
  );
}

export default Course;
