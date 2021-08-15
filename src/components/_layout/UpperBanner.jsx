import Typography from "@material-ui/core/Typography";
import { useStyles } from "./_styles";
import useDate from "@utils/useDate";

function UpperBanner() {
  const classes = useStyles();
  const formatToday = useDate()[1];
  return (
    <div className={classes.upperBannerContainer}>
      <Typography variant='subtitle2'>{formatToday.date}</Typography>
      <Typography variant='h3'>{formatToday.time}</Typography>
    </div>
  );
}

export default UpperBanner;
