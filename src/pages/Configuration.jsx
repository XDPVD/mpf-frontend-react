import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import NotEditableProfileInformation from "@components/Configuration/NotEditableProfileInformation";
import EditableProfileInformation from "@components/Configuration/EditableProfileInformation";
import { useUser } from "src/base/context/userContext";


const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function Configuration() {
  const classes = useStyles();
  const [user, actions] = useUser();

  return (
    <div>
      <Typography variant="h6"  gutterBottom>
        CONFIGURACION DEL USUARIO
      </Typography>
      <NotEditableProfileInformation user={user}/>
      <EditableProfileInformation user={user} headers={actions.getHeader()}/>
    </div>
  );
}
