import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/styles";
import { checkNull } from "@utils/checkNull";
import NotFound from "@common/NotFound";

const useStyles = makeStyles({
  userText: {
    "& span": {
      fontSize: "15px",
    },
  },
  avatar: {
    minWidth: "50px",
  },
});

function UsersList(props) {
  const classes = useStyles();
  const users = props.users

  if (!checkNull(users)){
    return (
      <List style={{ borderRadius: "10px" }}>
        { users.map(
            (user) => (
              <ListItem
                style={{
                  padding: "10px 8px",
                  margin: "2px 0px",
                  borderRadius: "10px",
                }}
                button
                disableRipple
              >
                <ListItemAvatar className={classes.avatar}>
                  <Avatar
                    alt={user.name}
                    src='https://images.unsplash.com/photo-1617331008613-9479b434b1e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                  />
                </ListItemAvatar>
                <ListItemText className={classes.userText}>
                  {user.name}
                </ListItemText>
              </ListItem>
            )
          )
        }
      </List>
    );
  }
  return <NotFound>No hay alumnos para mostrar.</NotFound>
}

export default UsersList;
