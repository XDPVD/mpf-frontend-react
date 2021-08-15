import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import { useStyles } from './_styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';

import useRedirectUrl from '@utils/useRedirectUrl';
import { endP } from '@settings/config';
import AddResourceDialog from '@components/CourseResources/AddResourceDialog';
import { useEffect } from 'react';
import { fetchData } from '@utils/fetchData';
import { useUser } from '@utils/useUser';
import { useLocation } from 'react-router-dom';
import useRouterInfo from '@utils/useRouterInfo';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

//mis imports
import EditCourseDialog from './EditCourseDialog';
import { IconButton } from '@material-ui/core';
import { URLS } from '../../base/settings/urls';

function CourseNav() {
    const classes = useStyles();

    const [, redirectTo] = useRedirectUrl();

    const [location, history, params,] = useRouterInfo();
    const courseId = params.courseId;
    //const currentRoute = useLocation().pathname.split('/')[2];

    const actions = useUser()[1];

    // names of the tabs
    const nav = [
        { name: 'Anuncios', route: 'dash' },
        { name: 'Materiales', route: 'materiales' },
        { name: 'Tareas', route: 'tareas' },
        { name: 'Exámenes', route: 'examenes' },
        { name: 'Personas', route: 'personas' },
    ];
    const selectedTab = location.pathname.split('/')[3];
    const [openAddMaterial, setOpenAddMaterial] = useState(false);
    const [course, setCourse] = useState({});
    const [hiddenButton, setHiddenButton] = useState(false);
    //mi parte(fin)
    const [openEditCourse, setOpenEditCourse] = useState(false);
    const [hiddenButtonEditCourse, setHiddenButtonEditCourse] = useState(false);
    const [courseUpdated, setCourseUpdated] = useState(0);

    const editCourse = () => {
        console.log('cuc' + courseUpdated);
        setCourseUpdated(courseUpdated + 1);
    };
    const handleClickOpenEditCourse = () => {
        setOpenEditCourse(true);
    };
    const handleCloseOpenEditCourse = () => {
        setOpenEditCourse(false);
    };
    useEffect(() => {
        fetchData(endP({ courseId }).getCourse, setCourse);
    }, [courseUpdated, courseId]);

    useEffect(() => {
        fetchData(endP({ courseId }).getCourse, setCourse);
    }, [courseId]);

    const handleClickOpenAddMaterial = () => {
        setOpenAddMaterial(true);
    };

    const handleChange = (event, newValue) => {
        redirectTo('/cursos/' + courseId + '/' + newValue);
    };
    //aqui le agregue el sethiddenbuttoneditcourse
    useEffect(() => {
        actions.isCreator(courseId).then((res) => {
            setHiddenButton(!res);
            setHiddenButtonEditCourse(!res);
        });
    }, [actions, courseId]);
    //solo el grid es mio y el ultimo dialog
    return (
        <>
            <Grid container direction="row" alignItems="center" spacing={2}>
                <Grid item>
                    <Typography className={classes.courseTitle} variant="h3">
                        <IconButton onClick={() => history.push(URLS.COURSES)}>
                            <ArrowBackIcon />
                        </IconButton>
                        {course.name}
                    </Typography>
                </Grid>
                <Grid item>
                    {/* <Button
                        variant="contained"
                        color="primary"
                        hidden={hiddenButtonEditCourse}
                        startIcon={<EditIcon />}
                        onClick={handleClickOpenEditCourse}
                    >
                        Editar
                    </Button> */}
                </Grid>
            </Grid>
            <Tabs value={selectedTab} onChange={handleChange}>
                {nav.map((item) => {   
                    return <Tab
                        disableRipple
                        value={item.route}
                        label={item.name}
                        className={classes.tab}
                    />
                })}

                {/* <Button
                    hidden={hiddenButton}
                    className={classes.buttonAddMaterial}
                    onClick={handleClickOpenAddMaterial}
                    variant="contained"
                    color="#b2ff59"
                >
                    <span style={{ 'font-size': '20px', marginRight: '5px' }}>
                        +
                    </span>{' '}
                    Nuevo Recurso
                </Button> */}
            </Tabs>

            <AddResourceDialog
                openAdd={openAddMaterial}
                setOpenAdd={setOpenAddMaterial}
            />
            <EditCourseDialog
                courseId={courseId}
                courseUpdated={courseUpdated}
                setCourseUpdated={setCourseUpdated}
                openEditCourse={openEditCourse}
                onClose={handleCloseOpenEditCourse}
                headers={actions.getHeader()}
            />
        </>
    );
}

export default CourseNav;
