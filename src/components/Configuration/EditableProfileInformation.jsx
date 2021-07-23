import React,{ useState,useEffect} from "react";
import Typography from '@material-ui/core/Typography';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import Button from '@material-ui/core/Button';
import { endP } from "@settings/config";
import { fetchData } from "@utils/fetchData";
import { putData } from "@utils/putData";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '35ch',
  },
}));

export default function EditableProfileInformation(props){
  const classes = useStyles();
  const {cookies,headers}=props;
  const [obj,setObj]=useState([]);
  const {register,handleSubmit,formState: { errors },} = useForm();
  const onSubmit = (data,e) => {
    putData(endP({email:cookies.name.email}).editUser,{phone:data.phone,link:data.facebook},headers);
    if(data.phone){
      e.target[0].value='';
      e.target[0].placeholder=data.phone;
    }
    if(data.facebook){
      e.target[1].value='';
      e.target[1].placeholder=data.facebook;
    }
  };
  
  useEffect(() => {
    fetchData(endP({email:cookies.name.email}).getUserByEmail, setObj);
  },[]);

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
            <TextField {...register('phone', { pattern: /\d+/ })} placeholder={obj.phone}/>
            {errors.phone && <p>Solo admite numeros.</p>}
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
            <TextField {...register('facebook')} className={classes.textField} placeholder={obj.link}/>
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









