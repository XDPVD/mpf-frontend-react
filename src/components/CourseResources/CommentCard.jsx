import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { useStyles } from './_styles';

import { dateStringToObj } from '@utils/convertDate';
// enatis congue orci hendrerit. Etiam sit amet efficitur est. Fusce vel viverra
function CommentCard(props) {
  const classes = useStyles();
  return (
    <>
      <Grid
        className={`${classes.commentCard} ${
          props.isAnswer ? classes.answerCard : ''
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
            {dateStringToObj(
              props.comment.date,
              props.comment.time
            ).toLocaleString()}
          </Grid>
          <Grid
            className={classes.content}
            data-testid="card-content"
            item
            xs={12}
          >
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
  isAnswer: false,
};

export default CommentCard;
