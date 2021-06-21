
import CourseNav from "../components/CourseNav";

import { Route, useParams, useRouteMatch } from "react-router-dom";
import { useEffect } from "react";

import * as config from "../config/config";
import CourseMaterialPage from "./CourseMaterialPage";

function CoursePage() {

  const {path, url} = useRouteMatch()

  const {courseId} = useParams()

  
  useEffect(() => {
    console.log("PATH: ",path)
    console.log("URL: ",url)
    console.log("COURSE_ID: ",courseId)
    return () => {
      
    }
  })

  

  return (
    <>
      <CourseNav />
      
      <Route exact path={url+config.courseUrls.dashboard}>
        Dashboard
      </Route>

      <Route exact path={url+config.courseUrls.material}>
        <CourseMaterialPage />
      </Route>

      <Route exact path={url+config.courseUrls.tareas}>
        Tareas
      </Route>

      <Route exact path={url+config.courseUrls.examenes}>
        Examenes
      </Route>

      <Route exact path={url+config.courseUrls.personas}>
        Personas
      </Route>
      
    </>
  );
}

export default CoursePage;
