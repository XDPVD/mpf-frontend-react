import { Redirect, Route, useParams } from "react-router-dom";

import { COURSE_URLS } from "../base/settings/urls";
import CourseResources from "./CourseResources";
import CourseUsers from "./CourseUsers";
import CourseNav from "@layout/CourseNav";

function Course() {
  let prefix = "/cursos/:id";

  const { courseId } = useParams();

  const kinds = [
    {
      kind: "A",
      path: prefix + COURSE_URLS.dashboard,
    },
    {
      kind: "M",
      path: prefix + COURSE_URLS.MATERIAL,
    },
    {
      kind: "T",
      path: prefix + COURSE_URLS.TASKS,
    },
    {
      kind: "E",
      path: prefix + COURSE_URLS.EXAMS,
    },
    {
      path: prefix + COURSE_URLS.PEOPLE,
      customComponent: <CourseUsers courseId={courseId} />,
    },
  ];

  return (
    <>
      <CourseNav courseId={courseId} />

      {kinds.map((elem) => {
        if (elem.customComponent)
          return (
            <Route key={elem.path} exact path={elem.path}>
              {elem.customComponent}
            </Route>
          );

        return (
          <Route key={elem.kind} exact path={elem.path}>
            <CourseResources kind={elem.kind} />
          </Route>
        );
      })}
    </>
  );
}

export default Course;
