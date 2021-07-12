import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "./_styles";

export default function Loading() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.loadingWrapper}>
        <CircularProgress />
      </Container>
    </>
  );
}
