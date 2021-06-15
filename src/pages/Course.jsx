import UpperBanner from "../components/UpperBanner";
import CourseNav from "../components/CourseNav";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const students = [
  {
    name: "User 1",
    photo:
      "https://images.unsplash.com/photo-1617331008613-9479b434b1e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "User 2",
    photo:
      "https://images.unsplash.com/photo-1617331008613-9479b434b1e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "uwu",
    photo:
      "https://images.unsplash.com/photo-1617331008613-9479b434b1e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
];

function Course() {
  return (
    <>
      <UpperBanner />
      <Container>
        <CourseNav />
        <Grid container>
          <Grid item xs={12} sm={6} md={5}>
            <Typography variant="h5">Profesores</Typography>
            <Divider />
            <List>
              {students.map((user) => (
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar alt={user.name} src={user.photo} />
                  </ListItemAvatar>
                  <ListItemText>{user.name}</ListItemText>
                </ListItem>
              ))}
            </List>
            <Typography variant="h5">Delegado</Typography>
            <Divider />

            <Typography variant="h5">Alumnos</Typography>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={6} md={7}>
            <Typography variant="h5">Grupos</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Course;
