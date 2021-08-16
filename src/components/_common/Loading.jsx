import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "./_styles";

export default function Loading() {
  // us elit condimentum in. Maecenas facilisis massa risus, ut vehicula dui ornare eu. Curabit
  const classes = useStyles();
  return (
    <>
      <Container className={classes.loadingWrapper}>
        <CircularProgress />
      </Container>
    </>
  );
}
