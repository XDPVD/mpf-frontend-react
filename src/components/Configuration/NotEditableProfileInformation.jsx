import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';

export default function NotEditableProfileInformation(props){
  const {cookies}=props;
  const objs=[
  {"campo":'Nombre Completo:',"contenido":cookies.name.name},
  {"campo": 'Correo:',"contenido" : cookies.name.email}
  ];
  return (
    <div>
      {objs.map((obj)=>
        <>
        <Typography variant="h6"  gutterBottom> {obj.campo} </Typography>
        <Typography variant="h7"  gutterBottom> {obj.contenido} </Typography>
        <br/><br/>
        </>
      )}  
    </div>
  );
}









