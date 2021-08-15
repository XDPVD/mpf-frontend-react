import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CoursesCreatedList from '@components/CoursesList/CoursesCreatedList';
import AddCourseDialog from '@components/CoursesList/AddCourseDialog';
import JoinCourseDialog from '@components/CoursesList/JoinCourseDialog';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Divider, Grid, Typography } from '@material-ui/core';
import CoursesEnrolledList from '@components/CoursesList/CoursesEnrolledList';
import useFetch from '../base/utils/useFetch';
import useEndpoints from '../base/utils/useEndpoints';
import { useUser } from '@utils/useUser';

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
    },
});

function CoursesListPage() {
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [openJoin, setOpenJoin] = useState(false);
    const [openSBCreate, setOpenSBCreate] = useState(false);
    const [openSBJoin, setOpenSBJoin] = useState(false);

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
        <>
            <Container maxWidth="xl" className={classes.actionsContainer}>
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
            </Container>
            <Grid
                container
                xs={12}
                spacing={2}
                alignContent="stretch"
                style={{ maxHeight: '95%' }}
            >
                <Grid
                    item
                    md={8}
                    xs={12}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        maxHeight: '100%',
                    }}
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
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        maxHeight: '100%',
                    }}
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
        </>
    );
}

export default CoursesListPage;
