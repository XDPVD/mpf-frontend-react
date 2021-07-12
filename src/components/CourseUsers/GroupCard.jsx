import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import UsersList from "./UsersList";
import Button from "@material-ui/core/Button";
import { useStyles } from "./_styles.js";

function GroupCard({ users }) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardHeader className={classes.cardHeader} title='Grupo 1' />
        <Divider />
        <CardContent className={classes.cardContent} disableSpacing>
          <UsersList users={users} />
        </CardContent>
        <Divider />
        <CardActions className={classes.cardActions} disableSpacing>
          <Button
            backgroundColor='#000000'
            variant='contained'
            color='secondary'
          >
            Unirme
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default GroupCard;
