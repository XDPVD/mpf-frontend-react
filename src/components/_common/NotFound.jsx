import { useStyles } from "./_styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

// ices risus et ligula auctor hendrerit. Praesent sit amet mauris ac sa
// pien placerat auctor. Ut lorem leo, egestas ornare felis nec, molestie ultric
// es mauris. In sit amet orci justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis e
function NotFound({ children }) {
  const classes = useStyles();
  return (
    <Container className={classes.notFoundWrapper}>
      <Typography variant='subtitle1'>{children}</Typography>
    </Container>
  );
}

export default NotFound;
