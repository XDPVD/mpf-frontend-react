import { makeStyles } from "@material-ui/core";

export const useGlobalStyles = makeStyles({
  appContainer:{
    height: '100vh',
    display: 'flex',
    flexFlow: 'column',
  },
  pageContainer: {
    margin: '5px',
    marginLeft: '60px',
    display: 'flex',
    flex: 1,
    flexFlow: 'column',
    overflowY: 'hidden',
  },
  logo: {
    marginLeft: "30px",
  },
});

