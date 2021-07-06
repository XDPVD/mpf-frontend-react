import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { postData } from "@utils/postData";
import { endP } from "@settings/config";
import useUserInfo from "@utils/useUserInfo";

const useStyles = makeStyles({
  textField: {
    width: "100%",
    margin: "10px 0px",
  },
  actions: {
    "& button": {
      margin: "0px 5px",
    },
  },
  loading: {
    position: "absolute",
    top: "25px",
    right: "50%",
  },
  formDiv: {
    position: "relative",
  },
});

function ReplyForm(props) {
  const classes = useStyles();

  const [, headers] = useUserInfo();

  const [formValues, setFormValues] = useState({
    content: "",
  });

  const [isFetching, setFetching] = useState(false);

  const handleInputChange = (e) => {
    setFormValues((prev) => ({ ...prev, content: e.target.value }));
  };

  const postAnswer = async () => {
    console.log("exec postAnswer");
    let obj = props.isReplyMode
      ? { commentId: props.comment_id }
      : { pubId: props.pub_id };

    let urlPost = props.isReplyMode
      ? endP(obj).postAnswer
      : endP(obj).postComment;

    console.log("postAnswer ", obj);
    console.log("postAnswer urlPost ", urlPost);

    setFetching((prev) => true);
    await postData(urlPost, formValues, headers);
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
        multiline
        rows={4}
        value={formValues.content}
        onChange={handleInputChange}
        disabled={isFetching}
      />
      <Grid container justify='flex-end' className={classes.actions}>
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
