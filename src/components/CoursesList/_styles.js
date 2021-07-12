import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  // AddCourseDialog styles
  btnCreate: {
    float: "right",
    padding: [[8, 30]],
  },
  inputCreate: {
    marginBottom: "15px",
  },
  // BtnGroup styles
  btnGroupWrapper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "row-reverse",
    margin: "5px 5px",
  },
  btnGroup: {
    margin: "5px",
    padding: [[5, 20]],
    backgroundColor: "rgba(144, 224, 94, 1)",
  },
  // CourseCard styles
  courseCard: {
    backgroundColor: "#f5f5f5",
    height: "200px",
    margin: "0",
    width: "100%",
  },
  courseDesc: {
    marginBottom: 12,
  },
  courseLink: {
    width: "100%",
    textDecoration: "none",
    color: "inherit",
  },
}));
