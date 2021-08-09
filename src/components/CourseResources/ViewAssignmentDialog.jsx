import React from 'react';
import { useStyles } from './_styles';
import { Button } from '@material-ui/core';

import FileTray from '@components/_common/FileTray';

function ViewResourceDialog(props) {
  const classes = useStyles();

  const assignment_id = 'A-2W3R2';

  return (
    <div align="center" className={classes.ventana}>
      <div className={classes.titleWrapper}>
        <label className={classes.tile}>
          {props.post.id_publicacion} - Documentos entregados
        </label>
        <Button
          className={classes.btnClose}
          size="large"
          variant="contained"
          color="secondary"
          onClick={() => props.closeCallback()}
        >
          x
        </Button>
      </div>
      <FileTray
        target_id={assignment_id}
        mode={'a'}
        blockAllActions={props.maxDate < new Date()}
      />
    </div>
  );
}

export default ViewResourceDialog;
