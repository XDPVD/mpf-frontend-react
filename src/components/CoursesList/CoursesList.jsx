import React, { useEffect, useState } from "react";

import CourseCard from "./CourseCard";
import Grid from "@material-ui/core/Grid";

import { fetchingData } from "@utils/fetchData";
import Loading from "@common/Loading";

import { checkNull } from "@utils/checkNull";
import CoursesCreatedList from "./CoursesCreatedList";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import useUserInfo from "@utils/useUserInfo";
import NotFound from "@common/NotFound";

export default function CoursesList() {
  const [cookiesUser] = useUserInfo();
  const [user, setUser] = useState();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetchingData(
      `/user/byemail/${cookiesUser.name.email}`,
      setUser,
      setIsFetching
    );
  }, []);

  //TODO
  // Arreglar el marginBottom de cada fila de cursos (estrecharlo)

  function showCoursesEnrolled() {
    const inscriptions = user.inscriptions.map((x) => x.course);

    if (!checkNull(inscriptions)) {
      return inscriptions.map((inscription) => (
        <Grid item xs={12} sm={12} md={6} lg={4} key={inscription.id}>
          <CourseCard elem={inscription} />
        </Grid>
      ));
    } else {
      return <NotFound>Aún no se encuentra inscrito a un curso</NotFound>;
    }
  }

  function showCoursesCreated() {
    const created = user.courses_created.map((x) => x);
    return !checkNull(created) ? (
      <CoursesCreatedList created={created} />
    ) : (
      <NotFound>No tiene clases creadas</NotFound>
    );
  }

  return (
    <>
      {isFetching ? (
        <Loading />
      ) : (
        <Grid container>
          <Grid item xs={12} sm={6} md={8} lg={9}>
            <Typography variant='h4' gutterBottom>
              Cursos Inscritos
            </Typography>
            <Divider style={{ width: "95%" }} />
            <Grid container>{showCoursesEnrolled()}</Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper style={{ padding: "10px 20px" }} elevation={1}>
              <Typography variant='h4'>Mis Cursos</Typography>
              <Divider />
              {showCoursesCreated()}
            </Paper>
          </Grid>
        </Grid>
      )}
    </>
  );
}
