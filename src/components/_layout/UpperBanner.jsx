import Typography from "@material-ui/core/Typography";
import { useStyles } from "./_styles";
import useDate from "@utils/useDate";
import { useGlobalStyles } from "../../styles/globalStyles";

function UpperBanner() {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const formatToday = useDate()[1];
  return (
    <div className={globalClasses.navbarContainer}>
      <Typography variant='subtitle3'>{formatToday.date}</Typography>
      <Typography variant='h3'>{formatToday.time}</Typography>
    </div>
  );
}

export default UpperBanner;
