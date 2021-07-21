import { useStyles } from "./_styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

function NotFound({ children }) {
  const classes = useStyles();
  return (
    <Container className={classes.notFoundWrapper}>
      <Typography variant='subtitle1'>{children}</Typography>
    </Container>
  );
}

export default NotFound;
