import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  // Add User Dialog styles
  codeButton: {
    borderRadius: "6px 0 0 6px",
    padding: [[6, 15]],
  },
  codeText: {
    display: "inline",
    width: "100%",
    margin: 0,
    outline: "none",
    boxShadow: "none",
    border: "1px solid #c5c5c5",
    borderRadius: "0 5px 5px 0",
    paddingLeft: 10,
    "&:focus": {
      borderColor: "#2ab426",
      outline: "none",
      boxShadow: "none",
    },
    "&:disabled": {
      backgroundColor: "#fff",
    },
  },
  codeWrapper: {
    marginTop: 15,
    marginBottom: 15,
    display: "flex",
  },
  send: {
    padding: [[5, 20]],
    margin: [[5, 0]],
    borderRadius: 7,
  },
  // Users List styles
  userText: {
    "& span": {
      fontSize: "15px",
    },
  },
  avatar: {
    minWidth: "50px",
  },
  // Group card styles
  card: {
    margin: [[10, 5]],
  },
  cardHeader: {
    padding: [[8, 15]],
  },
  cardContent: {
    padding: [[0, 8]],
    height: "280px",
    overflow: "auto",
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
  },
});
