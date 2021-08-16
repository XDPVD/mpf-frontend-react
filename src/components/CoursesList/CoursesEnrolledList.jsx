import React from 'react';
import CourseCard from '@components/CoursesList/CourseCard';
import NotFound from '@common/NotFound';
import Loading from '../_common/Loading';
import { Grid } from '@material-ui/core';

function CoursesEnrolledList(props) {

    return (
        <Grid container item style={{'overflowY': 'scroll'}}>
            {!props.courses ? <Loading /> :
                props.courses?.inscriptions.map(({ course }) => {
                return (
                    <Grid item xs={12} sm={12} md={6} lg={4} key={course.id}>
                        <CourseCard course={course} />
                    </Grid>
                );
            })}
            {props.courses?.inscriptions.length === 0 && (
                <NotFound>No tienes ninguna matricula en algun curso</NotFound>
            )}
        </Grid>
    );
}

export default CoursesEnrolledList;
