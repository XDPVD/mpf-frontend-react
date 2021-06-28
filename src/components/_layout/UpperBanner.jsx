import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import useDate from "@utils/useDate";

const useStyles = makeStyles((theme) => ({
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
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "5px 30px",
    },
  },
}));

function UpperBanner() {
  const classes = useStyles();
  const date = useDate();
  return (
    <div className={classes.wrapper}>
      <Typography variant='subtitle2'>{date.full}</Typography>
      <Typography variant='h2'>{date.time}</Typography>
    </div>
  );
}

export default UpperBanner;
