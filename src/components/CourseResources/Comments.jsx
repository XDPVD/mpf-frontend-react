import React,{ useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {ProfileImage} from "@styles/Styles";
import Button from '@material-ui/core/Button';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
const useStyles = makeStyles((theme) => ({
  paper: {
    root: {
        flexGrow: 1,
      },
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

export default function Comments() {
  const [com, setCom] = useState({
    
  });
  const classes = useStyles();

  return (
    <>
      <hr/>
      <div align='left' style={{ "font-weight": "bold" }}>
        Comentarios
      </div>
      <hr/>
      {com ?
            <div>
                    <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} direction="row" alignItems="center"
                        justify="center">
                            <Grid xs={12} sm={12}>
                                <Paper className={classes.paper}>
                                    <Grid xs={3} sm={3}><ProfileImage /></Grid>
                                    <Grid xs={9} sm={9} direction="column">
                                        <Grid xs={12} sm={12}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, expedita </p></Grid>
                                        <Grid xs={12} sm={12} direction="row" >
                                            <Button variant="contained" endIcon={<ThumbUpAltIcon />} />
                                            <Button variant="contained" endIcon={<ThumbDownAltIcon />}/>
                                            <Button><h7>Responder</h7></Button>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                    </div>
            </div>
            :
            <div>
                <Grid item xs={12} sm={12}>
                    <Paper className={classes.paper}><Button variant="contained">Comentar</Button></Paper>
                </Grid>
            </div>
      }
    </>
  );
}