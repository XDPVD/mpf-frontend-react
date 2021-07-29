import React from "react";
import Typography from '@material-ui/core/Typography';


export default function NotEditableProfileInformation(props){
  const objs=[
    {"campo":'Nombre Completo:',"contenido":props.user.name},
    {"campo": 'Correo:',"contenido" : props.user.email}
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









