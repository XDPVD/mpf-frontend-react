import { Button, Card, CardContent, CardMedia, Icon, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    card: {
      display: "flex",
      justifyContent: "space-between",
      margin: "5px 0px",
    },
    btn: {
      marginLeft: "auto",
      fontSize: '20px',
    },
    prin: {
      display: "flex",
      padding: "8px",
      justifyContent: "space-between",
    },
    tile: {
      fontSize: 20,
      margin: "0px",
      textOverflow: 'ellipsis',
    },
    cardContent: {
      display: "flex",
      alignContent: "center",
    },
    conten: {
      display: "flex",
      flexDirection: "flow",
      alignItems: "center",
      height: "70px",
    },
    iconCon: {
      fontSize: 50,
      margin: "10px",
    },
    ventana: {
      position: "absolute",
      width: "80%",
      height: "80%",
      backgroundColor: "white",
      border: "2px solid #000",
      boxShadow: "10px 5px 5px black",
      padding: "16px 32px 24px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      FlexDirection: "column",
      "overflow-y": "scroll",
      "z-index": "30",
    },
  }));

function FileCard({file}) {
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
    )
}

export default FileCard;
