import Typography from "@material-ui/core/Typography";
import { useStyles } from "./_styles";
import useDate from "@utils/useDate";

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
