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

function MembersList({ url }) {
  const classes = useStyles();
  const [users, setUsers] = useState();

  useEffect(() => {
    axios
      .get("https://2c8a1724eca4.ngrok.io/course/1")
      .then((res) => {
        const resUsers = res.data.users_enrolled;
        setUsers(resUsers);
        console.log(resUsers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return (
    <>
      <List
        style={{
          borderRadius: "10px",
        }}
      >
        {users &&
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
                  src='https://images.unsplash.com/photo-1617331008613-9479b434b1e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                />
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
