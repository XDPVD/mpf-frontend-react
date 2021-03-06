import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
    headerLogo: {
        marginLeft: '30px',
    },
    headerUserContainer: {
        background: '#f5f2ec',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '0 0 0 45px',
        height: '100%',
        width: '300px',
        padding: '0px 20px',
        '& > p': {
            flex: 1, // why?
            maxWidth: '60%',
            overflow: 'hidden',
            textAlign: 'center',
            margin: '0 20px',
            fontWeight: 'bold',
            fontSize: 20,
        },
    },
    tab: {
        textTransform: 'none',
        minWidth: '80px',
        margin: '0px 5px',
    },
    courseTitle: {
        marginLeft: '10px',
        padding: [[15, 0, 5, 0]],
    },
    buttonAddMaterial: {
        position: 'absolute',
        padding: '10 20 !important',
        height: '40px !important',
        right: '40px !important',
        top: '0px !important',
        backgroundColor: 'rgb(144, 224, 92) !important',
    },

    profileImage: {
        height: '40px',
        width: '40px',
        display: 'block',

        backgroundColor: 'lightcoral',
        margin: '20px 10px',
        borderRadius: '50px',
    },
    separator: {
        height: '5px',
        width: '75%',
        marginBottom: '10px',
        marginTop: "10px",
        backgroundColor: 'gray',
    },
    lateralBarButton: {
        '&.MuiButton-root':{
          width: '10px',
          padding: '0px',
          minWidth: '40px',
          minHeight: '40px',
          marginBottom: '10px',
        },
        '& svg':{
            fontSize: '30px',
        }
    },
    lateralBarOptions: {
        marginTop: '10px',
        marginBottom: 'auto',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        '&:last-child': {
            marginBottom: 0,
        },
    },

    lateralBarContainer: {
        height: '85vh',
        width: '55px',

        backgroundColor: 'white',
        boxSizing: 'border-box',
        border: '2px solid #969696',
        borderRadius: '50px 50px 0px 0px',
        borderBottomWidth: '0px',

        position: 'fixed',
        left: '0',
        bottom: '0',

        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 0,
    },
    lateralBarTop:{
      marginTop: '20px',
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'center',
    },
    lateralBarBottom:{
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'center',
    },
});
