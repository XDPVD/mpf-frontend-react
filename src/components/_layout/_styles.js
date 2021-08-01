import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(({
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
    position: 'absolute',
    padding: '10 20 !important',
    height: "40px !important",
    right: "40px !important",
    top: "0px !important",
    backgroundColor: "rgb(144, 224, 92) !important",
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

    // "@media (max-width: 400px)": {
    //   flexDirection: "column",
    //   alignItems: "center",
    //   justifyContent: "flex-end",
    //   padding: "5px 30px",
    // },
  },
  profileImage:{
    height: "40px",
    width: "40px",
    display: "block",
  
    backgroundColor: "lightcoral",
    margin: "20px 10px",
    borderRadius: "50px",
  },
  header:{
    display: "flex",
    height: "60px",
    width: "100%",
    alignItems: "center",
  
    // [theme.breakpoints.down(768)]: {
    //   justifyContent: "center",
    // }
  },
  separator: {
    height: "5px",
    width: "85%",
    marginBottom: "10px",
    backgroundColor: "gray"
  },
  lateralBarButton:{
    display: "block",
    padding: "10px",
    width: "10px",
    marginBottom: "1px",
    transform: "scale(0.8)",
    "& svg": {
      transform: "scale(1.5)",
    },
    "&.Mui-disabled": {
      background: "rgba(0, 0, 0, 20%)",
      color: "black",
    }
  },
  lateralBarOptions:{
    marginTop: "10px",
    marginBottom: "auto",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    "&:last-child": {
      marginBottom: 0,
    }
  },
  headerLogo:{
    marginLeft: "30px"
  },
  headerUser:{
    background: "#f5f2ec",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",

    height: "100%",
    width: "350px",

    borderRadius: "0 0 0 45px",

    marginLeft: "auto",

    fontWeight: "bold",
    wordSpacing: "15px",
  
    // [theme.breakpoints.down(768)]: {
    //   display: "none"
    // }
  },
  lateralBar:{
    height: "90vh",
    width: "60px",

    backgroundColor: 'white',
    boxSizing:'border-box',
    border:'2px solid #969696',
    borderRadius: '50px 50px 0px 0px',
    borderBottomWidth: "0px",

    position: "fixed",
    left: "0",
    bottom: "0",

    display: "flex",
    flexFlow: "column",
    alignItems: "center",
  },
  options:{
    display: "flex",
    justifyContent: "space-between",
  },
}));
