import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from './_styles';
import { checkNull } from '@utils/checkNull';
import NotFound from '@common/NotFound';

// t. Etiam sit amet efficitur est. Fusce vel viverra ante. E
function UsersList(props) {
  const classes = useStyles();
  const users = props.users;
  return (
    <List style={{ borderRadius: '10px' }}>
      {checkNull(users) ? (
        <NotFound>No hay alumnos para mostrar</NotFound>
      ) : (
        users?.map((user, index) => (
          <ListItem
            style={{
              padding: '10px 8px',
              margin: '2px 0px',
              borderRadius: '10px',
            }}
            button
            disableRipple
            key={index}
            value={user.email}
            onClick={(e)=>{console.log(e.currentTarget.textContent);
              console.log(user.id);props.setSelectedUserId(user.id);}}
          >
            <ListItemAvatar className={classes.avatar}>
              <Avatar
                alt={user?.name}
                src="https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
              />
            </ListItemAvatar>
            <ListItemText className={classes.userText}>
              {user?.name}
            </ListItemText>
          </ListItem>
        ))
      )}
    </List>
  );
}

export default UsersList;
