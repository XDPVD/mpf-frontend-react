import React,{ useState,useEffect} from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { useForm } from 'react-hook-form';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import Button from '@material-ui/core/Button';
import { endP } from "@settings/config";
import { fetchData } from "@utils/fetchData";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function EditableProfileInformation(props){
  const classes = useStyles();
  const {cookies}=props;
  const [telefono,setTelefono]=useState();
  const [linkFacebook,setLinkFacebook]=useState("");
  const [obj,setObj]=useState();
  const {register,handleSubmit,formState: { errors },} = useForm();
  const onSubmit = (data) => console.log(data);
  

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6"  gutterBottom>
          Telefono:
        </Typography>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
          <IconButton color="primary" aria-label="upload picture" component="span">
          <PhoneIcon fontSize="medium" />
          </IconButton>
          </Grid>
          <Grid item>
            <TextField {...register('telefono', { pattern: /\d+/ })}/>
            {errors.telefono && <p>Solo admite numeros.</p>}
          </Grid>
        </Grid>
        <br/>
        <Typography variant="h6"  gutterBottom>
          Link de Facebook:
        </Typography>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
          <IconButton color="primary" aria-label="upload picture" component="span">
          <FacebookIcon fontSize="medium" />
          </IconButton>
          </Grid>
          <Grid item>
            <TextField {...register('facebook')}/>
          </Grid>
        </Grid>
        <br></br>
        <Button variant="contained" color="primary" type="submit">
          Enviar
        </Button>
      </form>
    </div>
  );
}









