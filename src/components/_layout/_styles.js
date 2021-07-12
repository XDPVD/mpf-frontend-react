import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  tab: {
    textTransform: "none",
    minWidth: "80px",
    margin: "0px 5px",
  },
  courseTitle: {
    marginLeft: "10px",
    padding: [[15, 0, 5, 0]],
  },
  buttonAddMaterial: {
    padding: [[5, 20]],
    height: "36px",
    position: "absolute",
    right: "50px",
    top: "0px",
    backgroundColor: "rgba(144, 224, 94, 1)",
  },
  wrapper: {
    backgroundColor: "#131313",
    padding: "20px 30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    color: "#ddd",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1623602406812-10cbd27715b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)",
    backgroundSize: "cover",

    "@media (max-width: 400px)": {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "5px 30px",
    },
  },
});
