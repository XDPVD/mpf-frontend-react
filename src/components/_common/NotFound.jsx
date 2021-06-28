import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "50px",
  },
});

function NotFound({ children }) {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant='subtitle1'>{children}</Typography>
    </Container>
  );
}

export default NotFound;
