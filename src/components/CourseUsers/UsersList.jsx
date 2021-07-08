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

function UsersList({ users }) {
  const classes = useStyles();

  return (
    <>
      <List
        style={{
          borderRadius: "10px",
        }}
      >
        {!checkNull(users) ? (
          users.map((user) => (
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
                  src='https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
                />
              </ListItemAvatar>
              <ListItemText className={classes.userText}>
                {user.name}
              </ListItemText>
            </ListItem>
          ))
        ) : (
          <NotFound>No hay alumnos para mostrar</NotFound>
        )}
      </List>
    </>
  );
}

export default UsersList;
