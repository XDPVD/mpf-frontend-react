import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles } from './_styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import NotFound from '@common/NotFound';
import Loading from '../_common/Loading';

function CoursesCreatedList(props) {
    const classes = useStyles();

    return (
        <List style={{overflowY: 'scroll', overflowX: 'hidden'}}>
            {!props.courses && <Loading />}
            {props.courses?.courses_created.length === 0 && (
                <NotFound>No tienes ningun curso creado</NotFound>
            )}
            {props.courses?.courses_created.map((course) => (
                <Link
                    key={course.id}
                    className={classes.courseLink}
                    to={`/cursos/${course.id}/dash`}
                >
                    <ListItem
                        style={{
                            padding: '10px 8px',
                            margin: '2px 5px',
                            borderRadius: '10px',
                            boxShadow: '0 0 2.5px 0px black',
                            height: '75px',
                            marginBottom: '15px',
                        }}
                        button
                        disableRipple
                        data-testid={`course-item-${course.id}`}
                    >
                        <ListItemText style={{
                          width: '100%',
                          overflow: 'hidden'
                        }}>
                            <Typography variant="h6">{course.name}</Typography>
                            <Typography variant="subtitle2">
                                {course.description}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </Link>
            ))}
        </List>
    );
}

export default CoursesCreatedList;
