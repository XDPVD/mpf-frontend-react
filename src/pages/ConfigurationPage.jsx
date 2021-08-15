import React from "react";
import Typography from '@material-ui/core/Typography';
import NotEditableProfileInformation from "@components/Configuration/NotEditableProfileInformation";
import EditableProfileInformation from "@components/Configuration/EditableProfileInformation";
import { useUser } from '@utils/useUser';

export default function Configuration() {
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
