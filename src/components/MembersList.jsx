import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

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

function MembersList({ members, url }) {
  const classes = useStyles();
  const [users, setUsers] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const resUsers = res.data;
        setUsers(resUsers);
        console.log(users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return (
    <>
      {users &&
        users.map((user) => (
          <>
            <span>{user.name}</span>
          </>
        ))}
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
