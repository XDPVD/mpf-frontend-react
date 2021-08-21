import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import UsersList from "./UsersList";
import { useStyles } from "./_styles.js";
import { endP } from "@settings/config";
import { putData } from "@utils/putData";

// Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.k
function GroupCard(props) {
  const classes = useStyles();

  // Variables que llamamos desde los props
  const users = props.users;
  const isAdmin = props.isAdmin;
  const name = props.group?.name;
  const groupId = props.group?.id;
  const isLocked = props.group?.locked

  async function blockGroup(event) {
    event.preventDefault();
    await putData(endP({ groupId }).lockGroup);
  }

  return (
    <Card className={classes.card}>
      <CardHeader className={classes.cardHeader} title={name} />
      <Divider />
      <CardContent className={classes.cardContent} disableSpacing>
        <UsersList users={users} setSelectedUserId={(a)=>{console.log(a);}}/>
      </CardContent>
      <Divider />
      <CardActions className={classes.cardActions} disableSpacing>
      { (isAdmin) // Verificamos permisos
          ? <Button
              backgroundColor='#000000'
              variant='contained'
              color='secondary'
              onClick={blockGroup}
            >
              Bloquear grupo
            </Button> // TODO: Habilitar un desbloquear

          : (!isLocked) 
            && 
            <Button
              backgroundColor='#000000'
              variant='contained'
              color='secondary'
              // TODO: onClick={handleClickOpen}
            >
              Unirme
            </Button>
      }
      </CardActions>
    </Card>
  );
}

export default GroupCard;
