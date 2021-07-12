import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Icon,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./_styles";
import React from "react";

function FileCard({ file }) {
  const classes = useStyles();

  return (
    <Card className={classes.card} display='flex'>
      <div className={classes.conten}>
        <CardMedia width='151px'>
          <Icon className={classes.iconCon}>assignment</Icon>
        </CardMedia>
        <div>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.tile} component='p' variant='p'>
              {file.name}
            </Typography>
          </CardContent>
        </div>
      </div>
      <Button
        variant='contained'
        color='primary'
        href={file.downloadUrl}
        target='_blank'
      >
        Descargar
      </Button>
    </Card>
  );
}

export default FileCard;
