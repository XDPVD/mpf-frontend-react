import CourseNav from "../components/CourseNav";

import { Route, useParams, useRouteMatch } from "react-router-dom";
import { useEffect } from "react";

import * as config from "../config/config";
import CourseMaterialPage from "./CourseMaterialPage";
import CourseMembers from "./CourseMembers";

function CoursePage() {
  const { path, url } = useRouteMatch();

<<<<<<< HEAD
  const { courseId } = useParams();

  useEffect(() => {
    console.log("PATH: ", path);
    console.log("URL: ", url);
    console.log("COURSE_ID: ", courseId);
    return () => {};
  });
=======
  const {url} = useRouteMatch()
>>>>>>> 7ced3ca8b6655eda7971561a1706674166e0213b

  return (
    <>
      <CourseNav />
<<<<<<< HEAD

      <Route exact path={url + config.courseUrls.dashboard}>
        Dashboard
      </Route>

      <Route exact path={url + config.courseUrls.material}>
        <CourseMaterialPage />
      </Route>

      <Route exact path={url + config.courseUrls.tareas}>
        Tareas
      </Route>

      <Route exact path={url + config.courseUrls.examenes}>
        Examenes
=======
      
      <Route exact path={url+config.courseUrls.dashboard}>
        <CourseMaterialPage modo="anuncio"/>
      </Route>

      <Route exact path={url+config.courseUrls.material}>
        <CourseMaterialPage modo="material"/>
      </Route>

      <Route exact path={url+config.courseUrls.tareas}>
        <CourseMaterialPage modo="tarea"/>
      </Route>

      <Route exact path={url+config.courseUrls.examenes}>
        <CourseMaterialPage modo="examen"/>
>>>>>>> 7ced3ca8b6655eda7971561a1706674166e0213b
      </Route>

      <Route exact path={url + config.courseUrls.personas}>
        <CourseMembers />
      </Route>
    </>
  );
}

export default CoursePage;
