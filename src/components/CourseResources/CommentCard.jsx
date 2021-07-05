import React from "react";
import { Button, Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { dateStringToObj } from "@utils/convertDate";

const useStyles = makeStyles({
  commentCard: {
    borderRadius: "20px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.25)",
  },
  answerCard: {
    marginLeft: "25px",
    marginBottom: "15px",
    background: 'whitesmoke',
  },
  username:{
    fontSize: "0.75em",
    fontWeight: 'bold',
  },
  dateTime:{
    fontSize: "0.80em",
    fontStyle: 'italic',
  },
  userComment: {
    padding: "10px"
  },
  userIcon: {
    width: "40px",
    height: "40px",
    objectFit: "contain"
  },
  contAct: {
    padding: "10px"
  },
  content: {
    marginBottom: "5px",
    textAlign: 'left',
  },
  actions: {},
  thumbButton: {
    margin: "0px 5px"
  }
});

function CommentCard(props) {
  const classes = useStyles();
  return (
    <>
      <Grid
        className={`${classes.commentCard} ${
          props.isAnswer ? classes.answerCard : ""
        }`}
        container
      >
        <Grid
          className={classes.userComment}
          container
          item
          xs={1}
          justify="center"
        >
          <img
            className={classes.userIcon}
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fpng-user-icon-circled-user-icon-2240.png&f=1&nofb=1"
            alt="userIcon"
          />
        </Grid>
        <Grid className={classes.contAct} container item xs={11}>
          <Grid className={classes.username} item xs={12}>
            {props.comment.user.name}
          </Grid>
          <Grid className={classes.dateTime} item xs={12}>
            {dateStringToObj(props.comment.date,props.comment.time).toLocaleString()}
          </Grid>
          <Grid className={classes.content} item xs={12}>
            {props.comment.content}
          </Grid>
          {!props.isAnswer ? (
          <Grid className={classes.actions} container item xs={12}>

              <Button disabled={props.isReplyMode} onClick={props.onReplyMode}>
                Responder
              </Button>
          </Grid>
            ) : (
              <></>
            )}
        </Grid>
      </Grid>
    </>
  );
}

CommentCard.defaultProps = {
  isAnswer: false
};

export default CommentCard;
