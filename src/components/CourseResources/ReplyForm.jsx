import React, { useState } from "react";
import { Button, CircularProgress, Grid, TextField } from "@material-ui/core";
import { useStyles } from "./_styles";
import { postData } from "@utils/postData";
import { endP } from "@settings/config";
import { useUser } from '@utils/useUser';

function ReplyForm(props) {
  const classes = useStyles();

  const actions = useUser()[1];

  const [formValues, setFormValues] = useState({
    content: "",
  });

  const [isFetching, setFetching] = useState(false);

  const handleInputChange = (e) => {
    setFormValues((prev) => ({ ...prev, content: e.target.value }));
  };

  const postAnswer = async () => {
    
    let obj = props.isReplyMode
      ? { commentId: props.comment_id }
      : { pubId: props.pub_id };

    let urlPost = props.isReplyMode
      ? endP(obj).postAnswer
      : endP(obj).postComment;

    setFetching((prev) => true);
    await postData(urlPost, formValues, actions.getHeader());
    setFetching((prev) => false);
    setFormValues({ content: "" });
    props.offReplyMode();
  };

  return (
    <div className={classes.formDiv}>
      <TextField
        className={classes.textField}
        id='content-input'
        label='Escriba su respuesta'
        type='text'
        data-testid="comment-input"
        multiline
        rows={4}
        value={formValues.content}
        onChange={handleInputChange}
        disabled={isFetching}
      />
      <Grid container justify='flex-end' className={classes.actionsReply}>
        <Button
          variant='contained'
          color='primary'
          onClick={postAnswer}
          disabled={isFetching}
        >
          Enviar
        </Button>
        <Button
          variant='contained'
          color='secondary'
          onClick={props.offReplyMode}
          disabled={isFetching}
        >
          Cancelar
        </Button>
      </Grid>
      {isFetching ? <CircularProgress className={classes.loading} /> : <></>}
    </div>
  );
}

export default ReplyForm;
