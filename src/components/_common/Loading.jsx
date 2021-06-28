import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/styles";
import { display } from "@material-ui/system";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Loading() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <CircularProgress />
    </Container>
  );
}
