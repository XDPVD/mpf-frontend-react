import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  closeIcon: {
    position: "absolute",
    right: 3,
    top: 8,
  },
  loadingWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: "100px",
  },
  notFoundWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "50px",
  },
});
