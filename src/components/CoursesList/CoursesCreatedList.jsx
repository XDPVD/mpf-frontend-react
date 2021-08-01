import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useStyles } from "./_styles";
import { checkNull } from "@utils/checkNull";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

function CoursesCreatedList({ created }) {
  const classes = useStyles();

  return (
    <List>
      {!checkNull(created) &&
        created.map((curso) => (
          <Link
            key={curso.id}
            className={classes.courseLink}
            to={`/cursos/${curso.id}/dash`}
          >
            <ListItem
              style={{
                padding: "10px 8px",
                margin: "2px 0px",
                borderRadius: "10px",
              }}
              button
              disableRipple
              data-testid={`course-item-${curso.id}`}
            >
              <ListItemText>
                <Typography variant='h6'>{curso.name}</Typography>
                <Typography variant='subtitle2'>{curso.description}</Typography>
              </ListItemText>
            </ListItem>
          </Link>
        ))}
    </List>
  );
}

export default CoursesCreatedList;
