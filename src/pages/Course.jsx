import { Route } from "react-router-dom";

import * as config from "@settings/config";
import CourseResources from "./CourseResources";
import CourseUsers from "./CourseUsers";
import CourseNav from "@layout/CourseNav";

function Course() {

  let prefix = '/cursos/:id';

  const kinds =
  [
    {
      kind: 'A',
      path: prefix + config.courseUrls.dashboard,
    },
    {
      kind: 'M',
      path: prefix + config.courseUrls.material,
    },
    {
      kind: 'T',
      path: prefix + config.courseUrls.tareas,
    },
    {
      kind: 'E',
      path: prefix + config.courseUrls.examenes,
    },
    {
      path: prefix + config.courseUrls.personas,
      customComponent: <CourseUsers />
    }
  ]
  

  return (
    <>
      <CourseNav />

      {/* TODO: Iterate!! */}

      <Route exact path={"/cursos/:id"}>
        <CourseResources kind='anuncio' />
      </Route>

     { 
      kinds.map((elem) => {
        if(elem.customComponent) return (
          <Route exact path={elem.path}>
            {elem.customComponent}
          </Route>
        );

        return (
          <Route exact path={elem.path}>
            <CourseResources kind={elem.kind}/>
          </Route>
        );
      })
    }
    </>
  );
}

export default Course;
