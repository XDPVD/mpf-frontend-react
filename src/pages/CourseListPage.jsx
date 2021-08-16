import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CoursesCreatedList from '@components/CoursesList/CoursesCreatedList';
import AddCourseDialog from '@components/CoursesList/AddCourseDialog';
import JoinCourseDialog from '@components/CoursesList/JoinCourseDialog';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import { Divider, Grid, Typography } from '@material-ui/core';
import CoursesEnrolledList from '@components/CoursesList/CoursesEnrolledList';
import useFetch from '../base/utils/useFetch';
import useEndpoints from '../base/utils/useEndpoints';
import { useUser } from '@utils/useUser';
import { useGlobalStyles } from '../styles/globalStyles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
    actionsContainer: {
        padding: '5px 10px',
        margin: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        '& > *': {
            marginLeft: '10px',
        },
        height: '50px',
    },
    coursesContainer:{
        height: 'calc(100% - 50px)', 
    },
    listContainer:{
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '100%',
    }
});

function CoursesListPage() {
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [openJoin, setOpenJoin] = useState(false);
    const [openSBCreate, setOpenSBCreate] = useState(false);
    const [openSBJoin, setOpenSBJoin] = useState(false);

    const globalClasses = useGlobalStyles();

    const classes = useStyles();

    const handleClickOpenAdd = () => {
        setOpenAddDialog(true);
    };
    const handleClickOpenJoin = () => {
        setOpenJoin(true);
    };

    const handleCloseSBCreate = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSBCreate(false);
    };

    const handleCloseSBJoin = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSBJoin(false);
    };

    const user = useUser()[0];
    const endPoints = useEndpoints({ email: user.email });
    const [courses] = useFetch({ endpoint: endPoints.get.getUserByEmail });

    return (
        <div className={globalClasses.genericContainer}>
            <div className={classes.actionsContainer}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleClickOpenAdd}
                >
                    Crear
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleClickOpenJoin}
                >
                    Unirse
                </Button>
            </div>
            <Grid
                container
                className={classes.coursesContainer}
                alignContent="stretch"
            >
                <Grid
                    item
                    md={8}
                    xs={12}
                    className={classes.listContainer}
                >
                    <Typography variant="h4">Lista de cursos</Typography>
                    <Divider
                        style={{
                            width: '90%',
                            height: '2.5px',
                            background: 'black',
                        }}
                    />
                    <CoursesEnrolledList courses={courses}/>
                </Grid>
                <Grid
                    item
                    md={4}
                    xs={12}
                    className={classes.listContainer}
                >
                    <Typography variant="h4">Mis Cursos</Typography>
                    <Divider
                        style={{
                            height: '2.5px',
                            background: 'black',
                        }}
                    />

                    <CoursesCreatedList courses={courses} />
                </Grid>
            </Grid>
            <AddCourseDialog
                open={openAddDialog}
                setOpen={setOpenAddDialog}
                setOpenSB={setOpenSBCreate}
            />

            <Snackbar
                open={openSBCreate}
                autoHideDuration={3000}
                onClose={handleCloseSBCreate}
            >
                <Alert onClose={handleCloseSBCreate} severity="success">
                    Curso creado satisfactoriamente
                </Alert>
            </Snackbar>

            <JoinCourseDialog
                open={openJoin}
                setOpen={setOpenJoin}
                setOpenSB={setOpenSBJoin}
                onFinish={null}
            />

            <Snackbar open={openSBJoin} autoHideDuration={3000}>
                <Alert onClose={handleCloseSBJoin} severity="success">
                    Inscripción satisfactoria al curso
                </Alert>
            </Snackbar>
        </div>
    );
}

export default CoursesListPage;
