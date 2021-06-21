import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/styles";

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

function MembersList({ members }) {
  const classes = useStyles();
  return (
    <>
      <List
        style={{
          borderRadius: "10px",
        }}
      >
        {members.map((user) => (
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
              <Avatar alt={user.name} src={user.photo} />
            </ListItemAvatar>
            <ListItemText className={classes.userText}>
              {user.name}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default MembersList;
