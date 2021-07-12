import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/styles";
import { checkNull } from "@utils/checkNull";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    width: "100%",
    textDecoration: "none",
    color: "inherit",
  },
}));

function CoursesCreatedList({ created }) {
  const classes = useStyles();

  return (
    <List>
      {!checkNull(created) &&
        created.map((curso) => (
          <Link key={curso.id} className={classes.link} to={`/cursos/${curso.id}/dash`}>
            <ListItem
              style={{
                padding: "10px 8px",
                margin: "2px 0px",
                borderRadius: "10px",
              }}
              button
              disableRipple
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
