import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import NotEditableProfileInformation from "@components/Configuration/NotEditableProfileInformation";
import useUserInfo from "@utils/useUserInfo";
import EditableProfileInformation from "@components/Configuration/EditableProfileInformation";

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function Configuration() {
  const classes = useStyles();
  const [cookies, headers] = useUserInfo();

  return (
    <div>
      <Typography variant="h6"  gutterBottom>
        CONFIGURACION DEL USUARIO
      </Typography>
      <NotEditableProfileInformation cookies={cookies}/>
      <EditableProfileInformation cookies={cookies} headers={headers}/>
    </div>
  );
}
