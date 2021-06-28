import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: "100px",
  },
});

export default function Loading() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root}>
        <CircularProgress />
      </Container>
    </>
  );
}
