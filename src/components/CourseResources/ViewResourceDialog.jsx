import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Icon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    justifyContent: "space-between",
    margin: "5px 0px",
  },
  btn: {
    marginLeft: "auto",
  },
  prin: {
    display: "flex",
    padding: "8px",
    justifyContent: "space-between",
  },
  tile: {
    fontSize: 24,
    margin: "0px",
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
    "z-index": "10px",
  },
}));

function ViewResourceDialog(props) {
  const classes = useStyles();
  return (
    <div align='center' className={classes.ventana}>
      <div className={classes.prin}>
        <label className={classes.tile}>MATERIAL.NOMBRE</label>
        <Button
          className={classes.btn}
          size='large'
          variant='contained'
          color='secondary'
          onClick={() => props.closeCallback()}
        >
          X
        </Button>
      </div>

      <hr></hr>
      <p align='left'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel
        fermentum felis, non consectetur orci. Qui sque porta augue eu odio
        venenatis blandit. Sed nec ligula augue. Pellentesque lobortis, est id
        pharetra volutpat, nisl quam semper tellus, quis tempor nulla diam vel
        erat. Praesent sit amet risus ut risus aliquam malesuada quis id tellus.
        Mauris nec congue erat. Mauris sit amet aliquet erat. Quisque tempor
        metus vitae lectus pretium feugiat. Aliquam tempus rhoncus erat, ut
        lacinia metus ultrices a. Quisque lacus justo, condimentum nec feugiat
        a, interdum in nibh. Nullam tristique consectetur augue nec viverra.
        Cras metus dui, hendrerit vel ultricies eget, fermentum at diam. Nulla
        vitae efficitur lacus. Donec pretium tempus rutrum. Praesent quis ligula
        quam. Etiam fringilla diam pulvinar rhoncus sodales.
      </p>

      <Card className={classes.card} display='flex'>
        <div className={classes.conten}>
          <CardMedia width='151px'>
            <Icon className={classes.iconCon}>assignment</Icon>
          </CardMedia>
          <div>
            <CardContent className={classes.cardContent}>
              <Typography className={classes.tile} component='h5' variant='h5'>
                archivo.nombre
              </Typography>
            </CardContent>
          </div>
        </div>
        <Button
          variant='contained'
          color='primary'
          href='http://www.google.com'
          target='_blank'
        >
          Descargar
        </Button>
      </Card>

      <hr />
      <div align='left' style={{ "font-weight": "bold" }}>
        Comentarios
      </div>
      <hr />
      <div>No hay comentarios</div>
    </div>
  );
}

export default ViewResourceDialog;
