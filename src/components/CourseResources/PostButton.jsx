import { Button } from "@material-ui/core";
import { useStyles } from "./_styles";
import React from "react";
// aliquam pretium, ligula ante aliquam elit, in maximus nisi lectus sit amet massa. Sed euismod 
function PostButton({ onClick }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.guardarButton} align='right'>
        <Button
          className={classes.btn}
          size='large'
          variant='contained'
          color='primary'
          onClick={onClick}
        >
          SUBIR
        </Button>
      </div>
    </>
  );
}
export default PostButton;
